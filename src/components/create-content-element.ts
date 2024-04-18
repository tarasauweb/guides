// eslint-disable-next-line camelcase
import { IBriefInformation, IInfo } from '../interfaces';
// eslint-disable-next-line camelcase
type contentType = IBriefInformation;
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
      this.content.classList.add('content__active');
      const allDivsWithContent = this.createDivWithAllElements();
      arrForContent.forEach((element) => {
        allDivsWithContent.insertAdjacentElement(
          'beforeend',
          this.createElement(element),
        );
      });
      this.content.insertAdjacentElement('beforeend', allDivsWithContent);
    }
  }

  private createDivWithAllElements() {
    const div = document.createElement('div');
    div.classList.add('content__left');
    return div;
  }

  private createContentInfo(props: IInfo) {
    const contentRight = document.createElement('div');
    if (props) {
      contentRight.classList.add('content__right');
      Object.keys(props).forEach((elem) => {
        if (elem === 'title') {
          const title = document.createElement('h2');
          title.classList.add('content__title');
          title.textContent = `${props[elem as keyof typeof props]}`;
          contentRight.insertAdjacentElement('afterbegin', title);
        }
        if (elem === 'text') {
          const text = document.createElement('p');
          text.classList.add('content__text');
          text.textContent = `${props[elem as keyof typeof props]}`;
          contentRight.insertAdjacentElement('beforeend', text);
        }
        if (elem.includes('title_')) {
          const title = document.createElement('h3');
          title.classList.add('content__subtitle');
          title.textContent = `${props[elem as keyof typeof props]}`;
          contentRight.insertAdjacentElement('beforeend', title);
        }
        if (elem !== 'title' && elem !== 'text' && !elem.includes('title_')) {
          const otherInfo = document.createElement('p');
          otherInfo.classList.add('content__subtext');
          otherInfo.textContent = `${props[elem as keyof typeof props]}`;
          contentRight.insertAdjacentElement('beforeend', otherInfo);
        }
      });
    }
    return contentRight;
  }

  private createElement(props: contentType) {
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
    divMian.addEventListener('click', () => {
      if (this.content.children[1]) this.content.children[1].remove();
      this.content.insertAdjacentElement(
        'beforeend',
        this.createContentInfo(props.info),
      );
    });
    return divMian;
  }
}

export default CreateContentElement;
