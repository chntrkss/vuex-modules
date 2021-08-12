<template>
    <p>{{ $store.state.mainName }}</p>
    <p>{{ $store.state.musteri.contactName }}</p>
    <pre>{{ musteriADI }}</pre>
    <p>{{ personNameGetters }}</p>
    <p>{{ taskmanager.personName }} - deneme</p>
    <p>{{ $store.state.taskmanager.itemList }}</p>
    <button @click="setItemContact('fenerbahçe')">Contact Name Değiştir</button>
    <button @click="addItem('beşiktaş')">Item Name Değiştir</button>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from "vuex"

    export default {
        name: "App",
        created() {
            console.log(this.$store.getters["musteri/_contactName"])
            console.log(this.$store.state["musteri"].contactName)
            console.log(this.$store.state["taskmanager"].personName)
            console.log(this.$store.state.mainName)
            console.log(this.$store.state.musteri.contactAddress)
            console.log(this.$store.getters)
            console.log(this.$store._mutations)
            console.log(this.$store._actions)
        },
        computed: {
            ...mapGetters({
                musteriADI: "musteri/_contactName",
                personNameGetters: "taskmanager/_personName"
            }),
            ...mapState({
                taskmanager: "taskmanager"
            })
        },
        methods: {
            ...mapMutations({
                setItemContact: "musteri/setItems"
            }),
            addItem(team) {
                this.$store._mutations["taskmanager/setItem"][0](team)
            }
        }
    }
</script>
<style lang=""></style>
