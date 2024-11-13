import { useState } from 'react';

export const Dropdown = ( props ) => {

    return (

        <ul id="dropdown1" style={{display:"none"}} className="dropdown">
          { props.children }
        </ul>
    )

}
