import * as React from "react"
//import Footer from '../pages/footer'
import { containerCard,
    headingCard,
    
       } from './card.css'


const Card = ({pageTitle, children}) => {
    return (
        <React.Fragment>
            <div className={containerCard}>
            
                <h1 className={headingCard}>
                    Ciao
                </h1>
                <p>Test</p>
                {children}
        </div>

        </React.Fragment>
        
      
        )
}



export default Card