import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import productsReducer, { productsFetch } from './state/ProductsSlice'
import { configureStore } from '@reduxjs/toolkit';
import { ProductsApi } from './state/ProductsApi';
import cartReducer, {getTotals} from './state/CartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
    [ProductsApi.reducerPath]:ProductsApi.reducer,
    
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(ProductsApi.middleware),
  
});
store.dispatch(productsFetch())
store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </React.StrictMode>
);


