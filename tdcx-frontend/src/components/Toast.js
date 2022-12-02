import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const defaultErrorMessage =
  'Something went wrong please try again';
const defaultSuccessMessage = 'Operation successfull!';

export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const toastNotification = (message, status = 'success', toastId) => {
  const id = toastId || message;
  if (!toast.isActive(id)) {
    if (status === 'success') {
      return toast.success(message, {
        toastId: id
      });
    }
    if (status === 'info') {
      return toast.info(message, {
        toastId: id
      });
    }
    if (status === 'error') {
      return toast.error(message, {
        toastId: id
      });
    }
  }
};

export const handleAPIResponse = (response) => {

  if (response.message) {
    const status = !response.success ? 'error' : 'success';
    const defaultMessage =
      status === 'error' ? defaultErrorMessage : defaultSuccessMessage;
    const message = response.message ? response.message : defaultMessage;
    toastNotification(message, status);
  }
};
