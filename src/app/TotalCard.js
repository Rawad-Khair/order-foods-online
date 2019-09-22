import React from 'react'
import { connect } from 'react-redux'
import Style from 'styled-components'

const TotalCard = props => {
  return (
    <TotalContainer>
      <h4 className='sum-items'>Sum Of Items : {props.sumOfItems} </h4>
      <h3 className='final-total'>Final Total:  {props.finalTotal}</h3>
    </TotalContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    sumOfItems: state.sumOfItems,
    finalTotal: state.finalTotal
  }
}
export default connect(mapStateToProps)(TotalCard)

const TotalContainer = Style.section`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #000e;
  color: white;
  padding: 5px;
  @media(max-width: 500px){
    .sum-items {
      font-size: .9em
    }
    .final-total {
      font-size: 1em
    }
  }
`
