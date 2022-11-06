import { ProductModel } from "./Product"
import { MediaModel } from "../Media/Media";
export class ProductPreviewModel extends ProductModel{
    constructor({
      id,
      name,
      previewDescriptions,
      price,
      discount,
      rating,
      media,
    }) {
      super({id: id, name: name, price: price, discount: discount, media: media, rating: rating});
      this.previewDescriptions = previewDescriptions;
    }
}