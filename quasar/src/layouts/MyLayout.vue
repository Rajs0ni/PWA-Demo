<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          All&nbsp;({{ items.length}})
         
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
    >
          <q-list-header>Memo</q-list-header>
          <q-item @click.native="loadComponent('1')">
            <q-item-main label="All"  />
            <span class="float-right">({{ items.length }})</span>
          </q-item>
          <q-item @click.native="loadComponent('2')">
            <q-item-main label="My Memo"  />
            <span class="float-right">({{ items.length }})</span>
          </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
        <router-view />
        <q-btn
        round
        icon="add"
        color="primary"
        @click.native="addMemo()"
        class="fixed-bottom-right q-mr-md q-mb-md"
      ></q-btn>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed:{
     ...mapState('example', ['items']),
  },
  mounted(){
    this.$router.push('all');
  },
  methods: {
    loadComponent(num){
      if(num === '1')
          this.$router.push('all')
      else if(num === '2')
        this.$router.push('mymemo')
    },
    addMemo(){
      this.$router.push('form')
    }
  }
}
</script>

<style>
</style>
