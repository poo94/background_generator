import React from 'react'

function Header(props) {

    let classname=props.primary?'primary':'secondary'
    
    return (
        <div>
            <h1 className={classname}>Hello from Pooja </h1>
        </div>
    )
}

export default Header
