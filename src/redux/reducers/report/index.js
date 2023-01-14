const initialState = {
    data: [],
    params: null,
    allData: [],
    totalPages: 0,
    filteredData: [],
    totalRecords: 0,
    sortIndex: []
  }
  
const getIndex = (arr, arr2, arr3, params = {}) => {
    if(params.page && params.perPage){
        var a = parseInt(params.perPage);
        var index = parseInt(params.page);
        let startIndex = a * (index-1);
        let endIndex = startIndex + arr2.length;
        startIndex === 0 ? startIndex = 1 : startIndex = startIndex;
        let finalArr = [startIndex,endIndex]
        return (arr3 = finalArr)
    }else{
        return (arr3 =[1,arr2.length])
    }
}
  
const ReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REPORT_GET_DATA":
            return {
            ...state,
            data: action.data,
            totalPages: action.totalPages,
            params: action.params,
            sortIndex: getIndex(
                state.allData,
                action.data,
                state.sortIndex,
                action.params
            )
        }
        case "REPORT_GET_ALL_DATA":
            return {
            ...state,
                allData: action.data,
                totalRecords: action.data.length,
                sortIndex: getIndex(action.data, state.data, state.sortIndex)
            }
        default:
            return state
    }
}
    
  export default ReportReducer
    