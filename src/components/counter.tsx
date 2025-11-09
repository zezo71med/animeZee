import React, { memo } from 'react';

const ViewCounter = ({counter}) => {
    console.log("   ViewCounter Rendered");
    
    return ( <div className="h3">{counter}</div> );
}
 
export default React.memo(ViewCounter);