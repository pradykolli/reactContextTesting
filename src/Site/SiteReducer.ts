import { siteReducerType, IInitialState, ActionsType } from "./SiteTypes";

export const siteReducer: siteReducerType = (
    state: IInitialState,
    action: ActionsType
  ) => {
    switch (action.type) {
      case "addElectronics":
        return { ...state, Cart: [...state.Cart, action.payload]};
      case "addGroceries":
        return { ...state, Cart: [...state.Cart, action.payload]};
      case "addApparel":
        return { ...state, Cart: [...state.Cart, action.payload]};
      case "deleteFromCart":
          const newcart = state.Cart.filter((item:string) => item !== action.payload) 
        return { ...state, Cart: [...newcart]};
      default:
        return state;
    }
  };
