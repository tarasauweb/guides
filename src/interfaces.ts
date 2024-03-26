export interface ISubMenu {
  linkName: string;
  path: string;
  type: string;
}
export interface IstoreSubMenu {
  events: [ISubMenu, ISubMenu, ISubMenu];
  bosses: [ISubMenu, ISubMenu, ISubMenu];
  treasures: [ISubMenu, ISubMenu, ISubMenu];
  classes: [
    ISubMenu,
    ISubMenu,
    ISubMenu,
    ISubMenu,
    ISubMenu,
    ISubMenu,
    ISubMenu,
  ];
}
export interface IStore {
  submenu: IstoreSubMenu;
}
