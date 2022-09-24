import MoreDetail from "./MoreDetail"
const DetailInformation = () =>{
    return(
    <div className="w-full h-649px mt-50px bg-gray-product-detail-information border">
        <div className=" flex flex-col ml-362px mt-36">
            <div className="flex flex-row text-2xl text-purple-text">
                <h1 className="hover:underline">Description</h1>
                <h1 className= "ml-76px hover:underline">Additional Info</h1>
                <h1 className= "ml-76px hover:underline">Reviews</h1>
            </div>  
            <div className=" h-87px mt-9 mr-453px text-gray-content-product-detail">
                <h1>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</h1>
            </div>
            <h1 className="text-2xl text-purple-text mt-24 mb-5">More detail</h1>
            <div className="space-y-4">
                <MoreDetail />
                <MoreDetail />
                <MoreDetail />
                <MoreDetail />
            </div>
        </div>
    </div>)
}
export default DetailInformation