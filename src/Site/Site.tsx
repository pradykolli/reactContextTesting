import React, { useReducer } from 'react'
import Groceries from './Groceries/Groceries'
import Apparel from './Apparel/Apparel'
import Electronics from './Electronics/Electronics'
import SiteContext,{initialState} from './SiteContext'
import Cart from './Cart'
import { siteReducer } from './SiteReducer'

function Site() {
    const [state, dispatch] = useReducer(siteReducer, initialState);
    return (
        <SiteContext.Provider value={{state, dispatch}}>
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
