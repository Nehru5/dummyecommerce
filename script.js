let buy=document.querySelectorAll('.buy-button');
let price=document.querySelector('.price');
let rate=document.querySelector('.rate');
let container=document.querySelector('.continer');
let small_conatiner=document.querySelector('.small-container');







let box=document.querySelector('.box');
const number=document.querySelector('.number');
let quantity=document.querySelector('.quantity');
let header=document.querySelector('.header')
let para=document.querySelector('.para');
let label=document.querySelector('.radio-group')
let order=document.querySelector('.order');
let address=document.querySelector('.address');
let submit=document.querySelector('.submit');
let header1=document.querySelector('.header-address')
let final=document.querySelector('.final');
let main=document.querySelector('.main');
let main_box=document.querySelector('.main-box');

console.log(para=`${rate.textContent}`);




quantity.addEventListener('click',function()

{
  
  if(number.value!=0){
    let total=number.value * para;
    header.textContent=`Total:${total}`;
    label.classList.add('radio')
    order.classList.add('orders')
    
   

  }
  else{
    header.textContent="Total:please enter the quantity"
  }
})
submit.addEventListener('click',function(){
header1.textContent=`Your Adress:${address.value}`;
})
order.addEventListener('click',function(){
    final.classList.add('finals');
})
