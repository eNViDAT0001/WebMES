import img1 from "../../../../assets/product1.png";
import img2 from "../../../../assets/product2.png";
import img3 from "../../../../assets/product3.png";
import img4 from "../../../../assets/product4.png";
import nullProduct from "../../../../assets/nullProduct.png";
import img5 from "../../../../assets/product5.png";
import { useState } from "react";

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
  {
    id: 3,
    img: img3,
  },
];

const ImageProduct = () => {
  const [imageBig, setImageBig] = useState(ListImage[0].img);

  const handleClickImage = (event) => {
    const id = event.currentTarget.id;
    setImageBig(ListImage[id].img);
  };

  return (
    <div className="w-full flex flex-col space-y-4 p-2">
      <img src={imageBig} alt="Anh san pham" className="w-full"></img>
      <div className="flex flex-row w-full flex-wrap">
        {ListImage.map((data) => (
            <img src={data.img} id={data.id} alt="Anh san pham" className="w-[29%] m-2 hover:border-[#0D134E] hover:border-4"
            onClick={handleClickImage}
            ></img>
        ))}
      </div>
    </div>
  );
};

export default ImageProduct;
