export enum RootStackParamListEnum {
  Home = 'Home',
  Fire001 = 'Fire001',
}

export type RootStackParamList = {
  [RootStackParamListEnum.Home]: undefined;
  [RootStackParamListEnum.Fire001]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
