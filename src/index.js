
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {
     Router,
        Route,
        Link
} from 'react-router-dom'

import {Provider} from 'react-redux'


import reducers from 'reducers'
import Coin from 'containers/coin'
import Lending from 'containers/lending'
import Price from 'containers/fund'
import Calc from 'containers/calc'
import Calc_1 from 'containers/calc1'
import Calc_3 from 'containers/calc3'
import Balance from 'containers/balance'
import Store from 'containers/store'
import Login from 'containers/login'
import SignIp from 'containers/signIn'
import SignUp from 'containers/sign_up'
import New_page from 'containers/new_page'
import createHistory from 'history/createBrowserHistory'
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))


const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            
                <Route exact path='/' component={Lending} />
                <Route path='/trade/:id' component={Coin} />
                <Route exact path='/fund' component={Price} />
                <Route path='/fund/invest-I' component={Calc} />
                <Route path='/fund/invest-II' component={Calc_1} />
                <Route path='/fund/invest-III' component={Calc_3} />
                <Route path='/profile-balance' component={Balance} />
                <Route path='/news' component={Store} />
                <Route path='/login' component={Login} />
                <Route path='/SignIp' component={SignIp} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/news/1' component={New_page} />
            
        </Router>
        

        
    </Provider>,
    document.getElementById('root')
);
