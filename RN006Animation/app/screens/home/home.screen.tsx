import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HomeScreenPropsType} from './home.screen.types';
import {IconChevronRight} from '../../components/icons/icons';
import {APP_STACK_SCREEN_LIST, Screen} from '../../App';

export const HomeScreen: React.FC<HomeScreenPropsType> = ({navigation}) => {
  const screenList = APP_STACK_SCREEN_LIST;
  const navigateToScreen = (screen: Screen) => {
    navigation.navigate(screen.screenName);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {screenList.map(screen => (
          <TouchableOpacity
            key={screen.screenName}
            onPress={() => navigateToScreen(screen)}
            style={styles.screenListItem}>
            <Text>{screen.title}</Text>
            <IconChevronRight />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  screenListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
});
