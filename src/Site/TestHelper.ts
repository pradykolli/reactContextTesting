import { IcontextValue } from "./SiteContext";

export const mockValue:IcontextValue = {
    Cart:[],
    Electronics: ["Apple","Samsung","Sony"],
    Apparel: ["UA", "Nike", "Adidas"],
    Groceries: ["Avocado"],
    addToCart: jest.fn(),
    deleteFromCart: jest.fn()
}