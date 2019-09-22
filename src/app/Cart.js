import React, { Component } from 'react'
import { connect } from 'react-redux'
import Style from 'styled-components'
import Product from './Product'
import TotalCard from './TotalCard'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filteredTitle:  [...new Set(this.props.cart.map(item => item.resturant))]
    }
  }
componentDidMount = () => {

}
  render () {
    return (
      <CartContainer>
        {
          this.state.filteredTitle.map(title => {
          return (
            <section key={title} style={{margin:'25px 0'}}>
            { (this.props.cart.length === 0)
            ? null
            : <h4 style={{marginBottom:'25px'}}>{title}</h4>
            }
            <section className='row'>
          {
            this.props.cart.map(item => {
            if(item.resturant === title) return (
              <section className='col-12 col-md-4' key={item.id}>
                <Product item={item} inCart fromCart/>
              </section>
            )
            else return null
          })
          } 
            </section><hr/></section>

          )}
        )}  
        {
          (this.props.cart.length === 0)
            ? <h3 className='col-12 text-center'>
              Your Cart is Empty
            </h3>
            : <TotalCard />
        }
      </CartContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)

const CartContainer = Style.article`
  padding: 75px 15px;
`