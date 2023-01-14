import { AXIOS_REQUEST } from "../auth/index";
import {toast} from "react-toastify"
import {PORKERLIST_PROVIDER,PORKERLIST_TYPES,PORKERLIST_GET_ALL_DATA, PORKERLIST_GET_DATA,PORKERLIST_FILTER_DATA,PORKERLIST_TYPE,PORKERLIST_SETPROVIDER} from '../../types'

export const data_load = (bool)=>{
    return async (dispatch)=>{
        var rdata = await AXIOS_REQUEST("firstpage/LivecasinoproviderLoad",{bool :bool});
        if(rdata.status){

            var pdata = rdata.data.pdata;
            var tdata = rdata.data.tdata;
            var gamelist = rdata.data.list;
            var pros = [];
            var types = [{label : "ALL",value : "All"}];
            dispatch({ type:PORKERLIST_GET_ALL_DATA, data: gamelist});
            
            if(pros){
                for(var i = 0 ; i < pdata.length ; i++){
                    pros.push({label : pdata[i].provider.toLocaleUpperCase(),value : pdata[i].provider});
                }
                dispatch({
                    type :PORKERLIST_PROVIDER,
                    data : pros,
                    moredata : pdata
                })
            }
            if(tdata){
                for(var j = 0 ; j < tdata.length ; j++){
                    types.push({label : tdata[j],value : tdata[j]});
                }
                dispatch({
                    type :PORKERLIST_TYPES,
                    data : types
                })
            }
        }else{
            // toast.error("")
        }
    }
}

export const providerchange = (value,bool)=>{
    return async(dispatch,getState) =>{
        
        var returndata = await AXIOS_REQUEST("firstpage/LivecasinoProviderChange",{data : value,bool : bool});
        if(returndata.status){
            dispatch({
                type : PORKERLIST_SETPROVIDER,setprovider : value
            });
            var gamelist = returndata.data;
            dispatch({ type: PORKERLIST_GET_ALL_DATA, data: gamelist});
        }else{
            toast.error("server error");
        }
    }
}

export const gametypechange = (value)=>{
    return async(dispatch,getState)=>{        
        dispatch({
            type : PORKERLIST_TYPE,data : {label : value ,value:value}
        });
        var allData  = getState().porkerlist.allData;
        var filteredData = Filter(value,allData)        
        dispatch({
            type : PORKERLIST_GET_DATA,
            data : filteredData
        })
    }
}

export const filterData = value => {
  return dispatch => dispatch({ type: PORKERLIST_FILTER_DATA, value })
}

function Filter(value,data){
    var filteredData = []
	if(value === "All"){
		filteredData = data;
			return filteredData
	}else{
		filteredData = data
			.filter(item => {
			  let startsWithCondition =  !item.TYPE ? null : item.TYPE.toLowerCase().startsWith(value.toLowerCase())
			  let includesCondition = !item.TYPE ? null :  item.TYPE.toLowerCase().startsWith(value.toLowerCase())
			if (startsWithCondition) {
				return startsWithCondition
			  } else if (!startsWithCondition && includesCondition) {
				return includesCondition
			  } else return null
			});
			return filteredData
	}
}