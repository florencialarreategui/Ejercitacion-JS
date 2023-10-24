//Declaro en objetos las preguntas
const A = {
    pregunta : "¿Que tendencia musical es la que mas incursiona en Jamaica?",
    opc1 : "Rock",
    opc2 : "Jazz",
    opc3 : "Reggae",
    correcta : "3",
}

const B = {
    pregunta : "¿Cual es la famosa cueva que se narra el Quijote? ",
    opc1 : "Las grutas de Ongamira",
    opc2 : "Montesinos",
    opc3 : "Waira",
    correcta : "2",
}

const C = {
    pregunta : "¿Que usamos para diluir los colores de las acuarelas? ",
    opc1 : "Agua",
    opc2 : "Alcohol",
    opc3 : "Ambas son correctas",
    correcta : "1",
}

const D = {
    pregunta : "¿Cuantos anillos fueron creados por Sauron para los Senores Enanos en el Senor de los Anillos? ",
    opc1 : "12",
    opc2 : "7",
    opc3 : "1",
    correcta : "2",
}

const E = {
    pregunta : "¿Como se llama el padre que devora a su hijo en una obra de Francisco de Goya? ",
    opc1 : "Saturnino",
    opc2 : "Voldemort",
    opc3 : "Saturno",
    correcta : "3",
}

const F = {
    pregunta : "¿Como se llama la rama de la medicina que estudia las hormonas y las glandulas? ",
    opc1 : "Urologia",
    opc2 : "Cardiologia",
    opc3 : "Endocrinologia",
    correcta : "3",
}

const G = {
    pregunta : "¿Que dedo de la mano solo tiene dos falanges? ",
    opc1 : "Indice",
    opc2 : "Pulgar",
    opc3 : "Anular",
    correcta : "2",
}

const H = {
    pregunta : "¿Que es la fosfatidiletanolamina? ",
    opc1 : "Una combinacion de elementos de la tabla periodica",
    opc2 : "Un fosfolipido",
    opc3 : "Una enfermedad",
    correcta : "2",
}

const I = {
    pregunta : "¿Que enfermedad se produce por la deficiencia en la produccion de la hormona insulina por parte del pancreas? ",
    opc1 : "Diabetes",
    opc2 : "Urticaria",
    opc3 : "Neumonia",
    correcta : "1",
}

const J = {
    pregunta : "¿Cual es el simbolo quimico de la plata? ",
    opc1 : "Na",
    opc2 : "Si",
    opc3 : "Ag",
    correcta : "3",
}

const K = {
    pregunta : "¿Como se llama Iniesta? ",
    opc1 : "Luis",
    opc2 : "Andres",
    opc3 : "Sebastian",
    correcta : "2",
}

const L = {
    pregunta : "¿A que deporte pertenece la WWE? ",
    opc1 : "Lucha libre",
    opc2 : "Futbol",
    opc3 : "Tenis",
    correcta : "1",
}

const M = {
    pregunta : "¿En que pais gano Alemania su primer mundial de futbol? ",
    opc1 : "Alemania",
    opc2 : "Estados Unidos",
    opc3 : "Suiza",
    correcta : "3",
}

const N = {
    pregunta : "¿En cuantos mundiales participo la seleccion de Inglaterra? ",
    opc1 : "20",
    opc2 : "14",
    opc3 : "6",
    correcta : "2",
}

const O = {
    pregunta : "¿Con que deporte relacionarias a Aitor Osa? ",
    opc1 : "Ciclismo",
    opc2 : "Natacion",
    opc3 : "Boxeo",
    correcta : "1",
}

const P = {
    pregunta : "¿Que fruta es la casa de Bob Esponja? ",
    opc1 : "Una Sandia",
    opc2 : "Una Banana",
    opc3 : "Una pina",
    correcta : "3",
}

const Q = {
    pregunta : "¿En la serie Los Simpson de que color son las perlas de Lisa? ",
    opc1 : "Azules",
    opc2 : "Blancas",
    opc3 : "Rojas",
    correcta : "2",
}

const R = {
    pregunta : "¿Cual fue la primera pelicula de Disney? ",
    opc1 : "Cenicienta",
    opc2 : "Blancanieves",
    opc3 : "La Bella Durmiente",
    correcta : "2",
}

const S = {
    pregunta : "¿Como se llama la cuarta pelicula de Harry Potter? ",
    opc1 : "La orden del Fenix",
    opc2 : "La piedra Filosofal",
    opc3 : "El caliz de fuego",
    correcta : "3",
}

const T = {
    pregunta : "¿A que marca pertenece la colonia 'One Million'? ",
    opc1 : "Paco Rabanne",
    opc2 : "Dior",
    opc3 : "Chanel",
    correcta : "1",
}

const U = {
    pregunta : "¿Como paso a llamarse el Imperio Austriaco tras la revolucion de 1848? ",
    opc1 : "Imperio Bizantino",
    opc2 : "Imperio Austrohungaro",
    opc3 : "Imperio Otomano",
    correcta : "2",
}

const V = {
    pregunta : "¿Como se llamaba el caballo de Alejandro Magno? ",
    opc1 : "Secretariat",
    opc2 : "Copenhagen",
    opc3 : "Bucefalo",
    correcta : "3",
}

const W = {
    pregunta : "¿En que ano Francia se convirtio en Republica? ",
    opc1 : "1730",
    opc2 : "1825",
    opc3 : "1792",
    correcta : "3",
}

const X = {
    pregunta : "¿Que pais NO sudamericano estuvo involucrado en la guerra del Pacifico? ",
    opc1 : "Inglaterra",
    opc2 : "Canada",
    opc3 : "Australia",
    correcta : "1",
}

const Y = {
    pregunta : "¿Que pais le regalo la Estatua de la Libertad a Nueva York? ",
    opc1 : "Espana",
    opc2 : "Francia",
    opc3 : "Rusia",
    correcta : "2",
}

const preguntas = [ A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y]
let preguntas_realizadas = []
let orden_pregunta = Math.floor(Math.random()*preguntas.length)

//Funcion para selección random de la pregunta
function select_cuestion (lista_preguntas){
    let pregunta = (lista_preguntas [orden_pregunta])
    preguntas_realizadas = preguntas_realizadas + pregunta
    return pregunta
    }    
//la funcion de select_cuestion agregar iteración para que verifique si la pregunta ya fue realizada.

    let pregunta_actual = select_cuestion (preguntas)
// revisar aca en que comento se ejecuta comparar respuestas 
    let respuesta_usuario = prompt (
        `${pregunta_actual.pregunta}
        1- ${pregunta_actual.opc1}
        2- ${pregunta_actual.opc2}
        3- ${pregunta_actual.opc3}`);

function comparar_respuestas (respuesta_seleccionada){
  let puntaje = 0
    if (respuesta_seleccionada == pregunta_actual.correcta) {
        puntaje ++
    }
    return puntaje
}    

comparar_respuestas(respuesta_usuario)

function puntaje_final (puntos_totales) {
            if (puntos_totales == 5) {
                alert ( "GENIO!!")
            } else if ( puntos_totales < 5 && puntos_totales >= 2 ) {
                alert ( "BUEN TRABAJO!!")
            } else {
                alert ("PUEDES HACERLO MEJOR!!")
            }
        }

// hacer la funcion "inicializar"
let intentos = 0
function iniciar_juego (){
    while (intentos < 5) {
        select_cuestion (preguntas)
        comparar_respuestas (respuesta_usuario)
        intentos ++        
    }
    puntaje_final (puntaje)

}