//Ruleta
//el usuario debe elgir un numero entre 0 y 32
//hay que ver el tema de los colores si se puede elegir un color
//funcion math.random me da un numero al azar 
//arraya con los numeros el Math random me da el index
//otro math random para adjudicarle el color
// const greet = () =>{
//   confirm("¿Quieres jugar a la ruleta? :)")
// }
// greet()

const randomNumberFunction = (numero) =>{
   return Math.floor((Math.random()* numero)+1)
}
    
console.log(randomNumberFunction(32))
const randomNumber = randomNumberFunction(32)
console.log(randomNumber)
const rojo = "Rojo"
const negro = "Negro"

const randomColor = () =>{
    if(randomNumber % 2 == 0){
     
        return  rojo
    }
    else{
        return negro 
    }
}
console.log(randomColor())


// const startGame = () =>{
//     if(greet){
//         prompt("Escriba un número del 0 al 32")
//     }
//     else{
//         alert("Ufa :(")
//     }
// }
const userNumber = prompt("Escriba un número del 0 al 32")

console.log(randomNumber)


const showResults = () =>{
     alert(`El numero es ${randomNumber} color ${randomColor}`)
}

showResults()
const compareNumbers = () =>{
    if(randomNumber == userNumber){
        console.log("acertaste")
    }
    else{
        console.error("no acertaste") 
    }
   
}

const giveMessage = (callback) =>{
    if(callback){
        alert("Ganaste!!!!!")
    }
    else{
        alert("Vuelve a intentarlo")
    }
}

// compareNumbers()
giveMessage(compareNumbers)

//Incorporamos colores 


