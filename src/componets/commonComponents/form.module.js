import React from 'react'

const FormInputModule = (props) => {
    return (
        <input defaultValue={props.dv} disabled={props.disabled} onBlur={props.onBlur} value={props.val} type={props.typ} name={props.nm} className={props.cn} onChange={props.onChange} id={props.id}/>
    )
}

const FormButtonModule = (props) => {
    return (
        <button  disabled={props.disabled} className={props.cn} type={props.typ} ref={props.ref} onClick={props.onClick}>{props.btntitle}</button>
    )
}

const FormLabelModule = (props) => {
    return (
        <label className={props.cn}>{props.title}</label>
    )
}

export { FormInputModule, FormButtonModule, FormLabelModule }