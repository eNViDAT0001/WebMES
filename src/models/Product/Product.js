export class ProductModel {
  media = [];
  constructor({ id, name, price, unit, discount, media, rating }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.unit = unit;
    this.media = media;
    this.rating = rating;
  }
  getDiscountPrice = () => this.price - (this.discount / 100).toFixed(2) * this.price;
}
