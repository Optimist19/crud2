<template>
  <div>
    <headerView />
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>address</th>
          <th>contact</th>
          <th colspan="2">Actions</th>
        </thead>
        <tbody>
          <tr v-for="list in restaurant" :key="list.id">
            <td>{{ list.id }}</td>
            <td>{{ list.name }}</td>
            <td>{{list.address}}</td>
            <td>{{list.contact}}</td>
            <td @click="del(list.id)" class="del-btn">Delete</td>
            <td>
              <router-link :to="{name: 'updateRestaurants', params:{id: list.id}}">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, reactive, toRefs } from 'vue';
import axios from "axios"
import HeaderView from "./HeaderView.vue"
export default {
  name: 'HomeView',
  components: {
    HeaderView
  },
  setup(){

    const router = useRouter()
    let state = reactive({
      restaurant: []
    })

    onMounted(async() =>{
      const list = await axios.get('http://localhost:3000/restaurant')
      state.restaurant = list.data

      console.log(state.restaurant)
      const localData = JSON.parse(localStorage.getItem("result"))
      if(localData === null){
        router.push("/signup")
      }
    })

    async function del(id){
      const remove = axios.delete("http://localhost:3000/restaurant/"+id)
      state.restaurant = state.restaurant.filter(a => a.id !== id)
      console.log(remove, 'removed work')
      console.log(state.restaurant, 'state.restaurant removed work')
    }


    return{
      ...toRefs(state),
      del
    }
  }


}
</script>

<style scoped>

.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

table, th, td {
  border: 1px solid black;
}


th, td {
  padding: 1vh 2vw;
}


tr:nth-child(even) {
  background-color: #D6EEEE;
}

.del-btn{
  color: red;
}


a{
  color: green
}
</style>
