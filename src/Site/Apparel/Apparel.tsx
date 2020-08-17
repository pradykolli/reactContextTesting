import React, { Fragment } from 'react'
import { useSiteContext } from '../SiteContext';

function Apparel() {
    const context = useSiteContext();
    const {state,dispatch} = context;
    const {Apparel} = state;
    return (
        <div style={{border:'1px solid #ccc', padding:'20px',flex:'1'}}>
            <h3 style={{textDecoration:'underline'}}>Apparel</h3>
            {Apparel.map((item:string) => 
                <Fragment key={item}>
                    <p>{item}</p>
                    <button onClick={() => dispatch({type: "addApparel",payload: item})}>Add To Cart</button>
                </Fragment>
            )}
        </div>
    )
}

export default Apparel
