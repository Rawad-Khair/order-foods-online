import React from 'react'
import About from '../../About/About'
import Style from 'styled-components'
import { ProductsConsumer } from '../../../context'

const LogUp = () => {
  return (
    <ProductsConsumer>
      {
        value => {
          if (value.langHeading[0] === undefined) return null
          let flasherNote = ''
          return (
            <React.Fragment>
              <article className={value.direction === 'ltr' ? 'log-up' : 'log-up text-right'}>
                <form style={{ position: 'relative', marginTop: 60 }}>
                  <section className='row'>
                    <section className='col-lg-1' />
                    <section className='col-md-5'>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.fullname}</label>
                        <input type='text' className='form-control' placeholder={value.langHeading[0].logup.fullnamePH} />
                      </section>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.email}</label>
                        <input type='email' className='form-control' placeholder={value.langHeading[0].logup.emailPH} />
                      </section>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.mobile}</label>
                        <input type='text' className='form-control' placeholder={value.langHeading[0].logup.mobilePH} maxLength='10' />
                      </section>
                    </section>
                    <section className='col-md-5'>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.address}</label>
                        <textarea className='form-control' placeholder={value.langHeading[0].logup.addressPH} maxLength='100' style={{ resize: 'none', height: 125 }} />
                      </section>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.password}</label>
                        <input type='password' className='form-control' placeholder={value.langHeading[0].logup.passwordPH} />
                      </section>
                      <section className='form-group'>
                        <label>{value.langHeading[0].logup.password2}</label>
                        <input type='password' className='form-control' placeholder={value.langHeading[0].logup.password2PH} />
                      </section>
                    </section>
                    <section className='col-lg-1 col-md-2'>
                      <button type='submit' className='btn btn-info btn-block' style={{ height: '100%', whiteSpace: 'normal' }}>{value.langHeading[0].logup.logupBtn}</button>
                    </section>
                  </section>
                  <FlasherNote ref={(ref) => { flasherNote = ref }} className={value.direction === 'rtl' ? 'adjustBtn' : ''}>
                    {value.langHeading[0].logup.note}
                    <i className='fa fa-close' onClick={() => {
                      flasherNote.classList += ' hide '
                    }} />
                  </FlasherNote>
                </form>
              </article>
              <hr />
              <About />
            </React.Fragment>
          )
        }
      }
    </ProductsConsumer>
  )
}

export default LogUp

const FlasherNote = Style.h6`
  padding: 10px;
  border-radius: 2px;
  position: absolute;
  bottom: 5%;
  background-color: darkorange;
  color: #fff;
  -webkit-animation: flashNote 1.4s infinite;
  -moz-animation: flashNote 1.4s infinite;
  -o-animation: flashNote 1.4s infinite;
  -ms-animation: flashNote 1.4s infinite;
  animation: flashNote 1.4s infinite;
  animation-direction: alternate
  @keyframes flashNote {
    0% {opacity: 0}
    100% {opacity: .7}
  }
  .fa {
    margin: 5px;
    cursor: pointer
    &:hover {
      color: red
    }
  }
  &.hide{
    display: none
  }
  @media(max-width: 768px) {
    max-width: 100px;
    top: 2%;
    left: 85%;
    height: 200px;
    padding-top: 25px;
    line-height: 1.58
    .fa {
      position: absolute;
      top: 0;
      left: 0
    }
    &.adjustBtn {
      right: 85%;
      left: auto
      .fa {
        left: auto;
        right: 0
      }
    }
  }
`
