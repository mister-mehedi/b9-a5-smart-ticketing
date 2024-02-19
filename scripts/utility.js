function addBackgroundColorById(elementId){
  const element=document.getElementById(elementId);
  element.classList.add('bg-ticket-primary');
  element.classList.add('text-white');
}

function removeBtnDisable(elementId){
  const element=document.getElementById(elementId);
  element.removeAttribute('disabled');
}

function getElelmentValueById(elementId){
  const element=document.getElementById(elementId);
  const elementValueText=element.innerText;
  const value=parseInt(elementValueText);
  return value;
}
function setElelmentValueById(elementId, value){
  const element=document.getElementById(elementId);
  element.innerText=value;
}