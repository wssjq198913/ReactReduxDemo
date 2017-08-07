import reducers from '../reducers/index';
import { createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const sagaMiddleware = createSagaMiddleware()

const enhancers = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );

const store = createStore(reducers, enhancers)

sagaMiddleware.run(rootSaga) //register sagas

export default store;