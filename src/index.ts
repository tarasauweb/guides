import './styles/styles.scss';
import store from './store/store';
import renderStaticPage from './renders/render-staic-page';
import menuAction from './renders/render-menu';
const content = document.querySelector('.content') as HTMLElement;
const mainMenuLinks: HTMLElement[] = Array.from(
  document.querySelectorAll('.menu__link'),
);
renderStaticPage(content, './static-page/about-server-page.html');

menuAction(store.submenu, mainMenuLinks);
