let clickCnt=0;
function handleMouseClick(event){
  const userClick=event.target.id;

  if(userClick==null){
    console.log("there is no id");
  }else{
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

      removeBtnDisable('cupon-btn');
    }

  }

  
}
document.addEventListener('click',handleMouseClick);