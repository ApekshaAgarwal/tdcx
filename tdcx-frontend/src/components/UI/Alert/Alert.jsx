import { Button } from '@mui/material';
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';

import { ModelPopup } from '../Popup';
const noop = () => null

function Alert({
  type = 'info',
  content = '',
  title = '',
  onOk = () => null,
  onClose = () => null,
  okButtonClassName = '',
  cancelButtonClassName = '',
  visible = false,
  okButtonLoading = false,
  closable = true,
  okText = 'Ok',
  cancelText = 'Cancel',
  closeOnOutsideClick = false,
  customizeFooter = false,
  footer = [],
  className
}) {
  const alertContent = useMemo(() => {
    return <div className="confirm-text">{content || ''}</div>;
  }, [content]);

  const footerButton = useCallback(() => {
    if (customizeFooter) {
      const buttons = _.map(footer, (o, k) => {
        const extraProps = o.extraProps ? o.extraProps : {};
        return (
          <Button
            key={k}
            {...extraProps}
            type={o.type || 'primary'}
            className={o.className || ''}
            onClick={o.onClick || noop}
          >
            {o.children || ''}
          </Button>
        );
      });
      return { footer: buttons };
    }
    return {
      footer: [
        <>
          {okText && (
            <Button
              key="submit"
              type="primary"
              onClick={onOk}
            >
              {okText || 'Yes'}
            </Button>
          )}

          {cancelText && (
            <Button
              key="back"
              type="primary"
              variant="outlined"
              className={`primary-outlined mr-2 ${cancelButtonClassName}`}
              onClick={onClose}
              data-testid="alert-no"
            >
              {cancelText || 'No'}
            </Button>
          )}
        </>
      ]
    };
  }, [
    customizeFooter,
    footer,
    okText,
    onClose,
    cancelText,
    cancelButtonClassName,
    okButtonLoading,
    onOk
  ]);

  if (!visible) {
    return <></>;
  }

  if (type === 'confirm') {
    return (
      <ModelPopup
        title={title || 'Alert'}
        visible={visible}
        closable={closable}
        handleMasterCancel={onClose}
        {...footerButton()}
        paperProps={{className: className}}
      >
        {alertContent}
      </ModelPopup>
    );
  }
  return (
    <ModelPopup
      title={title || 'Alert'}
      visible={visible}
      closable={closable}
      closeIcon={<div></div>}
      handleMasterCancel={onClose}
      paperProps={{className: className}}
      footer={[
        <Button
          key="submit"
          type="primary"
          className="mr-2"
          loading={okButtonLoading}
          onClick={onOk}
        >
          {okText || 'Ok'}
        </Button>
      ]}
    >
      {alertContent}
    </ModelPopup>
  );
}
export default Alert;
