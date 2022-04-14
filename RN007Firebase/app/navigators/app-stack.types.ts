export enum RootStackParamListEnum {
  Home = 'Home',
}

export type RootStackParamList = {
  [RootStackParamListEnum.Home]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
