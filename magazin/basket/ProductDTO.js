'use strict';

/**
 * Этот класс будет хранить в себе информацию о каком-то конкретном товаре.
 * @see https://ru.wikipedia.org/wiki/DTO
 */
class ProductDTO {
    /**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} name имя товара
     * @param {number} price цена товара
     */
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}