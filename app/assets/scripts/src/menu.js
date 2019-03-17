const clickMobile = (seletor) => {
  const element = document.querySelector(`${seletor}`)
  const element_Dataset = element.dataset.menu
  console.log(element);
  console.log(element_Dataset);

  element.addEventListener('click', () => {
    /*
    const getElement = document.querySelector(`.${element_Dataset}`) 
    getElement.classList.toggle('ativo')
    */
   document.querySelector(`.${element_Dataset}`).classList.toggle('ativo')
  })


}

clickMobile('[data-menu="main__navegacao"]')
clickMobile('[data-menu="main__notificacao"]')

