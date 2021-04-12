import { useState } from 'react'
import NewItem from './NewItem'

export default function ItemList(props) {
    const [_editing, _setEditing] = useState(null)

    const _setItem = (opts) => {
        console.log(opts)
        props.updateItem(_editing, opts)
        _setEditing(null)
    }

    const _clickEdit = (i) => _setEditing(i)

    return (
        <div>
            {props.items.map((item, i) => (
                <div key={i} className="my-3 py-1">
                    {i === _editing ? (
                        <>
                            <NewItem current={item} addNewItem={_setItem} />

                            <button
                                className="app-button me-2 mt-2"
                                onClick={() => _clickEdit(null)}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <div className="d-flex flex justify-content-between align-items-center">
                            <h6>{item.name}</h6>
                            <div>
                                <button
                                    className="app-button mx-3"
                                    onClick={() => _clickEdit(i)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="app-button app-button-danger"
                                    onClick={() => props.removeItem(i)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                    <small className="text-muted">
                        {Number(item.price).toLocaleString()} *{' '}
                        {Number(item.qty).toLocaleString()} ={' '}
                        {Number(item.qty * item.price).toLocaleString()}
                    </small>
                </div>
            ))}
        </div>
    )
}
