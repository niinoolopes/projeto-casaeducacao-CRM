if( window.innerWidth > 768 ){
  console.log('maior');
  const heightAside = document.querySelector('.aside__menu').offsetHeight;
  document.querySelector('.main__page').style.height = `${heightAside}px`; 
}
// const btn = document.querySelector('#tbn-menu')
// btn.addEventListener('click',function(){
//   document.querySelector('.asideMain').classList.toggle('ativo')
// })