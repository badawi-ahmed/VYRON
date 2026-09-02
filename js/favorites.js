function toggleFavorite(id, heartElement) {

    let product =
        card_total.find(function (item) {

            return item.id === id;

        });

    if (!product) {
        return;
    }

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    let existingProduct =
        favorites.find(function (item) {

            return item.id === id;

        });

    if (existingProduct) {

        favorites =
            favorites.filter(function (item) {

                return item.id !== id;

            });

        if (heartElement) {

            heartElement.classList.remove(
                "love-active"
            );

        }

    }

    else {

        favorites.push(product);

        if (heartElement) {

            heartElement.classList.add(
                "love-active"
            );

        }

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    drawFavorites();

}


function updateFavoriteButtons() {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    let cards =
        document.querySelectorAll(".card1");

    cards.forEach(function (card) {

        let titleElement =
            card.querySelector("h2");

        let heart =
            card.querySelector(".love");

        if (!titleElement || !heart) {
            return;
        }

        let title =
            titleElement.innerText;

        let product =
            card_total.find(function (item) {

                return item.title === title;

            });

        if (!product) {
            return;
        }

        let isFavorite =
            favorites.some(function (item) {

                return item.id === product.id;

            });

        if (isFavorite) {

            heart.classList.add(
                "love-active"
            );

        }

        else {

            heart.classList.remove(
                "love-active"
            );

        }

    });

}


function drawFavorites() {

    let favoriteContainer =
        document.querySelector(
            "#favorite-products"
        );

    if (!favoriteContainer) {
        return;
    }

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    if (favorites.length === 0) {

        favoriteContainer.innerHTML = `

            <p class="no-favorites">
                You have no favorite items.
            </p>

        `;

        return;
    }

    let favoritesHTML =
        favorites.map(function (item) {

            return `

                <div class="favorite-card">

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                    >

                    <div class="favorite-info">

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            Category:
                            <span>
                                ${item.title2 || "Game"}
                            </span>
                        </p>

                        <p>
                            Price:
                            <span>
                                ${item.price}
                            </span>
                        </p>

                        <p>
                            ⭐ ${item.rating}
                        </p>

                    </div>

                    <button
                        class="remove-favorite"
                        onclick="removeFavorite(${item.id})"
                    >
                        Remove from Favorites
                    </button>

                </div>

            `;

        }).join("");

    favoriteContainer.innerHTML =
        favoritesHTML;

}


function removeFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    favorites =
        favorites.filter(function (item) {

            return item.id !== id;

        });

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    drawFavorites();

    updateFavoriteButtons();

}