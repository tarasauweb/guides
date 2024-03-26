import './styles/styles.scss';
import store from './store/store';
import renderContent from './render-pages';
import menuAction from './menu-action';
const content = document.querySelector('.content') as HTMLElement;
const mainMenuLinks: HTMLElement[] = Array.from(
  document.querySelectorAll('.menu__link'),
);
renderContent(content, './pages/about-server-page.html');

menuAction(store.submenu, mainMenuLinks);
