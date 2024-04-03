/*  eslint no-param-reassign: "error"  */
function renderStaticPage(tagForContent: HTMLElement, urlPage: string) {
  return fetch(urlPage)
    .then((data) => data.text())
    .then((data) => {
      tagForContent.innerHTML = data;
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, 'null', '/');
      return tagForContent;
    });
}
export default renderStaticPage;
