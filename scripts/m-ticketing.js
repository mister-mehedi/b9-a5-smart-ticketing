let clickCnt=0;
let arr=[];
function handleMouseClick(event){
  const userClick=event.target.id;

  if(userClick && userClick!='cupon-btn' && userClick!='p-phone' && userClick!='p-name' && userClick!='next-btn' && userClick!='cupon-div'){
    // const aElement=document.getElementById(userClick);
    // const aText=aElement.innerText;
    // console.log(aText);

    // Check not more than 4 seat

    clickCnt++;
    if(clickCnt<=4){
      // Add color to the selected seat
      addBackgroundColorById(userClick);

      // Update seat remaining
      let dec=getElelmentValueById('seat-rem');
      setElelmentValueById('seat-rem',--dec);

      // update seat count
      let inc=getElelmentValueById('seat-cnt');
      setElelmentValueById('seat-cnt',++inc);

      // update total price
      let totalPrice=getElelmentValueById('total-price');
      setElelmentValueById('total-price',(totalPrice+550));

      // update grand total
      let grandTotal=getElelmentValueById('grand-total');
      setElelmentValueById('grand-total',(grandTotal+550));

      // Next button remove disable
      removeBtnDisable('next-btn');

      // Cupon button remove disable
      removeBtnDisable('cupon-btn');
    }
  }else if(userClick=='next-btn'){
    let userName=getInputValueById('p-name');
    let userPhone=getInputValueById('p-phone');

    if(userPhone.length>0 && userName.length>0){
      console.log("hello")
    }
  }else if(userClick=='cupon-btn'){
    let cuponInput=getInputValueById('cupon-input');

    if(cuponInput==="NEW15" ){
      let grandTotal=getElelmentValueById('grand-total');
        grandTotal=grandTotal*0.85;
        setElelmentValueById('grand-total',grandTotal);

        hideCuponDivById('cupon-div');
    }else if(cuponInput==="COUPLE 20"){
      let grandTotal=getElelmentValueById('grand-total');
        grandTotal=grandTotal*0.80;
        setElelmentValueById('grand-total',grandTotal);

        hideCuponDivById('cupon-div');

    }
  }
  
}
document.addEventListener('click',handleMouseClick);

      // console.log(userName);
      // console.log(userPhone);