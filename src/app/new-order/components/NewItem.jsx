import React, { useState, useRef } from 'react'

export default function NewItem(props) {
    const nameInp = useRef(null)
    const [_form, _setForm] = useState(props.current || { qty: 1 })

    const _onSubmit = (e) => {
        e.preventDefault()
        if (isNaN(_form.qty) || isNaN(_form.price)) return

        const submitData = { ..._form }
        _setForm({ qty: 1 })

        props.addNewItem(submitData)
        nameInp.current.focus()
    }

    const onChange = ({ target: { name, value } }) => {
        _setForm((_f) => ({ ..._f, [name]: value }))
    }

    return (
        <div className="new-item-form">
            <form onSubmit={_onSubmit} autoComplete="off">
                <div className="app-input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        ref={nameInp}
                        value={_form.name || ''}
                        name="name"
                        onChange={onChange}
                    />
                </div>
                <div className="app-input-group">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        value={_form.price || ''}
                        name="price"
                        onChange={onChange}
                    />
                </div>
                <div className="app-input-group">
                    <label htmlFor="qty">Qty</label>
                    <input
                        id="qty"
                        value={_form.qty || ''}
                        name="qty"
                        onChange={onChange}
                    />
                </div>
                <div className="d-flex flex justify-content-center">
                    <button type="submit" className="app-button">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
