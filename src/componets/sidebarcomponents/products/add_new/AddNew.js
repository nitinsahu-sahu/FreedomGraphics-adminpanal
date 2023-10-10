import React, { useRef, useState } from 'react'
import Layout from '../../../layout/Layout'
import {PageHeader} from '../../../commonComponents/common'
import { FormButtonModule, FormInputModule, FormLabelModule } from '../../../commonComponents/form.module'
import JoditEditor from 'jodit-react';
import { useSelector, useDispatch } from 'react-redux'
import { BsFillImageFill } from 'react-icons/bs';
import { addProduct } from '../../../../redux/action/createProduct.action';

const AddNewProduct = () => {
  const editor = useRef(null);
  const category = useSelector(state => state.category.categories);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [selling_price, setSelling_price] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [short_description, setShort_description] = useState('');
  const [featuredImg, setFeaturedImg] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }
  const handleProuctImage = (e) => {
    setProductImg([
      ...productImg,
      e.target.files[0]
    ]);
  }
  const handleFeaturedImage = (e) => {
    setFeaturedImg([
      ...featuredImg,
      e.target.files[0]
    ]);
  }
  const addSaveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("selling_price", selling_price);
    formData.append("description", description);
    formData.append("short_description", short_description);
    formData.append("category", categoryId);
    for (let pic of productImg) {
      formData.append("productImg", pic);
    }
    for (let pic of featuredImg) {
      formData.append("featuredImg", pic);
    }
    dispatch(addProduct(formData));
  }

  return (
    <Layout>
      <div className="container-fluid bg-dark py-5">
        <PageHeader cn="text-white fw-bold" pagetitle="CREATE PRODUCTS" />
        <div className="row">
          <div className='container-fluid px-4'>
            <form onSubmit={addSaveProduct} encType='multipart/form-data'>
              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Product Name" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-4 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Price" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="col-sm-4 mb-3 ">
                  <FormLabelModule cn="form-label text-white" title="Stock" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={stock} onChange={e => setStock(e.target.value)} />
                </div>
                <div className="col-sm-4 mb-3 ">
                  <FormLabelModule cn="form-label text-white" title="Selling Price" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={selling_price} onChange={e => setSelling_price(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 col-md-6 col-xxl-6 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Featured Image" />
                  <FormInputModule typ="file" cn="form-control form-control-lg" onChange={handleFeaturedImage} />
                </div>
                <div className="col-sm-12 col-md-6 col-xxl-6 mb-3 ">
                  <FormLabelModule cn="form-label text-white " title="Parent Categories" />
                  <select className="form-control form-control-lg dropdown-toggle" onChange={(e) => setCategoryId(e.target.value)} value={categoryId}>
                    <option>Select Parent Category</option>
                    {
                      createCategoryList(category).map(option =>
                        <option key={option.value} value={option.value}>{option.name}</option>
                      )
                    }
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Product Description" />
                  <JoditEditor
                    ref={editor}
                    value={description}
                    tabIndex={1} // tabIndex of textarea
                    onChange={newContent => setDescription(newContent)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Product Short Description" />
                  <JoditEditor
                    ref={editor}
                    value={short_description}
                    tabIndex={1} // tabIndex of textarea
                    onChange={newContent => setShort_description(newContent)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Product Images" />
                  <div className='row'>
                    {
                      productImg.length > 0 ? productImg.map((pic, index) =>
                        <div className='col-sm-6 col-md-2 col-lg-2 border  mb-2 ' style={{ marginLeft: ".9rem" }}>
                          <div className='row'>
                            <div className='col-lg-1'>
                              <BsFillImageFill style={{ color: "white" }} />
                            </div>
                            <div className='col-lg-10'>
                              <div className='text-white text-center' key={index}>{pic.name}</div>
                            </div>
                          </div>
                        </div>

                      ) : null
                    }
                  </div>
                  <FormInputModule typ="file" id="product-image" cn="form-control form-control-lg" onChange={handleProuctImage} />
                </div>
              </div>
              <div className='my-4'>
                <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Add New Product" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddNewProduct