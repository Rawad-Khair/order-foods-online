import React from 'react'
import Style from 'styled-components'

const Resturant = props => {
  return (
    <ResturantCard onClick={() => props.onClick()}>
      <section className='rating'>
        <span className={props.item.ranking >= 1 ? 'fa fa-star star' : 'fa fa-star-o'} />
        <span className={props.item.ranking >= 2 ? 'fa fa-star star' : 'fa fa-star-o'} />
        <span className={props.item.ranking >= 3 ? 'fa fa-star star' : 'fa fa-star-o'} />
        <span className={props.item.ranking >= 4 ? 'fa fa-star star' : 'fa fa-star-o'} />
        <span className={props.item.ranking >= 5 ? 'fa fa-star star' : 'fa fa-star-o'} />
      </section>
      <section className='resturant-img'>
        <img src={props.item.images[0]} alt='resturant-img' />
      </section>
      <span className='resturant-logo'>
        <img src={props.item.logo} alt='resturant-logo' />
      </span>
      <h5 className='resturant-title text-left'>{props.item.title}</h5>
      <p className='resturant-address text-muted'>{props.item.address}</p>
      <p className='resturant-phone'><i className='fa fa-phone-square' /> {props.item.phone}</p>
    </ResturantCard>
  )
}

export default Resturant

const ResturantCard = Style.section`
  height: 275px;
  padding: 10px;
  margin: 15px;
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
    right: 5px;
    top: 2px;
    .star {
      color: darkorange
    }
  }
  .resturant-img {
    width: 60%;
    height: 150px;
    text-align: center;
    margin: auto;
    img {
      width: 100%;
      height: 100%
    }
  }
  .resturant-logo {
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: absolute 
    right: 10px;
    bottom: 10px;
    img {
      width: 100%;
      height: 100%
    }
  }
  .resturant-title {
    margin: 5px 0
  }
  .resturant-address {
    max-width: 60%
  }
`
