<template>
   <q-list highlight separator>
        <q-item v-if="items.length" v-for="item in items" :key="item.index">
            <q-item-main @click.native="viewItem(item)">
                <q-item-tile label>{{ item.text }}</q-item-tile>
                <q-item-tile sublabel>{{ item.body }}</q-item-tile>
                <q-item-tile sublabel>{{ item.created_at | parseDate }}</q-item-tile>
            </q-item-main>
        </q-item>
    </q-list>
</template>

<script>
import { mapState } from 'vuex'

export default{
  computed:{
     ...mapState('example', ['items']),
  },
  created(){
    this.getAllItems();
  },
  methods: {
    getAllItems(){
      this.$store.dispatch('example/SET_ALL_ITEMS')
    },
    viewItem(item){
        this.$store.dispatch('example/SET_ITEM',item)
        this.$router.push('item')
    }
  }

}
</script>

<style>

</style>
