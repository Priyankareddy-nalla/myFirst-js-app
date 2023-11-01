
// Array list for Pokemon
let pokemonList = [
    { name: "Bulbasaur", height: 5, types: ['grass', 'poison'] },
    { name: "Ivysaur", height: 4, types: ['grass', 'poison'] },
    { name: "Venusaur", height: 7, types: ['grass', 'poison'] },
    { name: "Charmander", height: 3, types: ['grass', 'fire'] }];

for (let i = 0; i < pokemonList.length; i++) {
    //here it checks pokemon height <6 and >4 then answer is 5
    if (pokemonList[i].height < 6 && pokemonList[i].height > 4) {
        document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')');
        document.write("<br>");
        // it checks equal to 7 
    } else if (pokemonList[i].height === 7) {
        document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')'
            + "- Wow, that\'s big!");
        document.write("<br>");
        //remaining pokemon list displayed
    } else {
        document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')');
        document.write("<br>");

    }
}
