import {logo, img} from './logo.module.css'
import lg from './padlock.png'

export const Logo = ()=>{
    return(
        <div className={logo}>
           <img src={lg} alt=""/>
        </div>
    )
}