import { Component } from "react";
import { Link } from "react-router-dom";
import {form, title, signup, email, password, input_row, checkbox, link} from './style.module.css'
import {Checkbox} from '@material-ui/core'

class SingUp extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            lastName:'',
            email:'',
            password:''
        }
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
            <div className={signup}>
                <a className={title}>Sign Up</a>
                <form  className={form} onSubmit ={this.handleSubmit}>
                    <div className={input_row}>
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <input type="email" placeholder="E-mail" className = {email}  onChange={this.handleChangeEmail} value={this.state.email}/>
                    <input type="password" placeholder="Password" className = {password} onChange={this.handleChangePassword} value={this.state.password}/>
                    <div className={checkbox}>
                    <Checkbox style={{color:'#fff'}}/><a>I want to receive inspiration, marketing promotion and updates via email.</a>
                    </div> 
                    <button>Sign Up</button>
                    <div className = {link}>
                        <Link to = '/signin'>Already have an account? Sign in</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingUp