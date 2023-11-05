
// Array list for Pokemon
let pokemonList = [
    { name: "Bulbasaur", height: 5, types: ['grass', 'poison'] },
    { name: "Ivysaur", height: 4, types: ['grass', 'poison'] },
    { name: "Venusaur", height: 7, types: ['grass', 'poison'] },
    { name: "Charmander", height: 3, types: ['grass', 'fire'] }];

//forEach loop 

pokemonList.forEach(function (pokemon) {
    document.write("<br>",'My name is '  +pokemon.name + '  height ' + pokemon.height + ' types  ' + pokemon.types);
});

// Javascript body color 
document.body.style.color = "red";
