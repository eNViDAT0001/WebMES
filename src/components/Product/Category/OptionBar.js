const OptionBar = () =>{
    return(
        <div className="flex justify-center flex-row">
            <div className="w-1171px h-11 mt-6 flex justify-start flex-nowrap whitespace-nowrap">
                <div className="flex flex-col">
                    <h1 className=" font-normal text-2xl text-purple-text">Ecommerce Acceories & Fashion item</h1>
                    <h1 className= "font-normal text-xs self-start mt-2"> About 9,620 results (0.62 seconds)</h1>
                </div>
            <div className="ml-200px pt-2 flex items-center">
                <h1 className="font-normal text-purple-text-2 mr-2 ">Perpage:</h1>
                <input type = "text" className=" w-55px h-25px border " ></input>
                <h1 className="font-normal text-purple-text-2 ml-27px"> Sort by:</h1>
                <select className=" w-24 h-7 ml-2 border text-center text-xs text-gray-text-in-select" >
                    <option value = "0" >Best match</option>
                </select>
                <h1 className="font-normal text-purple-text-2 pl-6">View:</h1>
                <input type = "text" className=" ml-60px w-40 border"></input>
            </div>
        </div>
    </div>)}

export default OptionBar