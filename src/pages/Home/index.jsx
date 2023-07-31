import { Link } from 'react-router-dom';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteProducts, fetchProducts } from '../../app/features/products/actions';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts(search))
  }, [dispatch, search]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (id) => {
    if (window.confirm ("Apakah ingin menghapus produk ini?")) {
      dispatch(deleteProducts(id));
      dispatch(fetchProducts(search));
      if(state.deleteerror !== '') {
        alert("The product was successfully deleted");
      }
    }
  }
  
  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th className="text-right">Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Stock</th>
            <th className="text-center">Status</th>
            <th className="text-center">Image</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loading ? (
            <tr>
              <td colSpan="7">Loading product</td>
            </tr>
          ) : state.error ? (
            <tr>
              <td colSpan="7">{state.error}</td>
            </tr>
          ) : state.product.length === 0 ? (
            <tr>
              <td colSpan="7">Produk not found</td>
            </tr>
          ) : (
            state.products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  {product.status ? "Active" : "Non Active"}
                </td>
                <td>
                  <img src={product.image_url} alt="productImage" width="75" />
                </td>
                <td>
                  <Link to={`/detail/${product._id}`} className='btn btn-sm btn-info'>
                    Detail
                  </Link>
                  <Link to={`/edit/${product._id}`} className='btn btn-sm btn-warning'>
                    Edit
                  </Link>
                  <button className='btn btn-sm btn-danger' onClick={() => handleDelete(product._id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home;