import React from 'react'

function Inline() {

const inline={
    fontSize:"72px",
    color:'blue'
}

    return (
        <div>
            <h1 style={inline}>
             Hii Pooja
            </h1>
            <h2 className="error">Run out of memory</h2>
        </div>
    )
}

export default Inline
