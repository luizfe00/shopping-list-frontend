import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'
import { loadUser } from './actions/authActions'
import  Routes  from './routes'
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  
  render() {
      return (
        <div>
          <Routes />
        </div>
      );
  }
}
  

export default App;
