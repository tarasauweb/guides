/*  eslint no-param-reassign: "error"  */
function renderContent(tagForContent: HTMLElement, urlPage: string) {
  return fetch(urlPage)
    .then((data) => data.text())
    .then((data) => {
      tagForContent.innerHTML = data;
      return tagForContent;
    });
}
export default renderContent;
