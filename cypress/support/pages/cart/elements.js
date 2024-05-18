/// <reference types="cypress" />

export const ELEMENTS = {

    btnAddToCart: 'button[class="btn btn-default cart"]',
    txtQuantity: 'input[id="quantity"]',
    btnViewCart: 'p[class="text-center"] a[href="/view_cart"]',
    txtDescription: 'td[class="cart_description"] > p',
    txtPrice: 'td[class="cart_price"] > p',
    btnQuantity: 'button[class="disabled"]',
    txtTotal: 'p[class="cart_total_price"]',
    btnXDelete: 'a[class="cart_quantity_delete"]'
}