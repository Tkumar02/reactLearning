import React from 'react';

function Child ({child}) {
    console.log('child component is being re-rendered')
    return(
        <div>
            <h3>Child count is: {child}</h3>
            This is a child component           
        </div>
    )
}

export default React.memo(Child);