let searchType =
    document.querySelector("#searchType");

let searchInput =
    document.querySelector("#searchInput");

let searchButton =
    document.querySelector(".search-box button");


function searchGames() {

    if (!searchInput || !searchType) {
        return;
    }

    let searchValue =
        searchInput.value.trim().toLowerCase();

    let selectedType =
        searchType.value;

    let cards =
        document.querySelectorAll(".card1");

    cards.forEach(function (card) {

        let titleElement =
            card.querySelector("h2");

        let categoryElement =
            card.querySelector(".spn-RPG");

        if (!titleElement || !categoryElement) {
            return;
        }

        let title =
            titleElement.innerText.toLowerCase();

        let category =
            categoryElement.innerText.toLowerCase();

        if (searchValue === "") {

            card.style.display = "";

        }

        else if (selectedType === "name") {

            if (title.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        }

        else if (selectedType === "category") {

            if (category.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        }

    });

}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchGames
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchGames();

            }

        }
    );

}