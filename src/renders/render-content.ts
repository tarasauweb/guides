import { IDataBase } from '../interfaces';
async function getData(url: string): Promise<IDataBase> {
  const res = await fetch(url);
  const data: IDataBase = await res.json();
  return data;
}

function renderContent(content: HTMLElement, typeContent: string | null) {
  // eslint-disable-next-line no-param-reassign
  content.innerHTML = '';
  const url = '../database/database.json';
  const storedPromise = getData(url);
  storedPromise.then((res) => {
    const data = res[typeContent as keyof typeof res];
    console.log(data);
  });

  return content.insertAdjacentHTML('afterbegin', `<h1>${typeContent}</h1>`);
}
export default renderContent;
