import './styles/styles.scss';

const content = document.querySelector('.content') as HTMLElement;

function include(address:string){
  fetch(address).then(resp => resp.text())
  .then(data => { content.innerHTML = data } )
}

include('./about-server-page.html');