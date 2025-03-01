import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { Provider } from 'react-redux'
import Store from "./Store/Store.js"
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
     <App /> 
  </Provider>

)