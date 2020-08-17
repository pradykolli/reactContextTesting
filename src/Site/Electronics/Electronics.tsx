import React, { Fragment } from 'react'
import {useSiteContext} from '../SiteContext'

function Electronics() {
    const context = useSiteContext();
    const {state,dispatch} = context;
    const {Electronics} = state;
    return (
        <div style={{border:'1px solid #ccc', padding:'20px',flex:'1'}}>
            <h3 style={{textDecoration:'underline'}}>Electronics</h3>
            {Electronics?.map((item:string) => 
                <Fragment key={item}>
                    <p>{item}</p>
                    <button onClick={() => dispatch({type: "addElectronics",payload: item})}>Add To Cart</button>
                </Fragment>)}
        </div>
    )
}

export default Electronics
