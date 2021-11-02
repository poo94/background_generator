import React from 'react'

function Footer(props) {
    let classname=props.secondary?'secondary':'primary'
    return (
        <div className={classname}>
            Hello Footer @pooja
        </div>
    )
}

export default Footer
