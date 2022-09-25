import Rating from "react-rating"
import starActive from '../../../../assets/star.png'
import starNotActive from '../../../../assets/star_not.png'

const TitleAndRating = () => {
    return(
        <div>
            <h1 className=" font-normal text-4xl text-purple-text-name-product-detail ">Playwood arm chair</h1>
                <div className="flex flex-row mt-2">
                    <Rating  
                        emptySymbol={<img src={starNotActive} alt="starDisable" className="w-3 h-3 mr-1" />}
                        fullSymbol={<img src={starActive} alt="star" className="w-3 h-3 mr-1" />}
                        initialRating = {4}
                        readonly = {true}/>
                    <h1 className="text-purple-text capitalize text-sm "> (22) </h1> 
                </div>
        </div>
        
    )
}
export default TitleAndRating