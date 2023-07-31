import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProducts, getProductsId } from "../../app/features/products/actions";

const Edit = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState(false);
  const [image, seImage] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const state = useSelector((state) => state);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setStock(product.stock);
      setStatus(product.status);
    }
  }, [product]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("stock", stock)
    formData.append("status", status)

    if (image) {
      formData.append("image", image)
    };

    dispatch(editProducts(id, formData));
    if (state.error === '') {
      alert("Data succes to change")
    };
  };

  useEffect(() => {
    dispatch(getProductsId(id))
  }, [dispatch, id]);

  if (!product) {
    return <div>Product loading</div>
  } else {
    return (
      <div className="main">
        <div className="card">
          <h2>Edit Produk</h2>
          <br />
          <form onSubmit={handleEditSubmit}>
            <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={(event) => setName (event.target.value)}/>
            <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={(event) => setPrice (event.target.value)}/>
            <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(event) => setStock (event.target.value)}/>
            <Input name="image" type="file" accept="image/*" onChange={(event) => seImage (event.target.files[0])} />
            <Input name="status" type="checkbox" label="Active" checked={status} onChange={(event) => setStatus (event.target.checked)}/>
            <button type="submit" className="btn btn-primary">Simpan</button>
          </form>
        </div>
      </div>
    )
    
  }

}

export default Edit;