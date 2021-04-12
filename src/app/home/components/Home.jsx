import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <>
            <div className="d-flex flex justify-content-center">
                <Link to="/order/new">
                    <button className="app-button">Add new order</button>
                </Link>
            </div>
        </>
    )
}
