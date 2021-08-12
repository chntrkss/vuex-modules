import { createStore } from "vuex"
import contact from "./modules/contact"
import taskmanager from "./modules/taskmanager"

export default createStore({
    state: {
        mainName: "kablosuzkedi"
    },
    modules: {
        musteri: contact,
        taskmanager
    }
})