function setBgColorById(elementId) {
    const element= document.getElementById(elementId)
    element.classList.add("bg-[#1DD100]")
    element.classList.add("text-white")
 }


//  stringInNumber

function  stringInNumber(idName) {
    seatsLeft=document.getElementById(idName).innerText
    let inNumber =parseInt(seatsLeft)
    return inNumber
}

function hiddenElementById(elementId) {
    const element=document.getElementById(elementId)
    element.classList.add("hidden")
  
}
function showElementById(elementId) {
    const element=document.getElementById(elementId)
    element.classList.remove("hidden")
  
}

function showButtonById(elementId) {
    const element=document.getElementById(elementId)
    element.classList.remove("disabled")
  
}



