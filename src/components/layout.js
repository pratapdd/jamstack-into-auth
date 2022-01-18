import React from 'react'
import {Link} from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const layout = ({children}) => {
    return (
        <IdentityContextProvider url="https://jamstack-intro-auto.netlify.com">
         <header>
            <Link to="/">JAMStack App</Link>
         </header>
         <main>{children}</main>
        </IdentityContextProvider>
    )
}

export default layout
