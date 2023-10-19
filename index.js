// const botonTirar = document.getElementById("boton-tirar")
// const acertasteColor = document.getElementById("acertaste-color")
// const acertasteNumero = document.getElementById("acertaste-numero")
// const cuadradoNumeroRuleta = document.getElementById("div-color-ruleta")
// const inputNumeros = document.getElementById("input-numeros")
// const selectColor = document.getElementById("select-color")
// const numeroRuleta = document.getElementById("numero-ruleta-elegido")
// const numeroGanador = document.getElementById("numero-ganador")
// const colorGanador = document.getElementById("div-color-ganador")
// const divGanador = document.getElementById("div-ganador")
// // document.getElementById("myAnchor").
// //Ruleta
// //el usuario debe elgir un numero entre 0 y 32
// //hay que ver el tema de los colores si se puede elegir un color
// //funcion math.random me da un numero al azar 
// //arraya con los numeros el Math random me da el index
// //otro math random para adjudicarle el color
// // const greet = () =>{
// //   confirm("¿Quieres jugar a la ruleta? :)")
// // }
// // greet()
// // addEventListener("input", function(event){
// //   event.preventDefault()
// // });

// //---------------color y numeros random-------------------------
// const randomNumberFunction = (numero) =>{
//   return Math.floor((Math.random()* numero)+1)
// }
// const randomNumber = randomNumberFunction(37)

// const randomColor = () =>{
//     if(randomNumber % 2 == 0){
//       colorGanador.classList.add("rojo")
//       return "rojo"
//     }
//     else{
//       colorGanador.classList.add("negro")
//       return "negro"
//     }
// }


// // const putRandomColor = () =>{
// //   if(selectColor.value === "rojo"){
// //     cuadradoNumeroRuleta.classList.add("rojo")
// //   }
// //    else if(selectColor.value === "negro"){
// //     cuadradoNumeroRuleta.classList.add("negro")
// //   }
// // }
// // putRandomColor()


// //----------------------valor del input lo paso al div de numero seleccionado
// inputNumeros.addEventListener("change", ()=>{
//   numeroRuleta.textContent = inputNumeros.value; 
// });



// selectColor.addEventListener("change", ()=>{
//   if(selectColor.value === "rojo"){
//     cuadradoNumeroRuleta.classList.add("rojo")
//   }
//    else if(selectColor.value === "negro"){
//     cuadradoNumeroRuleta.classList.add("negro") 
//   }

// });

// const youWin = () =>{
//   if(randomNumber == inputNumeros.value && randomColor() == selectColor.value){
//     acertasteNumero.style.display = "flex"
//     acertasteColor.style.display = "flex"
//   }
//   else if(randomNumber == inputNumeros.value ){
//     acertasteNumero.style.display = "flex"
//   }
//   else if(randomColor == selectColor.value){
//     acertasteColor.style.display = "flex"
//   }
//   else{
//       console.error("no acertaste") 
//   }
// }



// const giveMessage = (callback) =>{
//     if(callback){
//         alert("Ganaste!!!!!")
//     }
//     else{
//         alert("Vuelve a intentarlo")
//     }
// }
// esta funcion tendra qeu tomar 4 funcioens de apramentros, 1 para saber si gano el numero,
 //otra para ver si gano el color, otra para cambiar de color el cuadrado y otra para poner el numero en el caudrado
// const mostrarresultado = () =>{
//     console.log("Hola")
// }

// botonTirar.onclick = mostrarresultado

// botonTirar.addEventListener("click", (event) => {
//     console.log("Hola");
//   });
// compareNumbers()
// giveMessage(compareNumbers)

// //Incorporamos colores 


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
//ahorcado
const palabrasParaJugar = ["roca","sopa"];
let palabraRandom = "";

// Tomo del DOM el boton de iniciar
let btnPlay = document.querySelector('#btn-play');
// Me suscribo al evento click del boton para dar inicio al juego
btnPlay.addEventListener('click',()=>{
  // cuando hacen click inicio el juego
    jugar();
});


function seleccionarPalabraRandom(listaDePalabras){//aca iria el arreglo y elije la palabra me esta mandandostring
    let index =  Math.floor(Math.random ()*(listaDePalabras.length));
    return listaDePalabras[index];   
 }

function arregloConGuiones(arrayDePalabra){// arma el arreglo con guiones de la palabra random
  let arregloConguiones = [];
    for (let i=0 ; i < arrayDePalabra.length ; i++) {
      arregloConguiones.push('_')
    }
  return arregloConguiones;
}




function existeLetraEnPalabra(letraIngresada, arrayDePalabra) {

  for ( let i=0 ; i < arrayDePalabra.length ; i++){
 
    if(arrayDePalabra[i] === letraIngresada) { 
      console.log("Encontraste una letra!");
      return true;
      
    }
  }
  
  console.log("No se encuentra la letra en la palabra");
  
  return false;
       
     
   
}
  
  

function completarArregloDeGuionesConLetraIngresada(letraIngresada,arrayDePalabraSeleccionada,palabraDeGuiones){

  let posicionesDeLetra = [];

  let auxPalabraGuiones = palabraDeGuiones;

  arrayDePalabraSeleccionada.forEach((letra, i) => {
    if(letraIngresada === letra) {
      posicionesDeLetra.push(i);
    }
  });

    for( let i = 0 ; i < posicionesDeLetra.length ; i++ ){
      auxPalabraGuiones[posicionesDeLetra[i]] = letraIngresada;
    }

    return auxPalabraGuiones;
  }

  function cortarSiAdivina(arrayDePalabra) {
        return !arrayDePalabra.includes('_');
  }


    function jugar() {


      let palabraSeleccionada = seleccionarPalabraRandom(palabrasParaJugar);
      let arrayDePalabraSeleccionada = palabraSeleccionada.split("");
      let palabraDeGuiones = arregloConGuiones(arrayDePalabraSeleccionada);
      let letrasIngresadas = [];
     

   
      let cantidadDeIntentos = arrayDePalabraSeleccionada.length + 2;
      let adivino = false;


      alert(`La palabra a adivinar tiene ${arrayDePalabraSeleccionada.length} letras, tenes ${cantidadDeIntentos} intentos`);
      console.log (palabraDeGuiones);

      while (cantidadDeIntentos > 0 && adivino === false ) { 

        let letraIngresada = prompt("Ingresa una letra");
        letrasIngresadas.push(letraIngresada);

        cantidadDeIntentos -=1;


         // Si la letra ingresada existe en la palabra seleccionada para jugar,
         // completo la letra en la posicion que corresponde
         if (existeLetraEnPalabra(letraIngresada,arrayDePalabraSeleccionada)) {

            // Reemplazo los guiones por la letra ingresada
            palabraDeGuiones = completarArregloDeGuionesConLetraIngresada(letraIngresada,arrayDePalabraSeleccionada,palabraDeGuiones);
            
            // Si la palabra se completa , termino el juego
            if(cortarSiAdivina(palabraDeGuiones)) {              
              adivino = true;
            }
            console.log(palabraDeGuiones);


          } else{
            console.log(`Te quedan ${cantidadDeIntentos} intentos`);
         }

         console.log(`Las letras que ya ingresaste son: ${letrasIngresadas}`);
      }

      if (adivino === false) {
          alert(`Segui intentando, la palabra era '${palabraSeleccionada}'`);
      } else { // El jugador adivino la palabra
          alert(`Ganaste !, la palabra era '${palabraSeleccionada}'`,);
      }
  }

