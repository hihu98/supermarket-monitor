import { Switch, Route } from 'react-router-dom'

import Header from './_shared/header'
import Home from './home'
import NewOrder from './new-order'

function App() {
    return (
        <>
            <Header />
            <div className="app-container">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/order/new" component={NewOrder} />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default App
