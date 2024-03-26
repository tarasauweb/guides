class CreateSubMenu {
  props: any;
  selector: HTMLElement;
  constructor(props: any, selector: HTMLElement) {
    this.props = props;
    this.selector = selector;
    this.createSubMenuItem(props, this.selector);
  }

  private createSubMenuItem(props: any, selector: HTMLElement): HTMLElement {
    const li = document.createElement('li');
    const link = this.createSubAnchor(props);
    li.insertAdjacentElement('afterbegin', link);
    li.classList.add('menu__subitem');
    selector.insertAdjacentElement('afterbegin', li);
    return selector;
  }

  private createSubAnchor(props: any): HTMLElement {
    const link = document.createElement('a');
    link.setAttribute('href', props.path);
    link.setAttribute('type', props.type);
    link.textContent = props.linkName;
    link.classList.add('menu__sublink');
    return link;
  }
}

export default CreateSubMenu;
