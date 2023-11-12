
// IIFE code
let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 5, types: ['grass', 'poison'] },
        { name: "Ivysaur", height: 4, types: ['grass', 'poison'] },
        { name: "Venusaur", height: 7, types: ['grass', 'poison'] },
        { name: "Charmander", height: 3, types: ['grass', 'fire'] }]

    function getAll() {
        return pokemonList;
    }
    function add(item) {
        pokemonList.push(item);
    }

    //pokemon list display with button  
    function addListItem(pokemon) {
        let pokemonList1 = document.querySelector('.pokemon-list');
        //creating lsit items to pokemonlist
        let listpokemon = document.createElement('li');
        //creating button for pokemonList
        let button = document.createElement('button');
        //showing pokemonList 
        button.innerText = pokemon.name;
        //adding styles to button
        button.classList.add('button-class');
        //adding data to button
        listpokemon.appendChild(button);
        //pokemon list append to listpokemon
        pokemonList1.appendChild(listpokemon);

        //adding Eventlistner to button
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    }

    //showDeatails function
    function showDetails(pokemon) {
        console.log("Name: " + pokemon.name);
        console.log("Height: " + pokemon.height);
        console.log("Types: " + pokemon.types);
    }


    return {
        getAll: getAll,
        add: add,
        showDetails: showDetails,
        addListItem: addListItem
    }


})()

//adding object in pokemonRepository to pokemonList
pokemonRepository.add({ name: 'Schillok', height: 8, types: ['water', 'grass'] });

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);


});