import { Root} from "../../../authServices/rootconfig"
import {AXIOS_REQUEST,setSession,fake_session,} from "./index"
import io from 'socket.io-client'
import {toast} from "react-toastify"
import {history} from "../../../history"

export const session_checked =  (decoded)=>{
  return async(dispatch) =>{

    dispatch({
      type : "LOGIN_WITH_JWT",
      payload : decoded
    })

    Root.socket = io(Root.admindomain,{query : decoded});
    Root.socket.on("destory",(dd)=>{
      fake_session();
      window.location.assign("/");
    });
    Root.socket.on("expiredestory",(data)=>{
      if(data.data.email === decoded.email){
        window.location.reload();
      }
    });

    Root.socket.on("userexpiredestory",(data)=>{
      if(data.data.email === decoded.email){
        fake_session()
        window.location.reload();
      }
    });


    Root.socket.on("balance",(barray)=>{
      var bdata = barray.data.find(obj => obj.email === decoded.email);
      dispatch({
        type : "GETBALANCE",
        data : bdata
        })
    });
    
    Root.socket.on("gamedestory",()=>{
      window.location.assign("/");
    });

    Root.socket.on("player_ezugi",(rdata=>{
      console.log(rdata);
    }))

    var response = await AXIOS_REQUEST("users/get_userinfor",{user : decoded.email});
    if(response.status){
      dispatch({
        type : "PROFILE_USER",
        data : response.data
      })
    }else{
      fake_session();
      window.location.assign("/");
    }
  }
}

export const loginWithJWT = user => {
  return async(dispatch) => {
    var rdata = await AXIOS_REQUEST("users/login",{email: user.email,password: user.password})
      if(rdata.status){
        var decoded = rdata.data;
        if(!decoded.email || !decoded.token){
          fake_session();
          window.location.reload();
          return;
        }
        setSession(rdata.token);
        window.location.reload();
      }else{
        toast.error(rdata.data);
      }
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    fake_session();
    window.location.reload();
  }
}

export const setloginpage = (data)=>{
  return dispatch=>{
    dispatch({
      type : "SETLOGINPAGE",
      payload : data
    })
  }
}

export const load_fp_data = () => {
  return async(dispatch) => {
   var rdata =await AXIOS_REQUEST("firstpage/load_data", {})
      if (rdata.status === true) {
        return dispatch({
          type:"FPDATA",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const footer_dataLoad = () => {
  return async(dispatch) => {
   var rdata =await AXIOS_REQUEST("firstpage/footer_dataload", {});
      if (rdata.status === true) {
        return dispatch({
          type:"FOOTERDATA",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const livecasino_images = () => {
  return async(dispatch) => {
    var rdata =await AXIOS_REQUEST("firstpage/Liveslider_load", {})
      if (rdata.status === true) {
        return dispatch({
          type:"LIVECASINOSLIDERIMGS",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const casino_images = () => {
  return async(dispatch) => {
    var rdata =  await AXIOS_REQUEST("firstpage/casinoslider_load", {})
      if (rdata.status === true) {
        return dispatch({
          type:"CASINOSLIDERIMGS",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const virtualgames_images = () => {
  return async(dispatch) => {
    var rdata =  await AXIOS_REQUEST("firstpage/virtualslider_load", {})
      if (rdata.status === true) {
        return dispatch({
          type:"VIRTUALSLIDERIMGS",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const porkergames_images = () => {
  return async(dispatch) => {
    var rdata =  await AXIOS_REQUEST("firstpage/pokerslider_load", {})
      if (rdata.status === true) {
        return dispatch({
          type:"POKERSLIDERIMGS",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const menuload=()=>{
  return async(dispatch)=>{
    var rdata = await AXIOS_REQUEST("firstpage/menuload", {})
      if (rdata.status === true) {
        return dispatch({
          type:"HORIZONTALMENU",
          data:rdata.data
        })
      }else{
        toast.error("fail")
      }
  }
}

export const playsaccount = (userdata,gamedata) =>{
  return async(dispatch) =>{
    console.log(gamedata,Root.homepagedomain+history.location.pathname);
    var rdata = await AXIOS_REQUEST("players/gameaccount",{user : userdata,game : gamedata,homeurl  :Root.homepagedomain,url : history.location.pathname});
    if(rdata.status){
      var token = rdata.data.token;
      var url = rdata.data.url;

      if(window.innerWidth <= 768 || gamedata.PROVIDERID === "awc"){
        window.location.assign(url)
      
        // window.location.href(url)
        // var a = window.document.createElement("a");
        // a.target = '_blank';
        // a.href = url;
        // a.id = "gamerun";
        // var e = window.document.createEvent("MouseEvents");
        // e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null); 
        // a.dispatchEvent(e);
      }else{
      
        dispatch({
          type : "GAME_PLAYER",
          gamedata : gamedata,
          gameurl : url,
          Ratio : 16/11,
          state : true,
          token : token,
          mode : "real"
        })
      }
      // if(window.innerWidth <= 767 && gamedata.PROVIDERID === "VIVO"){
      //   // alert(window.innerWidth);
      //  var child =   window.open(url,"_bank");
      //  var timer = setInterval(checkChild, 100);

      //  function checkChild(){
      //      if (child.closed) {
      //       Root.socket.emit("gamedelete",{data : token});
      //         clearInterval(timer);
      //      }
      //  }
      // }else{
         
      //   dispatch({
      //     type : "GAME_PLAYER",
      //     gamedata : gamedata,
      //     gameurl : url,
      //     Ratio : 16/11,
      //     state : true,
      //     token : token,
      //     mode : "real"
      //   })
      // }
    }else{
      toast.error(rdata.data);
    }
  }
}

export const playsaccountguest = (gamedata) =>{
  return async dispatch =>{
    var rdata = await AXIOS_REQUEST("players/guestgameaccount",{game : gamedata,url : history.location.pathname});
    if(rdata.status){
      var url = rdata.data;
     
        // dispatch({
        //   type : "GAME_PLAYER",
        //   gamedata : gamedata,
        //   gameurl : url,
        //   Ratio : 16/11,
        //   state : true,
        // })
      if(window.innerWidth <= 767){
        window.location.assign(url)
      }else{
         dispatch({
          type : "GAME_PLAYER",
          gamedata : gamedata,
          gameurl : url,
          Ratio : 16/11,
          state : true,
        })     
      }
    }else{
      toast.error(rdata.data);
    }
  }
}

export const registeraction = user =>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST('users/register',{user : user})
    if(rdata.status){
      toast.success("success");
      setSession(rdata.token);
      window.location.reload();
    }else{
      toast.error(rdata.data);
    }
  }
}

export const emailverify_receive = data =>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST('users/emailverify_receive',{data : data})
    if(rdata.status){
      toast.success("success");
      setSession(rdata.token);
      window.location.assign("/emailverify/:verify");
      // dispatch({type : "PROFILE_USER", data : rdata.detail});
    }else{
      toast.warn(rdata.data);
      window.location.assign("/")
    }
  }
}

export const forgotpassword_send = data =>{
  return async(dispatch)=>{
    console.log(data);
    var rdata = await AXIOS_REQUEST('users/forgotpassword_send',{email : data.email})
    if(rdata.status){
      toast.success("success");
      dispatch({
        type : "SETLOGINPAGE",
        payload : {forgot : false}
      })
    }else{
      toast.error("server error");
    }
  } 
}

export const forgotpassword_receive = data =>{
  return async dispatch=>{
    console.log(data);
    var rdata = await AXIOS_REQUEST('users/forgotpassword_receive',{data : data})
    if(rdata.status){
      toast.success("success");
      dispatch({
        type : "FORGOTPASSWORD",
        data : rdata.data
      })
      console.log(rdata);      
    }else{
      toast.error("server error");
      // window.location.assign("/")
    }
  } 
}

export const resend_email = data =>{
  return async dispatch =>{
    console.log(data)
    var rdata = await AXIOS_REQUEST("users/resend_email",{email : data});
    if(rdata.status){
      toast.success("success");
      history.push("/")
    }else{

    }
  }
}

export const forgotpassword_set = data =>{
  return async dispatch =>{
    var rdata = await AXIOS_REQUEST("users/forgotpassword_set",{data : data});
    if(rdata.status){
      toast.success("success");
      setSession(rdata.token);
      window.location.assign("/");
    }else{
      toast.error("server error")
    }
  }
}