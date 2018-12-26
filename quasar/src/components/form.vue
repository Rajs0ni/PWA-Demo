<template>
<div>
    <q-toolbar color="primary" inverted>
        <q-btn label="CANCEL" standard @click.native="cancelMemo()"></q-btn>
        <q-btn label="SAVE" standard class="q-ml-md" @click.native="saveMemo(item)"></q-btn>
    </q-toolbar>
    
    <q-field :count="10"  class="q-pa-md">
        <q-input v-model="item.text" float-label="Enter Title" />
            <q-input
              v-model="item.body"
              type="textarea"
              float-label="Add Memo"
              :max-height="100"
              rows="7"
            />
    </q-field>
</div>
</template>

<script>

export default {
    data(){
        return{
            item:{
                text:'',
                body:''
            }
        }
    },
 computed:{
   
 },
 methods:{
    /* todo: make a function of validation */
     cancelMemo(){
        if(!(this.item.text || this.item.body)) 
        {
        this.$notify({
            message:'No Content to Save.Memo Discarded',
            type:'negative',
        });
           this.$router.push('all')

        }
        else
        {
            if(confirm('Are you sure you want to cancel this memo?'))
                this.$router.push('all')
        }
    },
    saveMemo(item){
       if(!(this.item.text || this.item.body)){
        this.$notify({
            message:'No Content to Save.Memo Discarded',
            type:'negative',
        });
           this.$router.push('all') 
       }
       else{
           this.$store.dispatch('example/ADD_ITEM',item)
           this.$router.push('all')
       }
    }
}
}
</script>

<style>

</style>
