import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import './index.scss';
import { useState } from 'react';
import { addProducts } from '../../app/features/products/actions';

const Tambah = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("stock", stock)
    formData.append("status", status)
    formData.append("image", file)

    dispatch(addProducts(formData));
    if (state.error === "") {
      alert("Product successfully added")
      window.location.href = "/";
    };
  };
  
  return (
    <div className="main">
      {
        state.loading && <p>Product loading</p>
      }
      {
        state.error && <p>Error: {state.error}</p>
      }
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleAddSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={(event) => setName(event.target.value)} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={(event) => setPrice(event.target.value)} />
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(event) => setStock(event.target.value)} />
          <Input name='image' type="file" accept='image/*' onChange={handleImageChange} />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={(event) => setStatus(event.target.checked)} />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;