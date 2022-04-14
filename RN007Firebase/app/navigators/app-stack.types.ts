export enum RootStackParamListEnum {
  Home = 'Home',
  Fire001 = 'Fire001',
  Fire002 = 'Fire002',
  Fire003 = 'Fire003',
  Fire004 = 'Fire004',
  Fire005 = 'Fire005',
}

export type RootStackParamList = {
  [RootStackParamListEnum.Home]: undefined;
  [RootStackParamListEnum.Fire001]: undefined;
  [RootStackParamListEnum.Fire002]: undefined;
  [RootStackParamListEnum.Fire003]: undefined;
  [RootStackParamListEnum.Fire004]: undefined;
  [RootStackParamListEnum.Fire005]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
