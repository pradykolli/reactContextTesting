import React, { useState } from 'react'
import Groceries from './Groceries/Groceries'
import Apparel from './Apparel/Apparel'
import Electronics from './Electronics/Electronics'
import SiteContext,{IcontextValue} from './SiteContext'
import Cart from './Cart'

function Site() {
    const [cartState, setCartState] = useState<string[]>([]);
    const [eState] = useState<string[]>(["Apple", "Samsung", "Bose"]);
    const [gState] = useState<string[]>(["Swiss cheese", "American Cheese", "Dragon Fruit", "Passion Fruit"]);
    const [apparelState] = useState<string[]>(["Balenciaga", "LV", "Bvlgari"]);
    const contextValue:IcontextValue = {
        Cart:cartState,
        Electronics: eState,
        Apparel: apparelState,
        Groceries: gState,
        addToCart: (item:string) => {
            setCartState([...cartState, item]);
        },
        deleteFromCart: (item:string) => {
            const newCart = cartState.filter(cartItem => cartItem !== item);
            setCartState(newCart);
        }
    }
    return (
        <SiteContext.Provider value={contextValue}>
            <div>
                <h1>Site</h1>
                <div style={{display:'flex'}}>
                    <Cart />
                </div>
                <div style={{display:'flex'}}>
                    <Groceries />
                    <Apparel />
                    <Electronics />
                </div>
            </div>
        </SiteContext.Provider>
    )
}

export default Site
