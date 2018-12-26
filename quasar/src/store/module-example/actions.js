import { Axios } from 'plugins/axios'

export const actions = {
    async SET_ALL_ITEMS(context){
        var data
        await Axios({
            method:'get',
            url:'/items',
        })
             .then((response)=>(data = response.data))
             .catch(function(error){console.log(error)})
        context.commit('SET_ALL_ITEMS',data)
    },
    async SET_ITEM(context,payload){
         context.commit('SET_ITEM',payload)
    },
    async RESET_ITEM(context,payload){
        await Axios({
            method:'delete',
            url:'/items',
            data:payload,
            config: { headers: {'Access-Control-Allow-Origin': '*' }}
          })
            .then((response)=>(data = response.data))
            .catch(function(error){console.log(error)})
    },
    async ADD_ITEM(context,payload){
        await Axios({
            method:'post',
            url:'/items',
            data:payload
        })
        .then((response)=>(console.log(response.data)))
        .catch(function(error){console.log(error)})
    }
}

