import axios from 'axios';




const Baseurl = {
  url: "https://secret-citadel-11697.herokuapp.com",
};
let user;

let reduxStore;


const instance = axios.create();

const apiService = {
  updateUser: (userData = {}) => {
    user = { ...userData };
  },
  getReduxState() {
    return reduxStore ? reduxStore.getState() : null;
  },
  getAccessToken() {
    const state = this.getReduxState();
    return state?.user?.token;
  },
  getAzureADToken() {
    const state = this.getReduxState();
    return state?.azureAd?.data;
  },
  getRefreshToken() {
    const state = this.getReduxState();
    return state?.user?.data?.refresh_token;
  },

  getUser: () => user,
  request({
    methodName,
    serviceName = '',
    data = {},
    type = 'POST',
    showErrorAlert = false,
    isFormData = false,
    responseType,
    isBeacon = false,
    header = {}
  }) {
    let access_token = this.getAccessToken();

    if (methodName === 'login') {
      access_token = '';
    }

    const requestParams = {
      url: `${Baseurl.url}/${methodName}`,
      method: type
    };

    if (responseType) {
      Object.assign(requestParams, { responseType });
    }



    // let isFormData = FormData && data instanceof FormData ? true : false;
    const headers = {
      'Content-Type': !isFormData
        ? 'application/json;charset=UTF-8'
        : 'multipart/form-data',
      ...header
    };
    if (access_token) {
      Object.assign(headers, {
        Authorization: `${access_token}`
      });
    }


    Object.assign(requestParams, { headers: { ...headers } });
    const params = isFormData ? data : JSON.stringify(data);

    if (type === 'GET') {
      Object.assign(requestParams, {
        params: data
      });
    } else if (data) {
      Object.assign(requestParams, {
        data: params
      });
    }
    return new Promise((resolve, reject) => {
      instance(requestParams).then(
        (resp) => {
          resolve(
            resp.data
          );
        },
        (err) => {
          resolve(err);

        }
      );
    });
  }

};

export const apiServiceMiddleware = (store) => (next) => (action) => {
  reduxStore = store;
  return next(action);
};

export default apiService;
