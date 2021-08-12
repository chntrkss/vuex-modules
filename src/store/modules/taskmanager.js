export default {
    namespaced: true,

    state: {
        personName: "John Doe",
        itemList: ["ts"],
        userList: []
    },
    mutations: {
        setItem(state, item) {
            state.itemList.push(item)
        }
    },
    getters: {
        _itemList: (state) => state.itemList,
        _personName: (state) => state.personName
    }
}