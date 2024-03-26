import CreateSubMenu from './components/create-submenu';
import { ISubMenu, IstoreSubMenu } from './interfaces';
function menuAction(props: IstoreSubMenu, links: Array<HTMLElement>) {
  let prevSubMenu: HTMLElement;
  links.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (prevSubMenu) {
        prevSubMenu.innerHTML = '';
      }
      if (item.getAttribute('page') !== 'about-server') {
        const typePage = item.getAttribute('page') as keyof typeof props;
        const li = item.parentNode as HTMLElement;
        prevSubMenu = li.children[1] as HTMLElement;
        if (props[typePage]) {
          props[typePage].map((menuItem: ISubMenu) => {
            const subMenu = new CreateSubMenu(
              menuItem,
              li.children[1] as HTMLElement,
            );
            return subMenu;
          });
        }
      }
    });
  });
}
export default menuAction;
