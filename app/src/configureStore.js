import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const logger = createLogger()

const middleware = [logger, thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  rootReducer,
  {},
  enhancers
)

export default store
