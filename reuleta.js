const buttonStart = document.getElementById("boton-tirar")
const buttonReset = document.getElementById("boton-reset")
const acertasteColor = document.getElementById("acertaste-color")
const acertasteNumero = document.getElementById("acertaste-numero")
const cuadradoNumeroRuleta = document.getElementById("div-color-ruleta")
const inputNumeros = document.getElementById("input-numeros")
const selectColor = document.getElementById("select-color")
const numeroRuleta = document.getElementById("numero-ruleta-elegido")
const numeroGanador = document.getElementById("numero-ganador")
const colorGanador = document.getElementById("div-color-ganador")
const divGanador = document.getElementById("div-ganador")

//---------------color y numeros random-------------------------
const randomNumberFunction = (numero) =>{
    return Math.floor((Math.random()* numero)+1)
  }
  const randomNumber = randomNumberFunction(37)

  const randomColor = () =>{
    if(randomNumber % 2 == 0){
      colorGanador.classList.add("rojo")
      return "rojo"
    }
    else{
      colorGanador.classList.add("negro")
      return "negro"
    }
}

//---------------funcion que avisa que resultado obtuviste-------------------------
const youWin = () =>{
    if(randomNumber == inputNumeros.value && randomColor() == selectColor.value){
      acertasteNumero.style.display = "flex"
      acertasteColor.style.display = "flex"
    }
    else if(randomNumber == inputNumeros.value ){
      acertasteNumero.style.display = "flex"
    }
    else if(randomColor == selectColor.value){
      acertasteColor.style.display = "flex"
    }
    else{
        console.error("no acertaste") 
    }
  }

  //-------------tomo el valor del input y lo paso al div de numero seleccionado ---------------------

inputNumeros.addEventListener("change", ()=>{
    numeroRuleta.textContent = inputNumeros.value; 
  });

   //-------------tomo el valor del select y le doy el color ---------------------
  selectColor.addEventListener("change", ()=>{
    if(selectColor.value === "rojo"){
      cuadradoNumeroRuleta.classList.add("rojo")
    }
     else if(selectColor.value === "negro"){
      cuadradoNumeroRuleta.classList.add("negro") 
    }
  
  });
//----------- funcion boton start------------------
  buttonStart.addEventListener("click", ()=>{
  divGanador.style.display = "flex"
  numeroGanador.textContent = randomNumber; 
  randomColor()
  youWin()
});
//----------- funcion boton reset------------------
buttonReset.addEventListener("click", ()=>{
  numeroGanador.textContent = 0; 
  divGanador.style.display = "none"
  
});

//-----------------------------------------------------------------------------------------------------