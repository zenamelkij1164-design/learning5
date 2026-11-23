/*jslint browser: true, devel: true */
/*global window, document */

(function () {
    "use strict";

    function calculateOrder(event) {
        var quantityInput = document.getElementById("quantity");
        var productSelect = document.getElementById("product");
        var resultElement = document.getElementById("result");
        var errorElement = document.getElementById("error");
        var rawQuantity = quantityInput.value;
        var quantity;
        var price;
        var total;

        event.preventDefault();

        errorElement.textContent = "";
        resultElement.textContent = "";

        if (rawQuantity.match(/^\d+$/) === null) {
            errorElement.textContent = "Ошибка: в поле количества допускаются только цифры.";
            quantityInput.focus();
            return;
        }

        quantity = parseInt(rawQuantity, 10);

        if (quantity < 1) {
            errorElement.textContent = "Ошибка: количество должно быть больше нуля.";
            quantityInput.focus();
            return;
        }

        price = parseInt(productSelect.value, 10);
        total = price * quantity;

        resultElement.textContent = "Стоимость заказа: " + total + " руб.";
    }

    function init() {
        var button = document.getElementById("calculate");

        if (button) {
            button.addEventListener("click", calculateOrder);
        }
    }

    window.addEventListener("DOMContentLoaded", init);
}());