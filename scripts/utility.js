function addBackgroundColorById(elementId){
  const element=document.getElementById(elementId);
  element.classList.add('bg-ticket-primary');
  element.classList.add('text-white');
}
function hideCuponDivById(elementId){
  const element=document.getElementById(elementId);
  element.setAttribute("class", "invisible");
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

function getInputValueById(elementId){
  const val=document.getElementById(elementId).value;
  return String(val);
}