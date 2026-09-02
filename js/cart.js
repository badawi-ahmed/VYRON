function addToCart(id) {

    let choosenItem =
        card_total.find(function (item) {

            return item.id === id;

        });

    if (!choosenItem) {
        return;
    }

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let existingProduct =
        cart.find(function (item) {

            return item.id === id;

        });

    if (existingProduct) {

        cart =
            cart.filter(function (item) {

                return item.id !== id;

            });

    }

    else {

        cart.push({

            ...choosenItem,

            quantity: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    drawCart();

    updateProductButtons();

}


function drawCart() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        updateCartTotal();

    let badge =
        document.querySelector(".bage");

    let totalQuantity =
        cart.reduce(function (total, item) {

            return total + item.quantity;

        }, 0);

    if (badge) {

        badge.innerHTML =
            totalQuantity;

    }

    let cartProducts =
        document.querySelector(".carts-products");

    let cartPageProducts =
        document.querySelector("#cart-page-products");

    if (!cartProducts && !cartPageProducts) {
        return;
    }

    if (cart.length === 0) {

        let emptyHTML = `

            <div class="empty-cart">
                Your cart is empty.
            </div>

        `;

        if (cartProducts) {

            cartProducts.innerHTML = `

                ${emptyHTML}

                <a 
                    href="index.html"
                    class="view-all"
                >
                    View All Products
                </a>

            `;

        }

        if (cartPageProducts) {

            cartPageProducts.innerHTML =
                emptyHTML;

        }

        return;
    }

    let products =
        cart.map(function (item) {

            let price =
                parseFloat(
                    item.price.replace("$", "")
                );

            let itemTotal =
                price * item.quantity;

            return `

                <div class="cart-product">

                    <div class="cart-product-info">

                        <img
                            src="${item.image}"
                            alt="${item.title}"
                            class="cart-product-image"
                        >

                        <div class="cart-product-details">

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

                        </div>

                    </div>

                    <div class="quantity">

                        <button onclick="decreaseQuantity(${item.id})">
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button onclick="increaseQuantity(${item.id})">
                            +
                        </button>

                    </div>

                    <div class="item-total">

                        <span>Total</span>

                        <strong>
                            $${itemTotal.toFixed(2)}
                        </strong>

                    </div>

                    <button
                        class="remove-cart-btn"
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove from Cart
                    </button>

                </div>

            `;

        }).join("");

    if (cartProducts) {

        cartProducts.innerHTML = `

            <div class="cart-items">

                ${products}

            </div>

            <a 
                href="cartsproducts.html"
                class="view-all"
            >
                View All Products
            </a>

        `;

    }

    if (cartPageProducts) {

        cartPageProducts.innerHTML = `

            <div class="cart-items">

                ${products}

            </div>

        `;

    }

}

function updateCartTotal() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let total = 0;

    cart.forEach(function (item) {

        let price =
            parseFloat(
                item.price.replace("$", "")
            );

        total += price * item.quantity;

    });

    let cartTotal =
        document.querySelector("#cartTotal");

    if (cartTotal) {

        cartTotal.textContent =
            "$" + total.toFixed(2);

    }

}

function increaseQuantity(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let product =
        cart.find(function (item) {

            return item.id === id;

        });

    if (product) {

        product.quantity += 1;

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    drawCart();

}


function decreaseQuantity(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let product =
        cart.find(function (item) {

            return item.id === id;

        });

    if (product) {

        product.quantity -= 1;

        if (product.quantity <= 0) {

            cart =
                cart.filter(function (item) {

                    return item.id !== id;

                });

        }

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    drawCart();

    updateProductButtons();

}


function removeFromCart(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart =
        cart.filter(function (item) {

            return item.id !== id;

        });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    drawCart();

    updateProductButtons();

}


let shoppingCar =
    document.querySelector(".shopping-car");

let cartsProducts =
    document.querySelector(".carts-products");


if (shoppingCar && cartsProducts) {

    shoppingCar.addEventListener(
        "click",
        function (event) {

            if (event.target.closest(".quantity")) {
                return;
            }

            event.stopPropagation();

            cartsProducts.classList.toggle("show");

        }
    );

    document.addEventListener(
        "click",
        function (event) {

            if (
                !cartsProducts.contains(event.target)
                &&
                !shoppingCar.contains(event.target)
                &&
                !event.target.closest(".quantity")
            ) {

                cartsProducts.classList.remove("show");

            }

        }
    );

}
