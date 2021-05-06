import { Fragment } from "react"

export const VercelButton = props =>{
    const{children}=props
    return(
        <Fragment>
            <button className='VercelButton'>{children}</button>
            <style jsx>{`
            .VercelButton {
                padding: 16px;
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 2.5px;
                color: #fff;
                background-color: #ae2384;
                border: none;
                border-radius: 45px;
                box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease 0s;
                cursor: pointer;
                outline: none;
            }

            .VercelButton:hover {
                background-color: #a143ff;
                box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
                color: #fff;
                transform: translateY(-7px);
            }
            `}</style>
        </Fragment>
    )
}