

import React, { useState }  from "react";

function ExampleOne() {

    // Use State
    //Update Our component 

    const [count,Setcount] = useState(0);

    return (
        <div>
            <p>This is Functional Component {count}</p>

            <button onClick={() => Setcount( c => c+1 )}>
                Click
            </button>
        </div>
    )

}

export default ExampleOne;