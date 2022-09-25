import img1 from '../../../../assets/product1.png'
import img2 from '../../../../assets/product2.png'
import img3 from '../../../../assets/product3.png'
import img4 from '../../../../assets/product4.png'
import nullProduct from '../../../../assets/nullProduct.png'
import img5 from '../../../../assets/product5.png'
import { useState } from 'react'

const ListImage = [
    {
        id: 0,
        img: img1,
    },
    {
        id: 1,
        img: img2,
    },
    {
        id: 2,
        img: img3,
    },
]

const ImageProduct = () => {
    const [imageBig,setImageBig] = useState(ListImage[0].img)

    const handleClickImage = event => {
        const id = event.currentTarget.id
        setImageBig(ListImage[id].img)
    }
    
   
    return(
        <div className="w-547px h-full flex flex-row justify-start">
            <div className="space-y-1">
                {ListImage.map(image => (
                    <button id= {image.id} onClick={handleClickImage} readOnly={true}><img src={image.img} className = "w-151px h-155px"  alt = "anh san pham"/></button>
                ))}
            </div>
            
            <img className=" ml-5 flex justify-self-end w-375px h-full" alt = "anh san pham" src = {ListImage.length===0 ? nullProduct : imageBig }></img>   
        </div>
        
    )
}

export default ImageProduct