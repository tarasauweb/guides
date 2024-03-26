import { IStore } from '../interfaces';

const store: IStore = {
  submenu: {
    events: [
      {
        linkName: 'Ticket Events',
        path: '/ticket-events',
        type: 'ticket-events',
      },
      {
        linkName: 'Invasion',
        path: '/invasion',
        type: 'invasion',
      },
      {
        linkName: 'Events',
        path: '/events',
        type: 'events',
      },
    ],
    bosses: [
      {
        linkName: 'Golden Bosses',
        path: '/golden-bosses',
        type: 'golden-bosses',
      },
      {
        linkName: 'Epic Bosses',
        path: '/epic-bosses',
        type: 'epic-bosses',
      },
      {
        linkName: 'Random Bosses',
        path: '/random-bosses',
        type: 'random-bosses',
      },
    ],
    treasures: [
      {
        linkName: 'Scrolls',
        path: '/scrolls',
        type: 'scrolls',
      },
      {
        linkName: 'Jewels',
        path: '/jewels',
        type: 'jewels',
      },
      {
        linkName: 'Boxes',
        path: '/boxes',
        type: 'boxes',
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
