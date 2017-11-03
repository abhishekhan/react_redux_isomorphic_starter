import ReactDOM from 'react-dom';
import {
  Route,
  Link
} from 'react-router-dom';
import Home from './routes/Home';
import Counter from './routes/Counter'
import rootReducer from './reducers'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

const history = createBrowserHistory()
const initialState = {}
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state 
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions 
      // ... other middlewares ... 
    ),
  ),
)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/counter" component={Counter}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('app'))