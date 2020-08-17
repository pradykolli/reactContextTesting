export interface IInitialState {
    Cart: string[],
    Electronics: string[],
    Apparel: string[],
    Groceries: string[]
}

export type ActionsType =
| { type: "addElectronics", payload: string }
| { type: "addGroceries", payload: string  }
| { type: "addApparel", payload: string  }
| { type: "deleteFromCart", payload: string  };

export type siteReducerType = (
state: IInitialState,
action: ActionsType
) => IInitialState;

export interface IContextValue{
    state: IInitialState,
    dispatch: React.Dispatch<ActionsType>
}