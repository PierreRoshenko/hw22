import { Redirect, Route, Switch } from 'react-router'
import { Logo } from '../LockLogo/LockLogo'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SingUp'
import {form} from './style.module.css'

export const AuthorizationForm = ()=>{
    return(
        <div className={form}>
            <Logo/>
           
            <Switch>
               <Route exact path='/hw22'>
                   <Redirect to = "/signin"/>
               </Route>
               <Route path = '/signin' component={SignIn}/>
               <Route path = '/signup' component= {SignUp}/>
            </Switch>

            <p>Copyrigting ©Your Website 2021.</p>
        </div>
    )
}