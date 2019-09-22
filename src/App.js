import React from 'react'
import './App.css'
import Navbar from './app/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './Reducer'
import Home from './app/Home'
import Resturants from './app/Resturants'
import Detials from './app/Detials'
import Cart from './app/Cart'
import Register from './app/Register/Register'
import ErrorPage from './app/ErrorPage'

const Store = createStore(Reducer)

function App () {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <article className='fluid-container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/resturants' component={Resturants} />
            <Route path='/detials' component={Detials} />
            <Route path='/cart' component={Cart} />
            <Route path='/register' component={Register} />
            <Route component={ErrorPage} />
          </Switch>
        </article>
      </BrowserRouter>
    </Provider>
  )
}

export default App
