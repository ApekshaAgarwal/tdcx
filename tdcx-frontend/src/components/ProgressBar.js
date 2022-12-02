import LoadingBar, { hideLoading, showLoading } from 'react-redux-loading-bar';

export const ProgressBar = () => {
  return (
    <LoadingBar
      showFastActions
      style={{ backgroundColor: '#42f587', height: '3px', zIndex: '9999' }}
    />
  );
};

export const loading = (dispatch, type = true) => {
  dispatch(hideLoading());
  return type ? dispatch(showLoading()) : dispatch(hideLoading());
};
