import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosCheckboxOutline, IoIosCheckbox, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { FormInputModule,  FormLabelModule } from '../../commonComponents/form.module'
import { getAllCategories, updatetdCategory, deleteCategoriesByCheckedExpanded } from '../../../redux/action/category.action'
import { CommonModal } from '../../commonComponents/common';

const RightPanelViewCat = () => {
    const category = useSelector(state => state.category);
    const [checked, setChecked] = useState([])
    const [expanded, setExpanded] = useState([])
    const [checkedArray, setCheckedArray] = useState([])
    const [expandedArray, setExpandedArray] = useState([])
    const [show, setShow] = useState(false)
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)
    const dispatch = useDispatch();
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const [parentCategoryId, setParentCategoryId] = useState('');


    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name, parentId: category.parentId })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }



    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            )
        }
        return myCategories;
    }


    const updateCategory = () => {
        setUpdateCategoryModal(true)
        updateCheckedAndExpandedCategories()
    }

    const updateCheckedAndExpandedCategories = () => {
        const categoryList = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categoryList.find((category, _index) => categoryId == category.value);
            category && checkedArray.push(category)
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categoryList.find((category, _index) => categoryId == category.value);
            category && expandedArray.push(category)
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray)
    }


    const handleCategroyInput = (key, value, index, type) => {
        if (type == 'checked') {
            const updateCheckedArray = checkedArray.map((items, _index) => index == _index ? { ...items, [key]: value } : items)
            setCheckedArray(updateCheckedArray)
        } else if (type == 'expanded') {
            const updateExpandedArray = expandedArray.map((items, _index) => index == _index ? { ...items, [key]: value } : items)
            setExpandedArray(updateExpandedArray)
        }
    }


    const updateSaveCategory = (e) => {
        e.preventDefault();
        const form = new FormData();
        expandedArray.forEach((item, index) => {
            form.append("_id", item.value);
            form.append("name", item.name);
            form.append("type", item.type);
            form.append("parentId", item.parentId ? item.parentId : '');
        })
        checkedArray.forEach((item, index) => {
            form.append("_id", item.value);
            form.append("name", item.name);
            form.append("type", item.type);
            form.append("parentId", item.parentId ? item.parentId : '');
        })

        dispatch(updatetdCategory(form)).then(result => {
            if (result) {
                dispatch(getAllCategories())
            }
        })
    }
    const renderUpdateCategoryModel = () => {
        return (
            <CommonModal
                show={updateCategoryModal}
                handleClose={() => setUpdateCategoryModal(false)}
                title={'Update Category'}
                size="lg"
            >
                <form onSubmit={updateSaveCategory} encType='multipart/form-data'>
                    <h4 style={{ color: "green" }}>Expanded Categories</h4>
                    {
                        expandedArray.length > 0 && expandedArray.map((item, index) =>
                            <div class="form-group row mx-2 mt-1 mb-2 " key={index}>
                                <div class="col-sm-12 col-md-4 mb-3 mb-sm-0 ">
                                    <FormLabelModule cn="form-label " title="Category Name" />
                                    <FormInputModule
                                        typ="text"
                                        id="category-name"
                                        cn="form-control text-capitalize"
                                        val={item.name}
                                        onChange={(e) => handleCategroyInput('name', e.target.value, index, 'expanded')}
                                    />
                                </div>
                                <div class="col-sm-12 col-md-4 mb-3 mb-sm-0">
                                    <FormLabelModule cn="form-label " title="Select Parent Category" />

                                    <select className="form-control " onChange={(e) => handleCategroyInput('parentId', e.target.value, index, 'expanded')} value={item.parentId}>
                                        <option>Select Parent Category </option>
                                        {
                                            createCategoryList(category.categories).map(option =>
                                                <option key={option.value} value={option.value}>{option.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div class="col-sm-4 col-md-4 mb-3 mb-sm-0">
                                    <FormLabelModule cn="form-label " title="Select Type" />

                                    <select className="form-control " onChange={(e) => setParentCategoryId(e.target.value)} value={parentCategoryId}>
                                        <option value="">Select Type </option>
                                        <option value="Store">Store </option>
                                        <option value="Product">Product </option>
                                        <option value="Page">Page </option>
                                    </select>
                                </div>
                            </div>
                        )
                    }
                    <h4 style={{ color: "orange" }}>Checked Categories</h4>
                    {
                        checkedArray.length > 0 && checkedArray.map((item, index) =>
                            <div class="form-group row mx-2 mt-1 " key={index}>
                                <div class="col-sm-12 col-md-4 mb-3 mb-sm-0 ">
                                    <FormLabelModule cn="form-label " title="Category Name" />

                                    <FormInputModule
                                        typ="text"
                                        cn="form-control text-capitalize"
                                        id="category-name"
                                        val={item.name}
                                        onChange={(e) => handleCategroyInput('name', e.target.value, index, 'checked')}
                                    />
                                </div>
                                <div class="col-sm-12 col-md-4 mb-3 mb-sm-0">
                                    <FormLabelModule cn="form-label " title="Select Parent Category" />

                                    <select className="form-control " onChange={(e) => handleCategroyInput('parentId', e.target.value, index, 'checked')} value={item.parentId}>
                                        <option>Select Parent Category </option>
                                        {
                                            createCategoryList(category.categories).map(option =>
                                                <option key={option.value} value={option.value}>{option.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div class="col-sm-4 col-md-4 mb-3 mb-sm-0">
                                    <FormLabelModule cn="form-label " title="Select Type" />

                                    <select className="form-control " onChange={(e) => setParentCategoryId(e.target.value)} value={parentCategoryId}>
                                        <option value="">Select Type </option>
                                        <option value="Store">Store </option>
                                        <option value="Product">Product </option>
                                        <option value="Page">Page </option>
                                    </select>
                                </div>
                            </div>
                        )
                    }
                    <button class="btn btn-primary m-3 " type="submit" >Save Changes</button>

                </form>
            </CommonModal>
        );
    }

    const deleteCategories = () => {
        const checkedIdArray = checkedArray.map((item, index) => ({ _id: item.value }))
        const expandedIdArray = expandedArray.map((item, index) => ({ _id: item.value }))
        const idsArray = expandedIdArray.concat(checkedIdArray);
        dispatch(deleteCategoriesByCheckedExpanded(idsArray)).then(result => {
            if (result) {
                dispatch(getAllCategories())
                setDeleteCategoryModal(false)
            }
        })
    }
    const deleteCategory = () => {
        setDeleteCategoryModal(true)
        updateCheckedAndExpandedCategories()
    }
    const renderDeleteCategoryModel = () => {
        return (
            <CommonModal
                show={deleteCategoryModal}
                handleClose={() => setDeleteCategoryModal(false)}
                title={'Delete Category'}
                size="lg"
                buttons={[
                    {
                        label: "No",
                        color: "primary",
                        onClick: () => {
                            alert('no')
                        }
                    },
                    {
                        label: "Yes",
                        color: "danger",
                        onClick: deleteCategories
                    }
                ]}
            >
                <div className='pl-3 m-2'>
                    <h4 style={{ color: "green" }}>Expanded Categories</h4>
                    {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                    <h4 style={{ color: "orange" }}>Checked Categories</h4>
                    {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                </div>

            </CommonModal>
        );
    }


    return (
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Categories Overview</h6>
                            <div >
                                <button class="btn btn-outline-info mx-1  " data-toggle="modal" data-target="#logoutModal" onClick={updateCategory}>Edit</button>
                                <button class="btn btn-outline-danger mx-1  " data-toggle="modal" data-target="#deleteModal" onClick={deleteCategory}>Delete</button>
                            </div>
                        </div>
                        <div className='card-body'>
                            <CheckboxTree
                                nodes={renderCategories(category.categories)}
                                checked={checked}
                                expanded={expanded}
                                onCheck={checked => setChecked(checked)}
                                onExpand={expanded => setExpanded(expanded)}
                                icons={{
                                    check: <IoIosCheckbox />,
                                    uncheck: <IoIosCheckboxOutline />,
                                    halfCheck: <IoIosCheckboxOutline />,
                                    expandClose: <IoIosArrowForward />,
                                    expandOpen: <IoIosArrowDown />,
                                }}
                            />
                        </div>

                        {renderUpdateCategoryModel()}
                        {renderDeleteCategoryModel()}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightPanelViewCat