import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColor, AppFont, AppRouteName} from '../constants/app.constants';
import {SecondaryButton} from '../components/Button';

const SelectProfilePictureScreenUI = ({onPressNext}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile Picture</Text>
      <View style={styles.selectPicture} />
      <View style={styles.chooseImageContainer}>
        <View style={styles.chooseImageOptionContainer}>
          <View style={styles.iconContainer} />
          <Text style={styles.chooseImageText}>Take a photo</Text>
        </View>
        <View style={styles.chooseImageOptionContainer}>
          <View style={styles.iconContainer} />
          <Text style={styles.chooseImageText}>Select from gallery</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <SecondaryButton title={'Next'} onPress={onPressNext} />
      </View>
    </View>
  );
};

const SelectProfilePictureScreen = ({navigation}) => {
  const handleOnPressNext = () => {
    console.log('Next');
    navigation?.navigate(AppRouteName.registerScreen);
  };

  return <SelectProfilePictureScreenUI onPressNext={handleOnPressNext} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectPicture: {
    width: 150,
    height: 150,
    backgroundColor: AppColor.blue,
    borderRadius: 150,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: AppFont.semiBold,
  },
  iconContainer: {
    width: 75,
    height: 75,
    backgroundColor: AppColor.red,
    borderRadius: 75,
    marginBottom: 8,
  },
  chooseImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chooseImageOptionContainer: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  chooseImageText: {
    fontFamily: AppFont.regular,
  },
  actions: {
    display: 'flex',
    width: '80%',
    marginTop: 60,
  },
});

export default SelectProfilePictureScreen;
