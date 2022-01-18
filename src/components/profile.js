import React from 'react';
import { Link } from 'gatsby';

const profile = () => {
    return (
        <div className='dashboard-header'>
            <nav>
                <Link to="/dashboard/secret" 
                activeClassName="active">
                Secret Stuff
                </Link>
                <Link to="/dashboard/base" 
                activeClassName="active">
                See Your Base
                </Link>
            </nav>
            <span>show Login Status</span>
        </div>
    )
}

export default profile
