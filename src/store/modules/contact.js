export default {
    namespaced: true,

    state: {
        contactName: "puresol",
        contactAddress: "Kanada",
        propertyList: []
    },
    mutations: {
        setItems(state, name) {
            state.contactName = name
        }
    },
    getters: {
        _contactName: (state) => state.contactName,
        _contactAddress: (state) => state.contactAddress
    }
}