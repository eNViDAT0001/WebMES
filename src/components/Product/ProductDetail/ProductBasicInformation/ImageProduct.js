import img1 from '../../../../assets/product1.png'
import img2 from '../../../../assets/product2.png'
import img3 from '../../../../assets/product3.png'
import img4 from '../../../../assets/product4.png'
import img5 from '../../../../assets/product5.png'


const ImageProduct = () => {
    return(
        <div className="w-547px h-full flex flex-row justify-start">
            <div className="flex flex-col"> 
                <img className=" w-151px h-155px" src={img1}></img>
                <img className=" w-151px h-155px mt-4" src={img2}></img>
                <img className=" w-151px h-155px mt-4" src={img3}></img>
            </div>
            <img className=" ml-5 flex justify-self-end w-375px" src={img5}></img>   
        </div>
        
    )
}

export default ImageProduct