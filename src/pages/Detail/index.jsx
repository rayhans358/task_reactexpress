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

  if (state.loading) {
    return <div>Product detail is loading</div>;
  } else if (state.error) {
    return <div>Error: {state.error}</div>;
  } else if (!state.products) {
    return <div>Product not found</div>;
  } else {
    return (
      <div className="main">
        <Link to="/" className="btn btn-primary">Kembali</Link>
  
        <table className="table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>: {state.products._id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>: {state.products.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>: Rp. {state.products.price}</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>: {state.products.stock}</td>
            </tr>
            <tr>
              <td>Gambar</td>
              <td>: <img src={state.products.image_url} alt="Products" height={75} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default Detail;