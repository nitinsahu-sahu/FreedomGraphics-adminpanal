import React, { useState } from 'react'
import Layout from '../../layout/Layout';
import {PageHeader} from '../../commonComponents/common';
import { FormButtonModule, FormInputModule, FormLabelModule } from '../../commonComponents/form.module';
import { addCategory } from '../../../redux/action/category.action';
import { useDispatch, useSelector } from 'react-redux';
import RightPanelViewCat from './RightPanelViewCat';

const Categories = () => {
    const category = useSelector(state => state.category);
    const createAdminCategory = useSelector(state => state.addCategory);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [featuredImg, setFeaturedImg] = useState('');
    const [parentId, setParentId] = useState('');
    const dispatch = useDispatch();



    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleCategoryImage = (e) => {
        setFeaturedImg(e.target.files[0]);
    }
    const addSaveCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("featuredImg", featuredImg);
        formData.append("slug", slug);
        formData.append("parentId", parentId);
        dispatch(addCategory(formData))

    }
    return (
        <Layout>

            <div className="container-fluid bg-dark py-5">
                <PageHeader cn="text-white fw-bold" pagetitle="CATEGORY" />
                <div className='container-fluid px-4'>
                    <div className="row">
                        <div className='col-sm-12 col-md-4 col-lg-4 col-xxl-4 border'>
                            <div className="text-center mt-2">
                                {
                                    createAdminCategory.message == "" ? <p className="text-danger fw-bold">{createAdminCategory.error}</p> : <p className="text-success fw-bold" >{createAdminCategory.message}</p>
                                }
                            </div>
                            <form onSubmit={addSaveCategory} encType='multipart/form-data'>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3">
                                        <FormLabelModule cn="form-label text-white" title="Category Name" />
                                        <FormInputModule typ="text" cn="form-control form-control-lg text-capitalize" val={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3">
                                        <FormLabelModule cn="form-label text-white" title="Slug" />
                                        <FormInputModule typ="text" cn="form-control form-control-lg text-lowercase" val={slug} onChange={e => setSlug(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3">
                                        <FormLabelModule cn="form-label text-white" title="Featured Image" />
                                        <FormInputModule typ="file" cn="form-control form-control-lg" onChange={handleCategoryImage} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3">
                                        <FormLabelModule cn="form-label text-white" title="Select Parent Category" />
                                        <select className="form-control form-control-lg" onChange={(e) => setParentId(e.target.value)} value={parentId}>
                                            <option>Select Parent Category </option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='my-4'>
                                    <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Add Category" />
                                </div>
                            </form>
                        </div>
                        <div className='col-sm-12 col-md-8 col-lg-8 col-xxl-8 border'>
                            <RightPanelViewCat />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Categories