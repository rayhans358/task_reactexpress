import { Link, useParams } from "react-router-dom";
import './index.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsId } from "../../app/features/products/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductsId(id));
  }, [dispatch, id]);

  if (!state.product) {
    return <div>Product is loading</div>
  } else {
    return (
      <div className="main">
        <Link to="/" className="btn btn-primary">Kembali</Link>
  
        <table className="table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>: {state.product._id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>: {state.product.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>: Rp. {state.product.price}</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>: {state.product.stock}</td>
            </tr>
            <tr>
              <td>Gambar</td>
              <td>: <img src={state.product.image_url} alt="Products" height={75} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default Detail;