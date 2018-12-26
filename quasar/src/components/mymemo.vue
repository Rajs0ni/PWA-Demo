<template>
    <q-list highlight separator>
        <q-item v-if="items.length" v-for="item in items" :key="item.index">
            <q-item-main>
                <q-item-tile label>{{ item.text }}</q-item-tile>
                <q-item-tile sublabel>{{ item.body }}</q-item-tile>
                <q-item-tile sublabel>{{ item.created_at | ParseDate }}</q-item-tile>
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
  mounted(){
    this.getAllItems();
  },
  methods: {
    getAllItems(){
      this.$store.dispatch('example/SET_ALL_ITEMS')
    }
  },
  filters:{
    ParseDate(value){
        var date = new Date(value);
        var dd = date.getDate();
        var mm = date.getMonth();
        mm += 1;
        var yyyy = date.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    }
  }
}
</script>

<style>

</style>
