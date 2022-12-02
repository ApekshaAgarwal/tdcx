import apiService from "../../../components/API";

export const login = (formRequestData) => {
  return apiService.request({
    methodName: 'login',
    data: formRequestData,
    type: 'POST'
  });
};