import { types, Instance } from 'mobx-state-tree'
import { Item } from './Item'
import { User } from './User'

export const Invoice = types.model('Invoice', {
    _id: types.identifier,
    total: types.number,
    paid: types.boolean,
    user: types.string,
    items: types.array(Item)
})

export type IInvoice = Instance<typeof Invoice>