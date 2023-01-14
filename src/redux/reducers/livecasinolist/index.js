import {LIVECASINO_PROVIDER,LIVECASINO_TYPES,LIVECASINO_GET_ALL_DATA, LIVECASINO_GET_DATA,LIVECASINO_FILTER_DATA,LIVECASINO_TYPE,LIVECASINO_SETPROVIDER} from '../../types'

const initialState = {
    data: [],
    allData: [],
    filteredData: [],
    providerData : [],
    types : [],
    settype : {label : "ALL",value : 'All'},
    setprovider : [],
    moredata : []
  }
  
  const DataListReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case LIVECASINO_GET_ALL_DATA:
        return {
          ...state,
          allData: action.data,
          data : action.data
        }
        case LIVECASINO_GET_DATA:
        return {
          ...state,
          data: action.data,
        }
      case LIVECASINO_FILTER_DATA:
        let value = action.value;
        let filteredData = []
        if (value.length) {
          filteredData = state.allData
            .filter(item => {
              let startsWithCondition =
                item.NAME.toLowerCase().startsWith(value.toLowerCase()) ||
                item.TYPE.toLowerCase().startsWith(value.toLowerCase()) 

              let includesCondition =
                item.NAME.toLowerCase().includes(value.toLowerCase()) ||
                item.TYPE.toLowerCase().startsWith(value.toLowerCase()) 
  
              if (startsWithCondition) {
                return startsWithCondition
              } else if (!startsWithCondition && includesCondition) {
                return includesCondition
              } else return null
            })
          return { ...state, filteredData }
        } else {
          filteredData = state.data
          return { ...state, filteredData }
        }

      case LIVECASINO_TYPES:
      return {...state,types : action.data }
      case LIVECASINO_TYPE:
      return {...state,settype : action.data }
      case LIVECASINO_SETPROVIDER :
        return {...state,setprovider : action.setprovider}
      case LIVECASINO_PROVIDER :
        return {...state,providerData : action.data,moredata : action.moredata,setprovider :[action.data[0]]}
      default:
        return state
    }
  }
  
  export default DataListReducer
  