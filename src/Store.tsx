import React, { createContext } from 'react'
import makeInspectable from 'mobx-devtools-mst'
import { User, IUser } from './models/User'

const store = User.create({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
})

const CTX: React.Context<IUser> = createContext(store)

const Store = ({children}): JSX.Element => {
    return(
        <CTX.Provider value={store}>
            {children}
        </CTX.Provider>
    )
}

makeInspectable(store)

export { Store, CTX }