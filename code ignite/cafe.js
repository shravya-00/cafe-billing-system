let cart = [];

    function addToCart(name, price) {
        let item = cart.find(i => i.name === name);

        if (item) {
            item.quantity++;
        } else {
            cart.push({ name: name, price: price, quantity: 1 });
        }

        showCart();
    }

    function showCart() {
        let list = document.getElementById("cart-items");
        let total = 0;

        list.innerHTML = "";

        if (cart.length === 0) {
            list.innerHTML = "<li>Your cart is empty.</li>";
        }

        cart.forEach((item, index) => {
            let li = document.createElement("li");

            li.innerHTML = `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;

            let btn = document.createElement("button");
            btn.textContent = "Remove";

            btn.onclick = function() {
                cart.splice(index, 1);
                showCart();
            };

            li.appendChild(btn);
            list.appendChild(li);

            total += item.price * item.quantity;
        });

        document.getElementById("total").textContent = total;
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert("Please add something to your cart first!");
            return;
        }

        let message = "Thank you for ordering!\n\n";

        cart.forEach(item => {
            message += item.name + " x " + item.quantity + "\n";
        });

        message += "\nTotal amount: ₹" + document.getElementById("total").textContent;

        alert(message);

        cart = [];
        showCart();
    }