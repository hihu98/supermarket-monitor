import { useEffect, useState } from 'react'
import NewItem from './NewItem'

import { getOne, updateOne } from '../../../services/storage'
import ItemList from './ItemList'

export default function NewOrder(props) {
    const [_order, _setOrder] = useState([])

    useEffect(() => {
        _fetchNewOrder()
    }, [])

    const _fetchNewOrder = () => {
        const current = getOne('newItem') || []
        _setOrder(current)
    }

    const _reset = () => {
        _setOrder([])
        updateOne('newItem', [])
    }

    const _addNewItem = (item) => {
        const newOrder = [item, ..._order]
        _setOrder(newOrder)
        updateOne('newItem', newOrder)
    }

    const _updateItem = (i, opts) => {
        const newOrder = _order.map((item, j) => {
            if (i === j) return { ...item, ...opts }
            return item
        })
        _setOrder(newOrder)
        updateOne('newItem', newOrder)
    }

    const _removeItem = (i) => {
        const newOrder = _order.filter((_, j) => i !== j)
        _setOrder(newOrder)
        updateOne('newItem', newOrder)
    }

    const _total = _order.reduce(
        (result, { qty, price }) => result + qty * price,
        0
    )

    return (
        <div className="new-order-component">
            <div className="d-flex flex justify-content-between align-items-center mb-3">
                <h3>New order</h3>
                <button
                    className="app-button app-button-danger"
                    onClick={_reset}
                >
                    Reset
                </button>
            </div>

            <div className="">
                <NewItem addNewItem={_addNewItem} />
            </div>

            <h3 className="my-3">TOTAL: {Number(_total).toLocaleString()}</h3>

            <div className="">
                <ItemList
                    updateItem={_updateItem}
                    removeItem={_removeItem}
                    items={_order}
                />
            </div>
        </div>
    )
}
