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
  readonly title_task?: string;
  readonly Location?: string;
  readonly about_task?: string;
  readonly title_drop?: string;
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
export interface IBriefInformation {
  readonly imgUrl: string;
  readonly name: string;
  readonly NPC?: string;
  readonly Location?: string;
  readonly Quantity?: number | string;
  readonly Start?: string;
  readonly days?: string;
  readonly Respawn?: string;
  readonly Time?: string;
  readonly Drop?: string | number;
  readonly 'drop-count'?: string | number;
  readonly 'monster-count'?: string | number;
  readonly info: IInfo;
}
export interface IDataBase {
  events: [
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
  ];
  invasion: [
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
  ];
  'ticket-events': [
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
  ];
  'random-bosses': [
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
    IBriefInformation,
  ];
  'epic-bosses': [IBriefInformation, IBriefInformation, IBriefInformation];
}
export interface IStore {
  readonly submenu: IstoreSubMenu;
  // readonly datebase: IDataBase;
}
