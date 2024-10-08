// Consultar un Pokémon por su ID
const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para pintar los datos del Pokémon en la interfaz
            pintarPokemon(data, number);
        })
        .catch(error => {
            console.log(error);
        });
};

// Función para seleccionar dos Pokémon aleatorios
const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};

// Llamar a la función de selección al cargar la página
btnSeleccionar();

// Seleccionar el contenedor donde se listarán los Pokémon
const lista = document.getElementById("listarpokemon");

// Función para mostrar los datos del Pokémon en la página
const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    // Mostrar la imagen del Pokémon
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    // Mostrar el nombre del Pokémon
    item.getElementsByTagName("p")[0].innerHTML = data.name;
};

// Referencias útiles:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1
