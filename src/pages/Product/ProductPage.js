
import { Fragment } from "react";
import ProductDetail from "../../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
const ProductPage = () =>{
    let {id} = useParams()

    return(
        <Fragment>
            <h1>Id: {id}</h1>
            <ProductDetail />
        </Fragment>
    )
}

export default ProductPage;