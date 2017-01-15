import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/app';
import store from "./middlewares/store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, app);
