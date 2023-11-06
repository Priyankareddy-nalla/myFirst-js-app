
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

    return {
        getAll: getAll,
        add: add
    }


})()

pokemonRepository.getAll().forEach(function (pokemon) {
    //here it checks pokemon height <6 and >4 then answer is 5
    if (pokemon.height < 6 && pokemon.height > 4) {
        document.write('<div>' + pokemon.name + '(height: ' + pokemon.height + ')' + '</div>');
        document.write("<br>");
        // it checks equal to 7 
    } else if (pokemon.height === 7) {
        document.write('<div>' + pokemon.name + '(height: ' + pokemon.height + ')'
            + "- Wow, that\'s big!" + '</div>');
        document.write("<br>");
        //remaining pokemon list displayed
    } else {
        document.write('<div>' + pokemon.name + '(height: ' + pokemon.height + ')' + '</div>');
        document.write("<br>");

    }
});
//adding object in pokemonRepository to pokemonList
pokemonRepository.add({ name: 'Schillok', height: 8, types: ['water', 'grass'] });

pokemonRepository.getAll().forEach(function (pokemon) {

    //here it checks pokemon height <6 and >4 then answer is 5
    if (pokemon.height < 6 && pokemon.height > 4) {
        document.write('<p>' + "list after adding object" + '<p>');

        document.write(pokemon.name + '(height: ' + pokemon.height + ')');
        document.write("<br>");
        // it checks equal to 7 
    } else if (pokemon.height === 7) {
        document.write(pokemon.name + '(height: ' + pokemon.height + ')'
            + "- Wow, that\'s big!");
        document.write("<br>");
        //remaining pokemon list displayed
    } else {
        document.write(pokemon.name + '(height: ' + pokemon.height + ')');
        document.write("<br>");

    }
});