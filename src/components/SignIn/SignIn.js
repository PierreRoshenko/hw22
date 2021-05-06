import { Component } from "react";
import { Link } from "react-router-dom";
import {form, title, signIn, links, checkbox, email, password} from './style.module.css'
import {Checkbox} from '@material-ui/core'
class SignIn extends Component{
constructor(props){
    super(props)
    this.state ={
        email:'',
        password:''
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
}

    handleSubmit(event){
        event.preventDefault();
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value})
    }
    handleChangePassword(event){
        this.setState({password: event.target.value})
    }



    render(){
        return(
            <div className = {signIn}>
            <a className={title }>Sign in</a>
            <form className={form} onSubmit={this.handleSubmit}>
        
                <input type="email" placeholder="E-mail" className = {email}  onChange={this.handleChangeEmail} value={this.state.email}/>
                <input type="password" placeholder="Password" className = {password} onChange={this.handleChangePassword} value={this.state.password}/>
                
                <div className={checkbox}>
                    <Checkbox style={{color:'#fff'}}/><label htmlFor="Remember me"> <a>Remember me</a> </label>
                </div> 
                <button>Sign In</button>
            <div className = {links}>
                <a href="#">Forgot the password?</a>
                <Link to = '/signup'>Dont'have an account? Sign up</Link>
            </div>
            </form>
            </div>
        )
    }
}



export default SignIn;