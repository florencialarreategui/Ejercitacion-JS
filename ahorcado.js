//ahorcado
export const ahorcadoInicio = () =>{
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

}