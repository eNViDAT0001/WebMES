
import productImg1 from '../assets/product1.png'
import productImg2 from '../assets/product2.png'
import productImg3 from '../assets/product3.png'
import productImg4 from '../assets/product4.png'
import { BrandModel } from '../models/Brand/Brand'
import { ProductPreviewModel } from '../models/Product/ProductPreview'

export const ProductBranch = [
    new BrandModel({
        id: 0,
        name: "Branch 1",
    }),
    new BrandModel({
        id: 1,
        name: "Branch 2",
    }),
    new BrandModel({
        id: 2,
        name: "Branch 3",
    })
]
export const ProductPreview = 
[
    new ProductPreviewModel({
        id: 0,
        name: "Dictum morbi",
        description: "a",
        price: 52.00,
        discount: 50,
        rating: 5,
        media: productImg1,
    }),
    new ProductPreviewModel({
        id: 1,
        name: "Dictum morbi",
        description: "a",
        price: 52.00,
        discount: 50,
        rating: 5,
        media: productImg2
    }),
    new ProductPreviewModel({
        id: 1,
        name: "Dictum morbi",
        description: "a",
        price: 52.00,
        discount: 50,
        rating: 5,
        media: productImg3
    }),
    new ProductPreviewModel({
        id: 1,
        name: "Dictum morbi",
        description: "a",
        price: 52.00,
        discount: 50,
        rating: 5,
        media: productImg4
    }),

]
export const CATEGORY_DUMMY_DATABASE = {
   branch: ProductBranch,
   product: ProductPreview
}
const ratingItem = [
    {
        id: 1,
        star: 5,
        amount: 2341
    },
    {
        id: 2,
        star: 4,
        amount: 1726
    },
    {
        id: 3,
        star: 3,
        amount: 258
    },
    {
        id: 4,
        star: 2,
        amount: 25
    },
    {
        id: 5,
        star: 1,
        amount: 234
    },
]

export {ratingItem}