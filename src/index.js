import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Counter from './components/counter'
import Navbar from './components/user/navbar'
import SliderHome from './components/user/home/slider'
import MainHome from './components/user/home/main'
// import serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Counter />, document.getElementById('counter'))
ReactDOM.render(<Navbar />, document.getElementById('nav-user'))
// ReactDOM.render(<SliderHome />, document.getElementById('slider-home'))
ReactDOM.render(<MainHome/>, document.getElementById('main'))


// serviceWorker.unregister()


// serviceWorker.unregister()