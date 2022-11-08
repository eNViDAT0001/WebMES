
import { Fragment, useEffect } from "react";
import ProductDetail from "../../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { fetchOneProductFromId } from "../../store/slices/ProductSlice";
const ProductPage = () =>{
    let {id} = useParams()
    const dispatch = useDispatch()
    const getProduct = useSelector((state) => state.product)


    useEffect(() => {
        dispatch(fetchOneProductFromId(parseInt(id)))
      },[])
      const IdFetched = getProduct.product
    return(
        <Fragment>
            <h1>Id: {id}</h1>
            <ProductDetail />
        </Fragment>
    )
}

export default ProductPage;