import { IInitialState, IContextValue } from "./SiteTypes";

export const mockStateValue:IInitialState = {
    Cart:[],
    Electronics: ["Apple","Samsung","Sony"],
    Apparel: ["UA", "Nike", "Adidas"],
    Groceries: ["Avocado"]
}

export const mockContextValue:IContextValue = {
    state: mockStateValue,
    dispatch: jest.fn()
}