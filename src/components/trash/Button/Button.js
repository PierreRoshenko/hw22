import classNames from 'classnames'
import{button, primary, secondary} from './Button.module.css'

export const Button = props =>{
    const {children, variant: variant} = props
    return <button className= {classNames(button, {
        [primary]: variant === 'primary',
        [secondary]: variant === 'secondary'
    })}>{children}</button>
}  