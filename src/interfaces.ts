export interface ISubMenu {
  readonly linkName: string;
  readonly path: string;
  readonly type: string;
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
export interface IInfo {
  readonly imgUrl?: string;
  readonly title: string;
  readonly text: string;
  readonly title_task: string;
  readonly Location?: string;
  readonly about_task?: string;
  readonly title_drop: string;
  readonly drop_boss_1?: string;
  readonly drop_boss_2?: string;
  readonly drop_boss_3?: string;
  readonly drop_boss_4?: string;
  readonly drop_boss_5?: string;
  readonly drop_boss_6?: string;
  readonly drop_boss_7?: string;
  readonly drop_boss_8?: string;
  readonly drop_boss_9?: string;
  readonly title_monster?: string;
  readonly about_monster_1?: string;
  readonly about_monster_2?: string;
  readonly about_monster_3?: string;
  readonly title_features?: string;
  readonly text_features_1?: string;
  readonly text_features_2?: string;
  readonly text_features_3?: string;
}
export interface IEvents {
  readonly imgUrl: string;
  readonly name: string;
  readonly NPC: string;
  readonly Location: string;
  readonly Start: string;
  readonly days: string;
  readonly time: string;
  readonly info: IInfo;
}
export interface IInvasion {
  readonly imgUrl: string;
  readonly name: string;
  readonly Quantity: number | string;
  readonly Location: string;
  readonly Respawn: string;
  readonly Time: string;
  readonly info: IInfo;
}
export interface iTicket_Events {
  readonly imgUrl: string;
  readonly name: string;
  readonly NPC: string;
  readonly Location: string;
  readonly Respawn: '12:00 AM' | string;
  readonly Limit: number | string;
  readonly info: IInfo;
}
export interface IDataBase {
  events: [
    IEvents,
    IEvents,
    IEvents,
    IEvents,
    IEvents,
    IEvents,
    IEvents,
    IEvents,
    IEvents,
  ];
  invasion: [
    IInvasion,
    IInvasion,
    IInvasion,
    IInvasion,
    IInvasion,
    IInvasion,
    IInvasion,
    IInvasion,
  ];
  'ticket-events': [
    iTicket_Events,
    iTicket_Events,
    iTicket_Events,
    iTicket_Events,
    iTicket_Events,
    iTicket_Events,
    iTicket_Events,
  ];
}
export interface IStore {
  readonly submenu: IstoreSubMenu;
  // readonly datebase: IDataBase;
}
