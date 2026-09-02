let allProducts =
    document.querySelector(".card_total");

function drowItime() {

    if (!allProducts) {
        return;
    }

    let y = card_total.map(function (itime) {

        return `

            <div class="card card1">

                <img 
                    src="${itime.image}" 
                    alt="${itime.title}"
                >

                <div class="num-img">
                    ${itime.num}
                </div>

                <div class="child-card">

                    <h2>
                        ${itime.title}
                    </h2>

                    <div class="senter-card">

                        <span class="spn-RPG">
                            ${itime.title2 || "Game"}
                        </span>

                        <span class="salare">
                            ${itime.price}
                        </span>

                    </div>

                    <span class="spn-star">

                        <i class="fa-solid fa-star"></i>

                        ${itime.rating}

                    </span>

                    <p>
                        ${itime.description}
                    </p>

                    <button 
                        onclick="addToCart(${itime.id})"
                    >
                        Add TO Cart
                    </button>

                    <i 
                        class="fa-solid fa-heart love"
                        onclick="toggleFavorite(${itime.id}, this)"
                    ></i>

                </div>

            </div>

        `;

    }).join("");

    allProducts.innerHTML = y;

    updateProductButtons();
    updateFavoriteButtons();
}

drowItime();


function updateProductButtons() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let cards =
        document.querySelectorAll(".card1");

    cards.forEach(function (card) {

        let titleElement =
            card.querySelector("h2");

        let button =
            card.querySelector(
                ".child-card button"
            );

        if (!titleElement || !button) {
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

        let productInCart =
            cart.find(function (item) {

                return item.id === product.id;

            });

        if (productInCart) {

            button.innerText =
                "Remove from Cart";

            button.classList.add(
                "remove-btn"
            );

        }

        else {

            button.innerText =
                "Add TO Cart";

            button.classList.remove(
                "remove-btn"
            );

        }

    });

}