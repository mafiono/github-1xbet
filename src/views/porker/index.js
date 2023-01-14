import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { Search } from "react-feather"
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { CasinoItem } from "../Casino/CasinoItem"
import { Root } from "../../authServices/rootconfig"
import { providerconfig } from "../../configs/providerConfig"
import {providerchange,gametypechange,filterData,data_load} from "../../redux/actions/porker" 
import { setloginpage, porkergames_images, playsaccount } from "../../redux/actions/auth/loginActions"
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import 'react-awesome-slider/dist/styles.css'
const AutoplaySlider = withAutoplay(AwesomeSlider)
class Casino extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index : 1,
      data: [],
      allData: [],
      value: "",
      bool : false,
      typesActive: 0,
      providerActive: 1,
      providerActiveLabel: 'All',
      provider:[]
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.dataList.data.length !== state.data.length || props.allData !== props.dataList.filteredData) {
      return {
        data: props.dataList.data,
        allData: props.dataList.filteredData,
      }
    }
    return null;
  }
  componentDidMount(){
    this.props.porkergames_images();
    this.props.data_load(providerconfig["PORKER"]);
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.index !== this.state.index){
      let {data,allData,value} = this.state
      let indata=value.length ? allData.slice(0,this.state.index*24) : data.slice(0,this.state.index*24);
      if(this.state.index*24 > indata.length){
        this.setState({bool:true})
      }else{
        this.setState({bool:false})
      }
    }
    if(prevProps.types!==this.props.types&&this.props.types.length){
      this.setState({typesActive:this.props.types[0].value})
    }
    if(prevProps.provider!==this.props.provider&&this.props.provider.length){
      var data = this.props.provider;
      this.props.providerchange(this.props.provider);
      data.unshift({value:'All', label:'All'})
      this.setState({
        providerActive:this.props.provider[0].value,
        provider:this.props.provider
      })
    }
  }
    
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll+450) / height;
    if(scrolled>=1){
      this.setState({index : this.state.index+1});
    }
  }

  handleFilter(e){
    this.setState({ value: e.target.value })
    this.props.filterData(e.target.value)
  }

  play = (item) =>{
    if(!this.props.user.values){
      this.props.setloginpage({login : true, register : false});
    }else{
      this.props.playsaccount(this.props.user.values,item.gamedata,true);
    }
  }

  typesActive = value => {
    this.props.gametypechange(value)
    this.setState({ typesActive: value, index:1 });
  }

  providerActive = value => {
    if(value==='All'){
      this.props.providerchange(this.props.provider);
      this.setState({providerActiveLabel:"All"})
    }else{
      this.props.providerchange([{value:value}]);
      this.setState({providerActiveLabel:this.state.provider.find(data=>data.value===value).label})
    }
    this.setState({ 
      index:1,
      providerActive: value,
      typesActive: this.props.types[0].value,
    });
  };

  render() {
    let { data, allData, value } = this.state;
    let indata = value.length ? allData.slice(0, this.state.index*24) : data.slice(0, this.state.index*24);
    return(
      <React.Fragment>
        <Row className="fp-header  p-0 m-0 w-100">
          <Col lg="12" md="12" className="p-0 m-0 w-100">
            <div className="fp-header-image p-0 m-0 w-100">
              {
                this.props.casinoSlider_images ? (
                  <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={6000}
                    organicArrows={false}
                    animation="scaleOutAnimation"
                    bullets={true}
                  >
                    {
                      this.props.casinoSlider_images.map((item, i) => (
                        <div  className='firstpage-sliber-text' key={i} data-src={Root.imageurl+item.image}>
                          {/* <div style={{zIndex:50}} className="fp-header-def">
                            <div className='fp-header-def-h'>
                              <h1><strong>{item.data.text1}</strong></h1>
                            </div>
                            <div className="fp-header-def-c" style={{maxWidth:'250px', overflow:'hidden', border:'none'}}>
                              <h5>{item.data.text2}</h5>
                            </div>
                            <div className="fp-header-def-c" style={{padding:'10px', top:'70%', right: '2vw'}}>
                              <Button color="success" onClick={()=>this.play(item.data)}>&nbsp;Play&nbsp;Now</Button>
                            </div>
                          </div> */}
                        </div>
                      ))
                    }
                  </AutoplaySlider>
                ):null
              }
            </div>
          </Col>
        </Row>
        <div className='casino-main'>
          <div className='casino-filter'>
            <div className='casino-filter__clear'>Clear filter</div>
            <div className='casino-filter__controls'>
              <button className="controls__item">
                <svg className="controls__img" viewBox="0 0 32 32">
                  <path d="M31.359 14.557c0.641-0.641 0.834-1.539 0.577-2.373s-0.962-1.411-1.86-1.539l-7.76-1.154c-0.321-0.064-0.641-0.257-0.77-0.577l-3.463-6.99c-0.385-0.77-1.154-1.283-2.052-1.283s-1.667 0.513-2.052 1.283l-3.463 7.054c-0.128 0.321-0.449 0.513-0.77 0.577l-7.76 1.090c-0.898 0.128-1.603 0.705-1.86 1.539s-0.064 1.731 0.577 2.373l5.579 5.451c0.256 0.256 0.321 0.577 0.321 0.898l-1.347 7.695c-0.128 0.898 0.192 1.731 0.898 2.244s1.667 0.577 2.437 0.192l6.926-3.655c0.321-0.128 0.641-0.128 0.962 0l6.926 3.655c0.321 0.192 0.705 0.256 1.090 0.256 0.449 0 0.962-0.128 1.347-0.449 0.705-0.513 1.090-1.347 0.898-2.244l-1.347-7.695c-0.064-0.321 0.064-0.641 0.321-0.898l5.643-5.451zM24.176 21.162l1.347 7.695c0.064 0.385-0.064 0.77-0.385 0.962-0.321 0.256-0.705 0.256-1.090 0.064l-6.99-3.591c-0.321-0.192-0.705-0.256-1.090-0.256s-0.705 0.064-1.090 0.256l-6.926 3.655c-0.321 0.192-0.77 0.128-1.090-0.064-0.321-0.256-0.449-0.577-0.385-0.962l1.347-7.695c0.128-0.77-0.128-1.475-0.641-2.052l-5.579-5.451c-0.256-0.257-0.385-0.641-0.256-1.026s0.449-0.641 0.834-0.705l7.76-1.154c0.77-0.128 1.411-0.577 1.731-1.283l3.463-7.054c0.128-0.321 0.513-0.577 0.898-0.577s0.705 0.192 0.898 0.577l3.463 7.054c0.321 0.705 0.962 1.154 1.731 1.283l7.76 1.154c0.385 0.064 0.705 0.321 0.834 0.705s0 0.77-0.256 1.026l-5.579 5.451c-0.577 0.449-0.834 1.218-0.705 1.988z"/>
                </svg>
                <div className="controls__desc">Favorites</div>
              </button>
              <button className="controls__item">
                <svg className="controls__img" viewBox="0 0 32 32">
                  <path d="M16 0c-0.32 0-0.533 0.213-0.533 0.533v7.093c0 0.32 0.213 0.533 0.533 0.533s0.533-0.213 0.533-0.533v-6.56c8 0.267 14.4 6.88 14.4 14.933 0 8.213-6.72 14.933-14.933 14.933s-14.933-6.72-14.933-14.933c0-4 1.547-7.733 4.373-10.56 0.213-0.213 0.213-0.533 0-0.747s-0.533-0.213-0.747 0c-3.040 3.040-4.693 7.040-4.693 11.307 0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16z"/>
                  <path d="M15.253 17.867c0.32 0.427 0.853 0.747 1.387 0.8 0.053 0 0.107 0 0.16 0 0.48 0 0.96-0.213 1.333-0.533 0.373-0.373 0.587-0.96 0.533-1.493s-0.32-1.067-0.8-1.387l-6.88-5.013c-0.213-0.16-0.48-0.107-0.693 0.053-0.16 0.16-0.213 0.48-0.053 0.693l5.013 6.88zM17.28 16.107c0.213 0.16 0.32 0.373 0.32 0.587 0 0.267-0.053 0.48-0.267 0.64-0.16 0.16-0.427 0.267-0.64 0.267-0.267 0-0.48-0.16-0.587-0.32l-3.040-4.213 4.213 3.040z"/>
                </svg>
                <div className="controls__desc">Favorites</div>
              </button>
            </div>
            <div className="casino-filter__category">
              <button className="casino-filter__title">Categories</button> 
              <div className="casino-filter__list">
                {
                  this.props.types&&this.props.types.length?this.props.types.map((item, key)=>(
                    <label key={key} className="casino-filter__label" onClick={() => this.typesActive(item.value)}>
                      <input type="radio" className="casino-filter__radio" value={item.value}/> 
                      <span className={"casino-filter__radio-desc"+
                        (item.value === this.state.typesActive ? "-selected" : "")
                      }>{item.label}</span>
                    </label>
                  )):null
                }
              </div>
            </div>
            <div className="casino-filter__providers">
              <button className="casino-filter__title">Providers</button> 
              <input onChange={e => this.handleFilter(e)} placeholder="Search by provider" type="text" className="providers__search"/> 
              <div className="ps-container">
                <div className="providers__list">
                {
                  this.state.provider&&this.state.provider.length?this.state.provider.map((item, key)=>(
                    <div key={key} title={item.label} 
                      className={"providers__item"+ (item.value === this.state.providerActive ? "-selected" : "")}
                      onClick={() => this.providerActive(item.value)}>
                      <span className="ico-casino_new">{item.label}</span>
                    </div>
                  )):null
                }
                </div>
              </div>
            </div>
          </div>
          <div className='casino-content'>
            <div className="casino-content__search-wrap">
              <Search size={12} className='casino-content__search-icon'/>
              <input placeholder="Search" type="text" className="casino-content__search"/>
            </div>
            <div className='casino-games'>
              <div className='casino-games__wrap'>
                <div className="casino-games__nav">
                  <h2 className="casino-games__title">{this.state.providerActiveLabel}</h2>
                </div>
                <div className='casino-games__list'>
                  {indata.length > 0 ? indata.map((item,i) => (
                    <CasinoItem key={i} data={item} me={this.props} />
                  )) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.auth.login,
  dataList: state.porkerlist,
  types : state.porkerlist.types,
  settype : state.porkerlist.settype,
  provider : state.porkerlist.providerData,
  setprovider : state.porkerlist.setprovider,
  casinoSlider_images : state.auth.login.poker_images,
})

const mapDispatchToProps = {
  setloginpage, porkergames_images, providerchange, gametypechange, filterData, playsaccount, data_load
}

export default connect(mapStateToProps, mapDispatchToProps)(Casino)