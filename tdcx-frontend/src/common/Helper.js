import { toastNotification } from "../components/Toast";


export const HTTP_ERROR = 'HTTP_ERROR';


export const handleHTTPError = (error) => {
  if (error.success) {
    toastNotification(error.message, 'success');
  }
  if(!error.success){
    toastNotification(error.message, 'error');

  }

};

export const handleAuthHTTPError = (error) => {
  if (error && error.message) {
    toastNotification(error.message, 'error');
  }
};
