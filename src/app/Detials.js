import React, { useState } from 'react'
// import axios from 'axios'
import Product from './Product'
import Style from 'styled-components'
import { connect } from 'react-redux'

const Detials = (props) => {
  const [activeBtn, setActiveBtn] = useState('all')
  const [activeImg, setActiveImg] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(props.filteredProducts)
  const headerProducts = [...new Set(props.filteredProducts.map(item => item.header_on_menu))]
  const chooseAll = () => {
    setActiveBtn('all')
    const filteredProducts = props.filteredProducts
    setFilteredProducts(filteredProducts)
  }
  const chooseHeader = (item) => {
    setActiveBtn(item)
    const filteredProducts = props.filteredProducts.filter(pr => pr.header_on_menu === item)
    setFilteredProducts(filteredProducts)
  }
  const nextImg = () => {
    if (activeImg < props.activeResturant.images.length - 1) {
      setActiveImg(prev => prev + 1)
    } else {
      setActiveImg(0)
    }
  }
  const prevImg = () => {
    if (activeImg > 0) {
      setActiveImg(prev => prev - 1)
    } else {
      setActiveImg(props.activeResturant.images.length - 1)
    }
  }
  const chooseImg = (img) => {
    setActiveImg(img)
  }

  if (props.filteredProducts.length !== 0 && props.activeResturant !== null) {
    return (
      <DetialsContainer>
        <section className='container'>
          <section className='row adjust-horizontal'>
            <section style={{ padding: '0 25px' }}>
              <p>{props.activeResturant.motto}</p>
              <h2 className='text-uppercase'>{props.activeResturant.title}</h2>
            </section>
            <span className='resturant-logo'>
              <img src={props.activeResturant.logo} alt='resturant-logo' />
            </span>
          </section>
          <section className='row'>
            <section className='col-sm-6'>
              <section className='slider'>
                <img src={props.activeResturant.images[activeImg]} alt='main-img' className='main-image' />
                <i className='chevron chevron-right' onClick={() => nextImg()} />
                <i className='chevron chevron-left' onClick={() => prevImg()} />
                <section className='thumbnails'>
                  {props.activeResturant.images.map(
                    (img, index) =>
                      <img
                        key={img}
                        src={img}
                        alt='thumnails'
                        onClick={() => chooseImg(index)}
                        className={activeImg === index ? 'active-image' : null} />)}
                </section>
              </section>
            </section>
            <section className='col-sm-6'>
              <h3>About US</h3>
              <p className='text-muted'>{props.activeResturant.address}</p>
              <p><i className='fa fa-phone-square' /> {props.activeResturant.phone}</p>
              <p>{props.activeResturant.info}</p>
            </section>
          </section>
        </section>
        <hr />
        <section className='row'>
          <section className='col-sm-1' />
          <section className='col-sm-10'>
            <h3 className='text-center'>Our Menu</h3>
            <TabsBtns>
              <Btn
                className={activeBtn === 'all' ? 'active' : null}
                onClick={() => chooseAll()}>
                   All
              </Btn>
              {
                headerProducts.map(item =>
                  <Btn key={item}
                    className={activeBtn === item ? 'active' : null}
                    onClick={() => chooseHeader(item)}>{item}</Btn>)
              }
            </TabsBtns>
            <section className='row'>
              {
                filteredProducts.map(product => {
                  const inCart = props.cart.findIndex(item => item.id === product.id)
                  return (
                    <section className='col-md-4' key={product.id}>
                      <Product item={product} inCart={inCart === -1 ? null : 'inCart'} />
                    </section>
                  )
                })
              }
            </section>
          </section>
        </section>

      </DetialsContainer>
    )
  } else {
    window.location.href = '/'
    return null
  }
}

const mapStateToProps = state => {
  return {
    filteredProducts: state.filteredProducts,
    activeResturant: state.activeResturant,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Detials)

const DetialsContainer = Style.article`
  padding: 75px 0 100px
  .adjust-horizontal {
    justify-content: space-between
  }
  .resturant-logo {
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    float: right
    img {
      width: 100%;
      height: 100%
    }
  }
  .slider {
    height: 300px;
    position: relative;
    padding: 10px;
    .main-image {
      width: 100%;
      height: 100%
    }
    .active-image {
      border: 2px dashed darkorange
    }
    .chevron {
      height: 30px;
      width: 30px;
      background: #eee;
      border-radius: 50%;
      text-align: center;
      line-height: 1.4;
      display: block;
      position: absolute;
      font-size: 1.4em;
      top: 50%;
      cursor: pointer
      &:hover {
        background: #000;
        color: white
      }
    }
    .chevron-right {
      left: 91%
    }
    .chevron-right:after {
      content: '\f054';
      font-family: 'FontAwesome'; 
    }
    .chevron-left {
        right: 91%;
        left: auto
    }
    .chevron-left:after {
      content: '\f053';
      font-family: 'FontAwesome'; 
    }
    .thumbnails {
      width: 15%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%);
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: block;
        cursor: pointer
      }
    }
  }
`
const TabsBtns = Style.section`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 25px 0
  }
`
const Btn = Style.button`
  border: 1px solid;
  width: 20%;
  cursor: pointer;
  background-color: white;
  outline: none !important;
  margin: 2px;
  border-radius: 1px;
  box-shadow: 1px 3px 5px 0px;
  text-transform: capitalize;
  transition: all .4s
  @media(max-width: 400px) {
    width: auto
  }
  &:hover {
    -webkit-transform: translateY(3px);
    -moz-transform: translateY(3px);
    -o-transform: translateY(3px);
    -ms-transform: translateY(3px);
    transform: translateY(3px)
  }
  &.active {
    background-color: darkorange;
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -o-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
    box-shadow: inset 1px 1px 5px #fff;
    color: white;
    font-weight: bold;
  }
`
