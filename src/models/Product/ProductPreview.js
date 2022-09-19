import { ProductModel } from "./Product"

export class ProductPreviewModel extends ProductModel{
    constructor({
      id,
      name,
      description,
      price,
      unit,
      discount,
      rating,
      media,
    }) {
      super({id: id, name: name, price: price, unit: unit, discount: discount, media: media, rating: rating});
      this.description = description;
    }
}