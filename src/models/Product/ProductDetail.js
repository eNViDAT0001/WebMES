import { ProductModel } from "./Product";
import { ProductOptions } from "./ProductOptions";

export class ProductDetailModel extends ProductModel {
  options = [new ProductOptions()];
  specification = [{property: null, detail: null}] 
  constructor({
    id,
    categoryID,
    name,
    description,
    price,
    options,
    specification,
    unit,
    discount,
    rating,
    sold,
    media,
  }) {
    super({id: id, name: name, price: price, unit: unit, discount: discount, media: media, rating: rating});
    this.categoryID = categoryID;
    this.description = description;
    this.specification = specification;
    this.options = options;
    this.sold = sold;
  }
}
