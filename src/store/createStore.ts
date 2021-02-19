import {
  createStore,
  applyMiddleware,
  Reducer,
  AnyAction,
  Middleware,
} from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
