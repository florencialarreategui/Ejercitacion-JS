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

