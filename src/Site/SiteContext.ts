import React, { useContext } from 'react';
import { IInitialState, IContextValue } from './SiteTypes';
export const useSiteContext = () => useContext(SiteContext);

export const initialState:IInitialState = {
    Cart: [],
    Electronics: ["Apple", "Samsung", "Bose"],
    Apparel: ["Balenciaga", "LV", "Bvlgari"],
    Groceries: ["Swiss cheese", "American Cheese", "Dragon Fruit", "Passion Fruit"]
}

const contextValue: IContextValue = {
    state: initialState,
    dispatch: () => {}
}
const SiteContext = React.createContext<IContextValue>(contextValue);

export default SiteContext;
