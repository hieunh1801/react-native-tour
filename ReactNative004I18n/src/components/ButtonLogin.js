import React from 'react';
import {useTranslation} from 'react-i18next';

import {TouchableHighlight, Text} from 'react-native';

const ButtonLogin = () => {
  const [translate, i18n] = useTranslation();

  return (
    <TouchableHighlight>
      <Text>{translate('button_login')}</Text>
    </TouchableHighlight>
  );
};

export default ButtonLogin;
