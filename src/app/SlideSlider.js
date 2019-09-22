import React, { useState } from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import Resturant from './/Resturant'

const SlideSlider = props => {
  const [leftValue, setNewLeftValue] = useState(0)
  const [clickCounter, changeCounter] = useState(0)
  let lastCount = 2
  if (window.innerWidth >= 992) {
    lastCount = props.recommendedResturants.length / props.itemsCount - 1
  } else if (window.innerWidth < 992 && window > 575) {
    lastCount = props.recommendedResturants.length / (props.itemsCount - 1) - 1
  } else if (window.innerWidth <= 575) {
    lastCount = props.recommendedResturants.length - 1
  }

  const tForward = () => {
    if (clickCounter > 0) {
      setNewLeftValue(leftValue + 100)
      changeCounter(prev => prev - 1)
      console.log('forward')
    }
  }
  const tBackward = () => {
    if (clickCounter < lastCount) {
      setNewLeftValue(leftValue - 100)
      changeCounter(prev => prev + 1)
      console.log('backward')
    }
  }

  const hScrollDir = props.direction === 'ltr'
    ? { left: leftValue + '%', transition: `all 1.7s ease-in-out` }
    : { right: leftValue + '%', transition: `all 1.7s ease-in-out`, left: 'auto' }
  const forwardBtnDir = props.direction === 'ltr' ? { right: '5px' } : { left: '5px', right: 'auto' }
  const backBtnDir = props.direction === 'ltr' ? { left: '5px' } : { right: '5px', left: 'auto' }
  const forwardBtnDirClass = props.direction === 'ltr' ? 'fa btn btn-info-outline forward fa-chevron-right' : 'fa btn btn-info-outline forward fa-chevron-left'
  const backBtnDirClass = props.direction === 'ltr' ? 'fa btn btn-info-outline backward fa-chevron-left' : 'fa btn btn-info-outline backward fa-chevron-right'

  return (
    <HScrollView>
      <Forward onClick={() => tForward()}
        className={forwardBtnDirClass}
        disabled={clickCounter <= 0 ? 'disabled' : null}
        style={forwardBtnDir} />
      <Backward onClick={() => tBackward()}
        className={backBtnDirClass}
        disabled={clickCounter >= lastCount ? 'disabled' : null}
        style={backBtnDir} />
      <HScroll style={hScrollDir}>
        {
          props.recommendedResturants.map(
            resturant => {
              return (
                <section className='col-12 col-sm-9 col-lg-6' key={resturant.id}>
                  <Resturant
                    item={resturant}
                    onClick={() => props.showDetials(resturant)} />
                </section>
              )
            }
          )
        }

      </HScroll>
    </HScrollView>
  )
}

const mapStateToProps = state => {
  return {
    recommendedResturants: state.recommendedResturants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showDetials: (item) => dispatch({ type: 'SHOW_DETIALS', item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideSlider)

const HScrollView = Style.section`
position: relative;
width: 100%;
height: 100%;
overflow: hidden
.forward, .backward {
  position: absolute;
  top: 150px;
  z-index: 100;
  height: 100px;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important;
  box-shadow: none !important
}
`
const Forward = Style.button`
`
const Backward = Style.button`
`
const HScroll = Style.section`
  position: relative;
  display: flex;
  height: 100%;
`
