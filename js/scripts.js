
//pokemon list
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    //dispaly pokemon details in modal
    function showModal(pokemon) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");

        modalTitle.empty();
        modalBody.empty();

        let titleElement = document.createElement("h1");
        titleElement.innerText = pokemon.name;
        let contentElement = document.createElement("p");
        contentElement.innerText = "height" + ": " + pokemon.height;
        let myImage = document.createElement("img");
        myImage.src = pokemon.imageUrl;

        modalBody.append(myImage);
        modalTitle.append(titleElement);
        modalBody.append(contentElement);
    }


    function addListItem(pokemon) {
        let element = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        //adding Bootstrap framework for pokemonList
        listItem.classList.add("list-group-item");
        listItem.classList.add('col-12')
        listItem.classList.add('col-md-4')

        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#exampleModal");
        button.classList.add("btn", "btn-primary");
        button.classList.add('btn-block');
        listItem.append(button);
        element.append(listItem);
        button.addEventListener("click", () => {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                        imageUrl: item.myImage,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
    
    });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

//search function
document.getElementById('mySearch').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.pokemon-list li');

    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';

        }
    });
});