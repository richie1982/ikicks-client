import { types, Instance } from 'mobx-state-tree'

export const Item = types.model('Item', {
    _id: types.identifier,
    name: types.string,
    category: types.string,
    price: types.number,
    stockQuantity: types.integer,
    cartQuantity: types.integer,
    sale: types.boolean,
    discount: types.number,
    dateCreated: types.Date
})
.views(self => ({
    get total(): number {
        return self.cartQuantity * self.price
    },
    get applyDiscount(): number {
        return self.price * self.discount
    },
}))
.actions(self => ({
    increaseQuantity(): void {
        self.cartQuantity = self.cartQuantity + 1
    },
    decreaseQuantity(): void {
        self.cartQuantity = self.cartQuantity - 1
    }
}))

export type IItem = Instance<typeof Item>