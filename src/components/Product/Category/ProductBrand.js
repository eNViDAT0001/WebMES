import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCategoryTree, setProductPreview } from "../../../store/slices/ProductSlice";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { ProductApi } from "../../../api/ProductApi";

const ProductBrand = () => {
  const dispatch = useDispatch();
  
  const DataCategoriesTree =useSelector((state) => state.product.CategoryTree) || []
    const ListOfProducts = useSelector(state=>state.product.ProductPreview) || []
    
  useEffect(() => {
    if (DataCategoriesTree.length === 0) {
      dispatch(FetchAllCategoryTree());
    }
  }, [dispatch, DataCategoriesTree]);
  const [newTree, setNewTree] = useState({});
  useEffect(() => {
    if (DataCategoriesTree.length !== 0) {
      setNewTree({
        ID: "root",
        Name: "Category",
        CategoryChildren: DataCategoriesTree,
      });
    }
  }, [DataCategoriesTree]);

  const renderTree = (nodes) => (
    <TreeItem
      {...nodes}
      onClick={async () => {
        if (nodes.ID !== "root") {
          await ProductApi.GetCategoryChildren(nodes.ID).then((res) => {
            const categoryResult = res.data.data;
            if (!categoryResult.CategoryChildren) {
                const newProductPreview = ListOfProducts.filter(data=>(data.CategoryID===nodes.ID))
                dispatch(setProductPreview(newProductPreview))
            }
          });
        }
      }}
      key={nodes.ID}
      nodeId={nodes.ID}
      label={nodes.Name}
    >
      {Array.isArray(nodes.CategoryChildren)
        ? nodes.CategoryChildren.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        {renderTree(newTree)}
      </TreeView>
    </div>
  );
};
export default ProductBrand;
