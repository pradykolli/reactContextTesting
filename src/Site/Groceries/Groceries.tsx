import React, { Fragment } from 'react'
import { useSiteContext } from '../SiteContext'

function Groceries() {
    const context = useSiteContext();
    const {state,dispatch} = context;
    const {Groceries} = state;
    return (
        <div style={{border:'1px solid #ccc', padding:'20px',flex:'1'}}>
            <h3 style={{textDecoration:'underline'}}>Groceries</h3>
            {Groceries.map((item:string) => 
            <Fragment key={item}>
                    <p>{item}</p>
                    <button onClick={() => dispatch({type: "addGroceries",payload: item})}>Add To Cart</button>
                </Fragment>)}
        </div>
    )
}

export default Groceries
