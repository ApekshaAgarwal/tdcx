import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React from 'react';

export const ModelPopup = (
  props
) => {
  return (
    <Dialog
      disableEscapeKeyDown
      open={props.visible}
      onClose={props.handleMasterCancel}
      maxWidth={props.maxWidth}
      classes={props.classes}
      fullWidth={props.fullWidth}
      disableEnforceFocus
      PaperProps={props.paperProps}
    >
      <div title={props.title}>
        <DialogTitle>
          {props.title}
          {props.handleMasterCancel ? (
            <IconButton
              aria-label="close"
              className="model-close-icon"
              onClick={props.handleMasterCancel}
            >
              <span>
                <i className="brz-close-nocircle" />
              </span>
            </IconButton>
          ) : null}
        </DialogTitle>
      </div>
      <DialogContent dividers>{props.children}</DialogContent>
      {props.footer && <DialogActions>{props.footer}</DialogActions>}
    </Dialog>
  );
};
