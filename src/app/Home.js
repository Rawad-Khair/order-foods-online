import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import Loading from './Loading'
import SlideSlider from './SlideSlider'
import MessageButton from './MessageButton'

const Home = props => {
  setTimeout(function () {
    const loading = document.getElementById('load')
    if (loading !== null) loading.click()
  }, 1000)

  if (props.categories.length !== 0) {
    return (
      <article className='home-page'>
        <MainImg className='main-img'>
          <section className='overlay' />
          <section className='title'>
            <h1 >Online Foods</h1>
          </section>
        </MainImg>
        <Categories>
          <h1 className='categories-title text-center'>Here is Our Categories</h1>
          <p className='categories-subtitle text-center'>Choose what you want</p>
          <section className='row' style={{ justifyContent: 'center' }}>
            {
              props.categories.map(
                (cat, index) => {
                  if (index < 2) {
                    return (
                      <section className='col-sm-4' key={cat.id}>
                        <Category title={cat.title} src={cat.img_src} className='category' onClick={() => props.showResturants(cat.title)} />
                      </section>
                    )
                  } else return null
                }
              )
            }
          </section>
          <section className='row' style={{ justifyContent: 'center' }}>
            {
              props.categories.map(
                (cat, index) => {
                  if (index >= 2 && index < 5) {
                    return (
                      <section className='col-sm-4' key={cat.id}>
                        <Category title={cat.title} src={cat.img_src} className='category' onClick={() => props.showResturants(cat.title)} />
                      </section>
                    )
                  } else return null
                }
              )
            }
          </section>
          <section className='row' style={{ justifyContent: 'center' }}>
            {
              props.categories.map(
                (cat, index) => {
                  if (index >= 5 && index < 7) {
                    return (
                      <section className='col-sm-4' key={cat.id}>
                        <Category title={cat.title} src={cat.img_src} className='category' onClick={() => props.showResturants(cat.title)} />
                      </section>
                    )
                  } else return null
                }
              )
            }
          </section>
          <section className='row' style={{ justifyContent: 'center' }}>
            {
              props.categories.map(
                (cat, index) => {
                  if (index >= 7) {
                    return (
                      <section className='col-sm-4' key={cat.id}>
                        <Category title={cat.title} src={cat.img_src} className='category' onClick={() => props.showResturants(cat.title)} />
                      </section>
                    )
                  } else return null
                }
              )
            }
          </section>

        </Categories>
        <RecommendedItems>
          <h2> Recommended Resutrants </h2>
          <section className='row text-center'>
            <section className='col-md-9'>
              <SlideSlider direction='ltr' itemsCount={3} />
            </section>
            <section className='col-md-3'>
              <section className='aside-bar'>
                <img src='images/download_apps.jpg' alt='download' />
                <a href=''><button className='download-apps-btn android' /></a>
                <a href=''><button className='download-apps-btn ios' /></a>
              </section>
            </section>
          </section>
        </RecommendedItems>
        <AboutUs>
          <section className='row'>
            <section className='col-md-6 text-center'>
              <img src='images/about-us.jpg' alt='about-us' />
            </section>
            <section className='col-md-6 adjust-about-us'>
              <h2>About Our Story</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis qui, quia esse dolorum dolor ullam possimus, deserunt consectetur repellendus nisi culpa enim, dolores delectus at quas repudiandae ex quisquam nesciunt!
              </p>
            </section>
          </section>
        </AboutUs>
        <Ads>
          <section className='row'>
            <section className='col-12'>
              <section className='over-ad'>
                <img src='images/ads.jpg' alt='ad1' width='100%' />
                <h2 className='ad-title'> All You Need .... in Your Hand </h2>
              </section>
            </section>
          </section>
        </Ads>
        <Contact>
          <section className='row'>
            <section className='col-md-6 register'>
              <fieldset>
                <legend>Register With Us</legend>
                <form action='' method='post'>
                  <section className='form-group'>
                    <label>full name</label>
                    <input type='text' className='form-control' placeholder='enter your full name' />
                  </section>
                  <section className='form-group'>
                    <label>Mobile Number</label>
                    <input type='text' className='form-control' placeholder='enter your Mobile Number' />
                  </section>
                  <section className='form-group'>
                    <label>full name</label>
                    <textarea className='form-control' placeholder='enter your address' style={{ resize: 'none' }} />
                  </section>
                  <input type='submit' className='btn btn-info btn-block' value='sign up' />
                </form>
                <p className='text-center'> if You have previous account ... please log in</p>
                <a href='/login' className='btn btn-danger btn-block'>Logn In</a>
              </fieldset>
            </section>
            <section className='col-md-6'>
              <img src='images/contact.jpg' alt='about-us' />
            </section>
          </section>
        </Contact>
        <Footer>
          <section className='row' style={{ height: '100%' }}>
            <section className='col-sm-4 adjustVertical'>
              <ul>
                <li><a href='/'>termsOfUse</a></li>
                <li><a href='/'>privecyPolicy</a></li>
                <li><a href='/'>shoppingSystem</a></li>
              </ul>
            </section>
            <section className='col-sm-4 adjustVertical'>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='resturants'>Resturants</a></li>
                <li><a href='/cart'>Cart</a></li>
                <li><a href='/register'>Register</a></li>
              </ul>
            </section>
            <section className='col-sm-3 adjustVertical'>
              <ul className='contact-list'>
                <li>home.thanks</li>
                <li><MessageButton title='Contact Us' /></li>
                <li>
                  <MySocialMedia className='my-social-media'>
                    <li><a href='/facebook'><i className='fa fa-facebook' /></a></li>
                    <li><a href='/twitter'><i className='fa fa-twitter' /></a></li>
                    <li><a href='/instagram'><i className='fa fa-instagram' /></a></li>
                    <li><a href='/github'><i className='fa fa-github' /></a></li>
                  </MySocialMedia>
                </li>
              </ul>
            </section>
          </section>
        </Footer>
        <CopyRight className='text-center'>copy right</CopyRight>
      </article>
    )
  } else return <Loading onClick={() => props.loading()} />
}

const Category = props => {
  return (
    <section className='category text-center' onClick={() => props.onClick()}>
      <img src={props.src} alt='category_img' />
      <h2 className='category-title'>{props.title}</h2>
      <span className='overfly' />
    </section>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch({ type: 'ACTIVE_REDUCER' }),
    showResturants: (cat) => dispatch({ type: 'SHOW_RESTURANTS', item: cat })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const MainImg = Style.article`
  width: 100vw;
  height: 100vh;
  background-image: url('./images/home.jpg');
  background-size: cover;
  position: relative
  .overlay{
    background-color: #000;
    opacity: .4;
    width: 100%;
    height: 100%
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: white
  }
`
const Categories = Style.article`
  margin: 50px;
  .categories-title {

  }
  .categories-subtitle {
    font-size: 1.7em
  }
  .category {
    height: 20vw;
    margin: 15px auto;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: 576px) {
      width: 80%;
      height: 43vw
    }

    img {
      width: 100%;
      height: 100%
    }
    .category-title {
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
      color: white;
      z-index: 2;
      opacity: 0;
      transition: all .4s
    }
    span.overfly {
      display: block;
      width: 0;
      height:100%;
      background-color: #0002;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      border-radius: 4px;
      transition: all .4s
    }
    &:hover {
      .category-title {
        opacity:1;
        transition: all .7s
      }
      span.overfly {
        width: 100%;
        left: 0;
        transition: all .7s
      }
    }
  }
`
const RecommendedItems = Style.article`
  min-height: 400px;
  position: relative
  @media(max-width: 768px) {
    min-height: 650px
  }
  .aside-bar {
    margin: auto;
    width: 200px;
    height: 250px;
    img {
      width: 75%;
      height: 75%
    }
    .download-apps-btn {
      position: relative;
      display: block;
      margin: auto;
      margin-bottom: 15px;
      width: 80%;
      height: 58px;
      background-color: transparent;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      &::after {
        content: '';
        width: 0;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: .4;
        transition: all .4s;
      }
    }
    .android {
      background-image: url(images/android-btn.jpg);
      &:hover:after {
        width: 100%
      }
    }
    .ios {
      background-image: url(images/ios-btn.jpg);
      &:hover:after {
        width: 100%
      }
    }
  }
`
const AboutUs = Style.article`
  margin: 50px;
  img {
    width: 100%;
    height: 100%
  }
  .adjust-about-us {
    text-align: justify;
    margin: 25px 0
  }

`
const Ads = Style.article`
  margin: 100px 0
  position: relative;
  .over-ad:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .4;
  }

  .over-ad .ad-title {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    color: #fff
  }
`
const Contact = Style.article`
  margin: 50px;
  fieldset {
    border: 1px solid;
    margin-bottom: 50px;
    padding: 15px;
    border-radius: 5px
    legend {
      padding: 2px 20px;
      width: auto;
      font-weight: bold
    }
    .form-group {
      margin-bottom: 2em
    }
    label {
      margin: 0
    }
    p {
      margin-top: 1rem
    }
    .form-control {
      border: none;
      border-top: 1px solid;
      border-radius: 0;
      padding: 0
      &:focus {
        box-shadow: none
      }
    }
  }
  img {
    width: 100%;
    height: 100%
  }
  .adjust-about-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    margin-top: 15px
  }

`
const Footer = Style.footer`
  height: 350px;
  background-color: #eee;
  position: relative;
  .col-md-3 {
    padding: 0
  }
  .adjustVertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  li {
    padding: 10px
  }
  li a {
    color: black;
    text-decoration: none
    &:hover {
      color: darkorange
    }
  }
  li img {
    width: 100px;
    height: 100px;
    border-radius: 50%
  }
  .contact-list li {
    padding: 0
  }
`
const MySocialMedia = Style.ul`
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 30px;
  padding: 10px 
  li {
      margin-left: 15px;
      cursor: pointer; 
      a {
        color: black
      }  
  }  
`
const CopyRight = Style.h6`
  padding: 10px
  @media(max-width: 500px) {
    font-size: .8em
  }
`
