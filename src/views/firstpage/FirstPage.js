import React from "react"
import { connect } from "react-redux";
import * as FpMngAction from "../../redux/actions/auth/loginActions"
import { Root } from "../../authServices/rootconfig";
import { FirstPageHeader } from "./FirstPageHeader";
import { FirstPageContent } from "./FirstPageContent";
  
class FirstPage extends React.Component {

	play = (item) =>{
      if(!this.props.user.values){
        this.props.setloginpage({login : true, register : false});
      }else{
        this.props.playsaccount(this.props.user.values,item.gamedata,true);
      }
	}


	render() {
		return (
			<div className='first-page'>
				<FirstPageHeader/>
				<FirstPageContent/>
			</div>
			
		)
	}
}

const load_fp_data = (state) => {
	return {
		fp_images : state.auth.login.fpImage,
		fp_text : state.auth.login.fpText,
		casinoitems : state.auth.login.casinoitems,
		livecasinoitems : state.auth.login.livecasinoitems,
		user : state.auth.login,
		newstext : state.auth.login.newstext,
	}
}

export default connect(load_fp_data, FpMngAction)(FirstPage)