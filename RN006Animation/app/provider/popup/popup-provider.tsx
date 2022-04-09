import React from 'react';
import {Popup, PopupRefType} from './popup';

const warn = () => console.error('Popup is not register');

export const PopupRef: PopupRefType = {
  open: warn,
  close: warn,
};

const registerPopup = (ref: PopupRefType) => {
  if (ref) {
    PopupRef.open = ref?.open;
    PopupRef.close = ref?.close;
  } else {
    PopupRef.open = warn;
    PopupRef.close = warn;
  }
};

export const PopupProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
      <Popup ref={registerPopup} />
    </>
  );
};
