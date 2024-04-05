import { IDataBase } from '../interfaces';
import CreateContentElement from '../components/create-content-element';
async function renderContent(content: HTMLElement, typeContent: string | null) {
  // eslint-disable-next-line no-param-reassign
  content.innerHTML = '';
  const res = await fetch('../database/database.json');
  const dataBase: IDataBase = await res.json();
  const data = dataBase[typeContent as keyof typeof dataBase];
  return new CreateContentElement(content, data);
}
export default renderContent;
