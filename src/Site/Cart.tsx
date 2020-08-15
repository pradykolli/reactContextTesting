import React, { Fragment } from 'react'
import { useSiteContext } from './SiteContext';

function Cart() {
    const context = useSiteContext();
    const {Cart, deleteFromCart} = context;
    return (
        <div style={{border:'1px solid #ccc', padding:'20px',flex:'2'}}>
            <h3 style={{textDecoration:'underline'}}>Cart</h3>
            {Cart?.map((item:string) => 
            <Fragment>
                <p key={item}>{item} <button onClick={()=> deleteFromCart(item)}>X</button></p>
            </Fragment>)}
        </div>
    )
}

export default Cart
