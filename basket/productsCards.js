'use strict';

/* Функция назначает обработку клика на все кнопки "Add to cart".
*/
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('div[data-productId]');
    addToCartBtns.forEach(function (div) {
        div.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}
addEventListenersForAddToCartButtons();

