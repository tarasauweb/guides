import { ISubMenu } from '../interfaces';
class CreateSubMenu {
  props: ISubMenu;
  selector: HTMLElement;
  constructor(props: ISubMenu, selector: HTMLElement) {
    this.props = props;
    this.selector = selector;
    this.createSubMenuItem(props, this.selector);
  }

  private createSubMenuItem(
    props: ISubMenu,
    selector: HTMLElement,
  ): HTMLElement {
    const li = document.createElement('li');
    const link = this.createSubAnchor(props);
    li.insertAdjacentElement('afterbegin', link);
    li.classList.add('menu__subitem');
    selector.insertAdjacentElement('afterbegin', li);
    return selector;
  }

  private createSubAnchor(props: ISubMenu): HTMLElement {
    const link = document.createElement('a');
    link.setAttribute('href', props.path);
    link.setAttribute('type', props.type);
    link.textContent = props.linkName;
    link.classList.add('menu__sublink');
    link.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      location.hash = props.type;
    });
    return link;
  }
}

export default CreateSubMenu;
