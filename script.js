let buttonOne = document.querySelector('.btn-1')
let buttonTwo = document.querySelector('.btn-2')
let modal = document.querySelector('.new-content')

buttonOne.addEventListener('click', function(){
    modal.style.display = 'block'
    modal.style.display = 'flex'
    modal.style.textAlign = 'center'
   
  
})

buttonTwo.addEventListener('click',function(){
    modal.style.display = 'none'
})