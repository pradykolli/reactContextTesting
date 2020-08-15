import React, { useContext } from 'react';
export const useSiteContext = () => useContext(SiteContext);
export interface IcontextValue {
    Cart: string[],
    Electronics: string[],
    Apparel: string[],
    Groceries: string[],
    addToCart: (item:string) => void,
    deleteFromCart: (item:string) => void,
}
const defaultValue:IcontextValue = {
    Cart:[],
    Electronics: [],
    Apparel: [],
    Groceries: [],
    addToCart: (item:string) => {
        alert(item);
    },
    deleteFromCart: (item:string) => {
    }
}
const SiteContext = React.createContext<IcontextValue>(defaultValue);

export default SiteContext;
