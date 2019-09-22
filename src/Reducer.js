import axios from 'axios'

const initialState = {
  isLoaded: false,
  resturants: [],
  filteredResturants: [],
  recommendedResturants: [],
  activeResturant: null,
  products: [],
  filteredProducts: [],
  categories: [],
  activeBtn: 'all',
  cart: [],
  finalTotal: 0,
  sumOfItems: 0
}
axios.get('data.json').then(res => {
  initialState.categories = res.data.categories
  initialState.resturants = res.data.resturants
  initialState.filteredResturants = res.data.resturants
  initialState.products = res.data.products
  initialState.filteredProducts = res.data.products
  initialState.recommendedResturants = res.data.resturants.filter(resturant => resturant.recommended === true)
  // initialState.categories = [...new Set(initialState.resturants.map(resturant => resturant.category))]
})

const Reducer = (state = initialState, action) => {
  if (action.type === 'ACTIVE_REDUCER') {
    state = { ...state, isLoaded: true }
  }
  if (action.type === 'SHOW_RESTURANTS') {
    const filteredResturants = state.resturants.filter(resturant => resturant.category === action.item)
    state = { ...state, filteredResturants, activeBtn: action.item }
    const resturants = document.getElementById('resturants')
    resturants.click()
  }
  if (action.type === 'SHOW_DETIALS') {
    const filteredProducts = state.products.filter(product => product.resturant === action.item.title)
    state = { ...state, activeResturant: action.item, filteredProducts }
    const detials = document.getElementById('detials')
    detials.click()
    window.scrollTo(0, 0)
  }
  if (action.type === 'ADD_TO_CART') {
    const duplicateIndex = state.cart.findIndex(item => item.id === action.item.id)
    action.item.quantity += 1
    action.item.total = action.item.quantity * action.item.price
    state.sumOfItems += 1
    state.finalTotal += action.item.total
    if (duplicateIndex === -1) {
      state = { ...state, cart: [...state.cart, action.item] }
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const delIndex = state.cart.findIndex(item => item.id === action.item.id)
    state.sumOfItems -= action.item.quantity
    state.finalTotal -= action.item.total
    action.item.quantity = 0
    action.item.total = 0
    const newCart = [...state.cart]
    newCart.splice(delIndex, 1)
    state = { ...state,
      cart: newCart
    }
    if (state.cart.length === 0) {
      const resturants = document.getElementById('resturants')
      resturants.click()
    }
  }
  if (action.type === 'INCREASE') {
    const reqItem = state.cart.find(item => item.id === action.item.id)
    reqItem.quantity += 1
    reqItem.total = reqItem.quantity * reqItem.price
    state.sumOfItems += 1
    state.finalTotal += reqItem.price
    const newCart = [...state.cart]
    state = { ...state, cart: newCart }
  }
  if (action.type === 'DECREASE') {
    const reqItem = state.cart.find(item => item.id === action.item.id)
    if (reqItem.quantity > 1) {
      reqItem.quantity -= 1
      reqItem.total = reqItem.quantity * reqItem.price
      state.sumOfItems -= 1
      state.finalTotal -= reqItem.price
      const newCart = [...state.cart]
      state = { ...state, cart: newCart }
    }
  }
  if (action.type === 'CHOOSE_CAT') {
    state = { ...state, activeBtn: action.item.title }
    const filteredResturants = state.resturants.filter(resturant => resturant.category === action.item.title)
    state = { ...state, filteredResturants }
    window.scrollTo(0, 0)
  }
  if (action.type === 'CHOOSE_ALL') {
    state = { ...state, activeBtn: 'all' }
    const filteredResturants = state.resturants
    state = { ...state, filteredResturants }
    window.scrollTo(0, 0)
  }

  let nav = document.getElementById('nav')
  window.onscroll = function () {
    if (nav !== null) {
      if (window.pageYOffset > 40) {
        const index = nav.classList.toString().indexOf('fixed-nav')
        if (index === -1) {
          nav.classList += ' fixed-nav'
        }
      } else {
        const index = nav.classList.toString().indexOf('fixed-nav')
        if (index !== -1) {
          nav.classList = nav.classList.toString().slice(0, index - 1)
        }
      }
    } else {
      nav = document.getElementById('nav')
    }
  }
  return state
}

export default Reducer
