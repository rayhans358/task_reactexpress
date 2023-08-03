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
    dispatch(fetchProducts(search));
  }, [dispatch, search]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah ingin menghapus produk ini?")) {
      dispatch(deleteProducts(id));
      dispatch(fetchProducts(search));
      if(state.products !== '') {
        alert("The product was successfully deleted");
      }
    }
  }

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Image</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(state.products) ? (
            state.products.length === 0 ? (
              <tr>
                <td colSpan="7">Produk not found</td>
              </tr>
            ) : state.error ? (
              <tr>
                <td colSpan="7">{state.error}</td>
              </tr>
            ) : (
              state.products.map((products) => (
                <tr key={products._id}>
                  <td>{products._id}</td>
                  <td>{products.name}</td>
                  <td>Rp. {products.price}</td>
                  <td>{products.stock}</td>
                  <td>
                    {products.status ? "Active" : "Non Active"}
                  </td>
                  <td>
                    <img src={products.image_url} alt="productImage" width="75" />
                  </td>
                  <td>
                    <Link to={`/detail/${products._id}`} className='btn btn-sm btn-info'>
                      Detail
                    </Link>
                    <Link to={`/edit/${products._id}`} className='btn btn-sm btn-warning'>
                      Edit
                    </Link>
                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(products._id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="7">Loading product</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
