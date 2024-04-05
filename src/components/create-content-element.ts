// eslint-disable-next-line camelcase
import { IEvents, IInvasion, iTicket_Events } from '../interfaces';
// eslint-disable-next-line camelcase
type contentType = IEvents | IInvasion | iTicket_Events;
class CreateContentElement {
  content: HTMLElement;
  props: Array<contentType>;
  constructor(content: HTMLElement, props: Array<contentType>) {
    this.content = content;
    this.props = props;
    this.createContent();
  }

  private createContent() {
    if (this.props) {
      const arrForContent = structuredClone(this.props);
      arrForContent.forEach((element) => {
        this.createElement(this.content, element);
      });
    }
  }

  private createElement(content: HTMLElement, props: contentType) {
    const divMian = document.createElement('div') as HTMLElement;
    const image = document.createElement('img') as HTMLElement;
    image.classList.add('content__image');
    divMian.insertAdjacentElement('afterbegin', image);
    image.setAttribute('src', props.imgUrl);
    image.setAttribute('alt', props.name);
    divMian.classList.add('content__block');
    Object.keys(props).forEach((elem) => {
      if (elem !== 'imgUrl' && elem !== 'info') {
        const divInformation = document.createElement('div') as HTMLElement;
        divInformation.classList.add('content__info');
        divInformation.classList.add(`content__${elem}`);
        divInformation.innerHTML = `<span class="content__key">${elem.toUpperCase()}:</span> ${
          props[elem as keyof typeof props]
        }`;
        divMian.insertAdjacentElement('beforeend', divInformation);
      }
    });
    content.insertAdjacentElement('beforeend', divMian);
    return content;
  }
}

export default CreateContentElement;
