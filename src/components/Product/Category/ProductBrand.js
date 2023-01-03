import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCategoryTree, setCategoryHandle, setProductPreview, setProductPreviewInCategory } from "../../../store/slices/ProductSlice";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { ProductApi } from "../../../api/ProductApi";
import { useNavigate } from "react-router-dom";


const ProductBrand = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const DataCategoriesTree =useSelector((state) => state.product.CategoryTree) 
  
  useEffect(() => {
    if (DataCategoriesTree.length === 0) {
      dispatch(FetchAllCategoryTree());
    }
    if (DataCategoriesTree.length !== 0) {
      setNewTree({
        ID: 0,
        Name: "Category",
        CategoryChildren: DataCategoriesTree,
      });
    }
  }, [dispatch, DataCategoriesTree]);
  const [newTree, setNewTree] = useState({});

  const renderTree = (nodes) => (
    <TreeItem
      {...nodes}
      onClick={() => {
        dispatch(setCategoryHandle(nodes))
        navigate(`/category/${nodes.ID}`)
      }
    
    }
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
