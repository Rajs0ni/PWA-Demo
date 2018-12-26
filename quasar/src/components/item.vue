<template>
    <div>
        <q-card>
            <q-card-title>
                {{ item.text}}
                <q-btn-dropdown class="float-right" >
                        <!-- dropdown content -->
                        <q-list link>
                            <q-item>
                                <q-item-main>
                                    <q-item-tile @click.native="deleteMemo(item)" label>Delete</q-item-tile>
                                </q-item-main>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
            </q-card-title>
                    
            <q-card-main>
                {{ item.body }}
            </q-card-main>
        </q-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState('example',['item'])
    },
    methods:{
        deleteMemo(item){
            this.$store.dispatch('example/RESET_ITEM',item.id)
        }
    }
}
</script>

<style>

</style>
