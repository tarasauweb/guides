import { ISubMenu } from '../interfaces';
import renderContent from '../renders/render-content';
import startViewTransition from '../renders/startViewTransition';
class CreateSubMenu {
  props: ISubMenu;
  selector: HTMLElement;
  content: HTMLElement;
  constructor(props: ISubMenu, selector: HTMLElement, content: HTMLElement) {
    this.props = props;
    this.selector = selector;
    this.content = content;
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
    link.addEventListener('click', (e) => {
      startViewTransition();
      e.preventDefault();
      // eslint-disable-next-line no-restricted-globals
      location.hash = props.type;
      renderContent(this.content, props.type);
    });
    return link;
  }
}

export default CreateSubMenu;
