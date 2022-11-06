import User from "./assets/User.png";
const TextFormName = (props) => {
  const setClassName = "min-w ["+ props.setWidth + " ] min-h-[36px] p-2 border"
  return (
    <div className="ml-[5%] mt-[4%] font-['Lato']">
      <h1>{props.name}</h1>
      <input
        type="text"
        className={setClassName}
      ></input>
    </div>
  );
};


const TextFormBasicInformation = (props) => {
  const setClassName = "min-w ["+ props.setWidth + " ] min-h-[36px] p-2 border"
  return (
    <div>    
    <h1>{props.name}</h1>
    <input
      type="text"
      className={setClassName}
    ></input>
  </div>
  );
};
const CustomerInformation = () => {
  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-row">
        <div className="flex flex-col pr-20 flex-wrap">
          <h1 className="text-xl text-[#1D1378]">Information</h1>
          <img
            src={User}
            className="w-[12%] h-[12%] min-w-[120px] min-h-[120px]"
            alt="anh user"
          ></img>
        </div>
        <div className="flex flex-col">
          <TextFormName name="Full name" setWidth="100%"/>
          <TextFormName name="Nick name" setWidth="100%"/>
        </div>
      </div>
      <div className="flex flex-row justify-start space-x-5  font-['Lato']">
        <TextFormBasicInformation name="Birthday" setWidth="277px"/>
        <TextFormBasicInformation name="Phone Number" setWidth="166px"/>
        <TextFormBasicInformation name="Gender" setWidth="15px"/>
      </div>
      <div>
        <h1>Address</h1>
        <input type="text" className="w-full p-2 border"></input>
      </div>
      <div className="flex flex-row justify-start space-x-5 font-['Lato']">
        <TextFormBasicInformation name="Province" setWidth="277px"/>
        <TextFormBasicInformation name="District" setWidth="166px"/>
        <TextFormBasicInformation name="Ward" setWidth="115px"/>
      </div>
      <button className="w-[20%] h-[35px] bg-[#0B74E5] text-white my-[5%]">
        Confirm
      </button>
    </div>
  );
};

export default CustomerInformation;
