/*
import star from '../assets/star.png'
import starNotChecked from '../assets/star_not.png'

const convertStar = (starAmount) =>{
    switch(starAmount){
        case 1:
            return(<div className="flex flex-row">
                    <img src={star} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                </div>)
            break;
        case 2:
            (<div className="flex flex-row">
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                </div>)
            break;
        case 3:
            (<div className="flex flex-row">
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                </div>)
            break;
        case 4:
            (<div className="flex flex-row">
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={starNotChecked} alt="rating"></img>
                </div>)
            break;
        case 5:
            (<div className="flex flex-row">
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                    <img src={star} alt="rating"></img>
                </div>)
            break;
        default: 
        return;
    }
}
*/
import productImg1 from '../assets/product1.png'
import productImg2 from '../assets/product2.png'
import productImg3 from '../assets/product3.png'
import productImg4 from '../assets/product4.png'

const productBandCheckBox = [
    {
        id: 1,
        name: "Coaster Furniture"
    },
    {
        id: 2,
        name: "Fusion Dot High Fashion"
    },
    {
        id: 3,
        name: "Unique Furniture Resort"
    },
    {
        id: 4,
        name: "Dream Furniture Flipping"
    },
    {
        id: 5,
        name: "Young Repurposed"
    },
    {
        id: 6,
        name: "Green DIY furniture"
    },
]

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

const product = [
    {
        id: 1,
        name: "Dictum morbi",
        price: 52.00,
        priceSale: 26.00,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: productImg1 ,
    },
    {
        id: 2,
        name: "Sodales sit",
        price: 52.00,
        priceSale: 26,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: productImg2, 
    },
    {
        id: 3,
        name: "Nibh varius",
        price: 52.00,
        priceSale: 26.00,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: productImg3,
    },
    {
        id: 1,
        name: "Dictum morbi",
        price: 52.00,
        priceSale: 26.00,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        image: productImg4,
    }
]
export {ratingItem,productBandCheckBox,product}