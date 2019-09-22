import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'

const Product = (props) => {
  return (
    <ProductCard>
      <section className='rating'>
        <span className='fa fa-star-o' />
        <span className='fa fa-star-o' />
        <span className='fa fa-star-o' />
        <span className='fa fa-star-o' />
        <span className='fa fa-star-o' />
      </section>
      <section className='product-img'>
        <img src='' alt='product-img' />
      </section>
      <span className='product-price'>{props.item.price} $</span>
      <h6 className='product-title text-left'>{props.item.title}</h6>
      <p className='product-info text-muted'>{props.item.info}</p>
      {
        props.inCart
          ? <Quantity>
            <SpecBtn onClick={() => props.increase(props.item)}>+</SpecBtn>
            <h5 style={{ margin: '10px' }}>{props.item.quantity}</h5>
            <SpecBtn
              onClick={() => props.decrease(props.item)}
              style={props.item.quantity <= 1 ? { visibility: 'hidden' } : null}
            >-</SpecBtn>
          </Quantity>
          : null
      }
      {
        props.inCart
          ? <Btn className='btn btn-danger' onClick={() => props.removeFromCart(props.item)}>{props.fromCart ? 'Remove from Order' : 'Undo'}</Btn>
          : <Btn
            className={props.disabled ? 'btn btn-default' : 'btn btn-success'}
            onClick={() => props.addToCart(props.item)}
            disabled={props.disabled ? 'disabled' : null}>
            {props.disabled ? '' : 'Order'}
          </Btn>
      }
      {props.inCart ? <h5>Total: {props.item.total}</h5> : null}
    </ProductCard>

  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (newItem) => dispatch({ type: 'ADD_TO_CART', item: newItem }),
    removeFromCart: (item) => dispatch({ type: 'REMOVE_FROM_CART', item: item }),
    increase: (item) => dispatch({ type: 'INCREASE', item: item }),
    decrease: (item) => dispatch({ type: 'DECREASE', item: item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

const ProductCard = Style.section`
  height: 300px;
  padding: 10px;
  margin: 2px;
  border-radius: 2px;
  position: relative;
  background-color: white;
  box-shadow: 0px 5px 15px #000;
  cursor: pointer
  @media(max-width: 768px) {
    width: 60%;
    margin: 20px auto
  }
  @media(max-width: 520px) {
    width: 85%;
    margin: 20px auto
  }
  :before {
    content: '';
    display: block;
    width: 104%;
    height: 60%;
    background-color: darkorange;
    position: absolute;
    top: -2%;
    left: -2%;
    z-index: -10
  }
  .rating {
    width: 15px;
    position: absolute;
    right: 2px;
    top: 2px;
  }
  .product-img {
    width: 90%;
    height: 150px;
    text-align: center;
    margin: auto;
    border: 1px solid
  }
  .product-title {
    margin: 20px 0 5px
  }
  .product-price {
    position: absolute;
    top: 145px;
    left: 50%;
    padding: 2px 4px;
    transform: translate(-50%,0);
    background-color: darkorange;
    color: white;
    font-weight: bold;
  }
`
const Btn = Style.button`
  position: absolute;
  right: 10px;
  top: 94%;
`
const Quantity = Style.section`
  display: flex;
  position: absolute;
  right: 10px;
  top: 80%;
  color: darkorange;
`
const SpecBtn = Style.span`
  display: inline-block;
  padding: 2px;
  width: 20px;
  height: 20px;
  font-size: 22px;
  border: 1px solid darkorange;
  line-height: 10.5px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover:first-of-type {
    background-color: green;
    color: white
  }
  &:hover:last-of-type {
    background-color: red;
    color: white
  }
`
