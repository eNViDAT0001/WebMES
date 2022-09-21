import Rating from "react-rating"
import { ratingItem } from "../../dummy_database/Category"
import starActive from '../../assets/star.png'
import starNotActive from '../../assets/star_not.png'


const RatingItem = () =>{
    return(
    <div className="flex flex-col justify-start items-start w-52 ">
        <h1 className=" font-normal text-xl text-purple-text underline underline-offset-4 mt-27px mb-17px">Rating item</h1>
        <div>
            {ratingItem.map(rating =>(
                <div key={rating.id} className= "flex flex-row items-center mb-2">
                    <input type="checkbox" className=" w-4 h-4 mr-9px accent-yellow-check-rating-item"/>
                    <Rating
                        emptySymbol={<img src={starNotActive} className="w-4 h-4 mr-1" />}
                        fullSymbol={<img src={starActive} className="w-4 h-4 mr-1" />}
                        readonly = {true}
                        initialRating = {rating.star}
                    />
                    <h1 className=" font-normal text-base text-black ">({rating.amount})</h1> 
            </div>))}
        </div>
    </div>)
}

export default RatingItem