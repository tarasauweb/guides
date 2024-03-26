interface ISubMenu {
  linkName: string;
  path: string;
  type: string;
}
interface IStore {
  submenu: {
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
  };
}

const store: IStore = {
  submenu: {
    events: [
      {
        linkName: 'Events',
        path: '/events',
        type: 'events',
      },
      {
        linkName: 'Invasion',
        path: '/invasion',
        type: 'invasion',
      },
      {
        linkName: 'Ticket Events',
        path: '/ticket-events',
        type: 'ticket-events',
      },
    ],
    bosses: [
      {
        linkName: 'Random Bosses',
        path: '/random-bosses',
        type: 'random-bosses',
      },
      {
        linkName: 'Epic Bosses',
        path: '/epic-bosses',
        type: 'epic-bosses',
      },
      {
        linkName: 'Golden Bosses',
        path: '/golden-bosses',
        type: 'golden-bosses',
      },
    ],
    treasures: [
      {
        linkName: 'Boxes',
        path: '/boxes',
        type: 'boxes',
      },
      {
        linkName: 'Jewels',
        path: '/jewels',
        type: 'jewels',
      },
      {
        linkName: 'Scrolls',
        path: '/scrolls',
        type: 'scrolls',
      },
    ],
    classes: [
      {
        linkName: 'Dark Knight',
        path: '/dark-knight',
        type: 'dark-knight',
      },
      {
        linkName: 'Dark Wizard',
        path: '/dark-wizard',
        type: 'dark-wizard',
      },
      {
        linkName: 'Fairy Elf',
        path: '/fairy-elf',
        type: 'fairy-elf',
      },
      {
        linkName: 'Magic Gladiator',
        path: '/magic-gladiator',
        type: 'magic-gladiator',
      },
      {
        linkName: 'Dark Lord',
        path: '/dark-lord',
        type: 'dark-lord',
      },
      {
        linkName: 'Summoner',
        path: '/summoner',
        type: 'summoner',
      },
      {
        linkName: 'Summoner',
        path: '/summoner',
        type: 'summoner',
      },
    ],
  },
};

export default store;
