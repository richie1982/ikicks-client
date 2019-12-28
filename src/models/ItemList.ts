import { types } from 'mobx-state-tree'
import { Item, IItem } from './Item'


const ItemList = types.model('ItemList', {
    items: types.array(Item)
})
.views(self => ({
    get total(): number {
        return self.items.reduce((sum: number, item: IItem) => {return sum + item.total}, 0)
    }
}))
.actions(self => ({
    addItem(item: IItem): void {
        self.items.push(item)
    },
    removeItem(item: IItem): void {
        self.items.splice(self.items.indexOf(item), 1)
    }
}))

export default ItemList
