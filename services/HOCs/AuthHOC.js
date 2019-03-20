import React, {Component} from "react";
import {connect} from "react-redux";
import { BeatLoader } from 'react-spinners';
import Router from "next/router";
import { onSetLogin } from "../../state/actions/UserAction";

const AuthHOC = WrapComponent => {
  class AuthCheck extends Component {
    constructor(props) {
     
      super(props);
      this.state = {
        premisChecking: true,
        chkingMsg: "checking premission..."
      };
    }

    async componentDidMount() {
      await this.init();
    }

    init = async () => {

      this.setState({premisChecking: true, chkingMsg:'checking premission...'});

      //checking db
      let authLocal = localStorage.getItem('auth');
      let authObj = JSON.parse(authLocal);

      if(authObj === null){

        this.setState({ chkingMsg:'Please login.'});
          setTimeout(()=>{
              Router.replace('/login')
          },2000)
      }else{

        
        console.log('authObj',authObj);
        let resChk = await this.props.onSetLogin({code:authObj.employee_code})
  
        if(resChk === null){
          this.setState({chkingMsg:'Please login.'});
          setTimeout(()=>{
              Router.replace('/login')
          },2000)
        }else{
            this.setState({premisChecking: false, chkingMsg:''});
        }
  
       

      }

     
    };

    renderChecking = () => {
      //console.log('AuthHOC renderChecking')
      return (
        <div>
          <div className="col-12" style={{borderTop: `5px solid #00a65a`}}>
            <div
              style={{
                width: "500px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10%"
              }}
            >
              <div className="text-center" style={{textAlign:'center'}}>
                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                  <BeatLoader
                    sizeUnit={"px"}
                    size={32}
                    color={"#51e0bd"}
                    loading={true}
                  />
                </div>

                <div style={{paddingBottom: "20px", fontSize: "20px"}}>
                  {this.state.chkingMsg}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    render() {

      return this.state.premisChecking ? (
        this.renderChecking()
      ) : (
        <WrapComponent />
      );
    }
  }

  return connect(
    null,
    { onSetLogin }
  )(AuthCheck);
  //return AuthCheck
};

export default AuthHOC;
