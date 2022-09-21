import { ratingItem } from "../../dummy_database/Category"

const RatingItem = () =>{
    return(
    <div className="flex flex-col justify-start items-start w-52 ">
        <h1 className=" font-normal text-xl text-purple-text underline underline-offset-4 mt-27px mb-17px">Rating item</h1>
        <div>
            {ratingItem.map(rating =>(
                <div key={rating.id} className= "flex flex-row items-center mb-2">
                    <input type="checkbox" className=" w-4 h-4 mr-9px accent-yellow-check-rating-item"/>
                    <h1 className=" font-normal text-base text-black ">({rating.amount})</h1> 
            </div>))}
        </div>
    </div>)
}

export default RatingItem