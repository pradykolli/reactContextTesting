import React, { Fragment } from 'react'
import { useSiteContext } from './SiteContext';

function Cart() {
    const context = useSiteContext();
    const {state,dispatch} = context;
    const {Cart} = state;
    return (
        <div style={{border:'1px solid #ccc', padding:'20px',flex:'2'}}>
            <h3 style={{textDecoration:'underline'}}>Cart</h3>
            {Cart?.map((item:string) => 
            <Fragment>
                <p key={item}>{item} <button onClick={()=> dispatch({type: "deleteFromCart",payload: item})}>X</button></p>
            </Fragment>)}
        </div>
    )
}

export default Cart
