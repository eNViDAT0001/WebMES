import { useEffect, useState } from "react";

import { ProductApi } from "../../../../api/ProductApi";
const imgNotFound =
  "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";

const ImageProduct = (props) => {
  const [listMedia, setListMedia] = useState([]);
  const [statusImage, setStatusImage] = useState(400);
  const [imageBig, setImageBig] = useState(imgNotFound);

  useEffect(() => {
    const fetchData = async () => {
      if(listMedia.length === 0){
        if(statusImage!==200){
          await ProductApi.GetMedia(props.id).then((res) => {
            setStatusImage(res.status);
            setListMedia(res.data.data);
            if(listMedia.length!==0){
              setImageBig(res.data.data[0].MediaPath);

            }

          });
        
        }
      }
      
    };
    fetchData();
  }, [listMedia, props.id, statusImage]);
  const handleClickImage = (event) => {
    const id = event.currentTarget.id;
    const GetMediaFromId= listMedia.filter(data=>(data.ID==id))
    setImageBig(GetMediaFromId[0].MediaPath);
  };
  return (
    <div className="w-full flex flex-col space-y-4 p-2">
      {listMedia.length !== 0 ? (
        <div>
          <img src={imageBig} alt="Anh san pham" className="w-full h-[450px]"></img>
          <div className="flex flex-row w-full flex-wrap">
            {listMedia.map((data) => (
              <img
                src={data.MediaPath}
                id={data.ID}
                alt="Anh san pham"
                className="w-[29%] m-2 hover:border-[#0D134E] hover:border-4 "
                onClick={handleClickImage}
              ></img>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <img src={imgNotFound} alt="Anh loi" className="w-full max-h-[450px]"></img>
        </div>
      )}
    </div>
  );
};

export default ImageProduct;
