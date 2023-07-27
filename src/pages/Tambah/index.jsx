import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import './index.scss';
import { useState } from 'react';
import { addProducts } from '../../app/features/counter/actions';

const Tambah = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);

  const handleImageChange = (event) => {
    setFile(event.target.files[0])
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("name", event.target.name.value)
    formData.append("price", event.target.price.value)
    formData.append("stock", event.target.stock.value)
    formData.append("status", event.target.status.checked)
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
        state.loading && <h3>Product loading</h3>
      }
      {
        state.error && <h3>Error in: {state.error}</h3>
      }
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleAddSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama"/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock"/>
          <Input name='image' type="file" accept='image/*' onChange={(handleImageChange)} />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={(event) => setStatus(event.target.checked)} />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;