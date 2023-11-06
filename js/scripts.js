
// Array list for Pokemon
let pokemonList = [
    { name: "Bulbasaur", height: 5, types: ['grass', 'poison'] },
    { name: "Ivysaur", height: 4, types: ['grass', 'poison'] },
    { name: "Venusaur", height: 7, types: ['grass', 'poison'] },
    { name: "Charmander", height: 3, types: ['grass', 'fire'] }];

//forEach loop 

// pokemonList.forEach(function (pokemon) {
//     document.write("<br>",'My name is '  +pokemon.name + '  height ' + pokemon.height + ' types  ' + pokemon.types);
// });

//forEach loop with condtions
pokemonList.forEach(function (pokemon) {
    //here it checks pokemon height <6 and >4 then answer is 5
    if (pokemon.height < 6 && pokemon.height > 4) {
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

// Javascript body color 
document.body.style.color = "red";
