import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = props => {
  return (
    <React.Fragment>
      <article className={props.direction === 'ltr' ? 'log-in' : 'log-in text-right'}>
        <form style={{ position: 'relative', marginTop: 60 }}>
          <section className='row'>
            <section className='col-md-4' />
            <section className='col-md-4'>
              <section className='form-group'>
                <label>{props.lang.email}</label>
                <input type='email' className='form-control' placeholder={props.lang.emailPH} />
              </section>
              <section className='form-group'>
                <label>{props.lang.password}</label>
                <input type='password' className='form-control' placeholder={props.lang.passwordPH} />
              </section>
            </section>
            <section className='col-md-1'>
              <button type='submit' className='btn btn-info' style={{ height: '100%', whiteSpace: 'normal' }}>{props.lang.loginBtn}</button>
            </section>
          </section>
        </form>
      </article>
      <section className={props.direction === 'ltr' ? 'row' : 'row text-right'}>
        <section className='col-md-4' />
        <section className='col-md-4' style={{ marginTop: 50 }}>
          <p>{props.lang.noAccount} </p>
          <Link to='/logup' className='btn btn-info btn-block'>{props.lang.logupBtn}</Link>
        </section>
      </section>
    </React.Fragment>
  )
}

export default LogIn
