
const getElement=(selector) =>{

    const element = document.querySelector(selector)
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }

const linkes = getElement ('.nav-links')
const navBtnDOM=getElement ('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
    linkes.classList.toggle('show-links')
})
