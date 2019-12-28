import { types, Instance, applySnapshot } from 'mobx-state-tree'
import { Invoice, IInvoice } from './Invoice'
import ItemList from './ItemList'

export const User = types.model('User', {
    _id: types.string,
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    dateCreated: types.optional(types.Date, 0),
    invoices: types.array(Invoice),
    cart: types.optional(ItemList, {items: []},),
    wishList: types.optional(ItemList, {items: []},)
})
.actions(self => ({
    setUser(user): void {
        self._id = user._id,
        self.firstName = user.firstName,
        self.lastName = user.lastName,
        self.email = user.email,
        self.dateCreated = new Date(user.dateCreated)
    },
    removeUser(): void {
        const initialState = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        dateCreated: 0
        }
        applySnapshot(self, initialState)
    },
    addInvoice(invoice: IInvoice): void {
        self.invoices.push(invoice)
    }
}))
.views(self => ({
    get name(): string {
        return self.firstName + " " + self.lastName
    }
}))

export type IUser = Instance<typeof User>