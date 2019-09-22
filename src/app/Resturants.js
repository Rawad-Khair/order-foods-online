import React from 'react'
// import axios from 'axios'
import Resturant from './Resturant'
import Loading from './Loading'
import Style from 'styled-components'
import { connect } from 'react-redux'

const Resturants = props => {
  // const [resturants, setResturants] = useState([])
  // useEffect(() => {
  //   axios.get('data.json').then(res => setResturants(res.data.resturants))
  //   // getData()
  // }, [])
  //     const getData = async () => {
  //     const resData = await fetch('data.json')
  //     const data = await (resData.json())
  //     setResturants(data.resturants)
  //   }
  setTimeout(function () {
    const loading = document.getElementById('load')
    if (loading !== null) loading.click()
  }, 1000)

  const tabBtns = (
    <TabsBtns>
      <Btn
        className={props.activeBtn === 'all' ? 'active' : null}
        onClick={() => props.chooseAll()}>
        All
      </Btn>
      {
        props.categories.map(cat =>
          <Btn key={cat.id}
            className={props.activeBtn === cat.title ? 'active' : null}
            onClick={() => props.chooseCat(cat)}>{cat.title}</Btn>)
      }
    </TabsBtns>
  )
  if (props.filteredResturants.length !== 0) {
    return (
      <ResturantsContainer>
        {tabBtns}
        <hr />
        <section className='row'>
          {
            props.filteredResturants.map(resturant => {
              return (
                <section className='col-lg-4 col-md-6' key={resturant.id}>
                  <Resturant
                    item={resturant}
                    onClick={() => props.showDetials(resturant)} />
                </section>
              )
            })
          }
        </section>
      </ResturantsContainer>
    )
  } else {
    return (
      <ResturantsContainer>
        {tabBtns}
        <hr />
        <p className='text-center'> There is no resturants in this category</p>
        <Loading onClick={() => props.loading()} />
      </ResturantsContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredResturants: state.filteredResturants,
    categories: state.categories,
    activeBtn: state.activeBtn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    showDetials: (item) => dispatch({ type: 'SHOW_DETIALS', item }),
    loading: () => dispatch({ type: 'ACTIVE_REDUCER' }),
    chooseCat: item => dispatch({ type: 'CHOOSE_CAT', item }),
    chooseAll: () => dispatch({ type: 'CHOOSE_ALL' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resturants)

const ResturantsContainer = Style.article`
  padding-top: 75px
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
