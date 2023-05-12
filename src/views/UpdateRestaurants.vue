<template>
  <div>
    <HeaderView />
	<div class="container">
		<form @submit.prevent="submitAdd" class="div-input">
			<input type="text" v-model="restaurant.name" placeholder="Please enter Name">
			<input type="text" v-model="restaurant.address" placeholder="Please enter address">
			<input type="text" v-model="restaurant.contact" placeholder="Please enter Contact">
			<button type="submit"> Update Restaurant</button>
		</form>
	</div>
    <!-- <router-link to="/signup"> Sign up </router-link> -->
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import HeaderView from "./HeaderView.vue"
import axios from "axios"
import { useRouter } from "vue-router";

export default{
	name: "UpdateRestaurants",
	components:{
		HeaderView
	},

	setup(){
		const router = useRouter()

		let state = reactive({
			restaurant: {
				name: "",
				address: "",
				contact: ""
	  		}
    	})

		const route = useRoute()
		onMounted(async()=>{

			const result = await axios.get('http://localhost:3000/restaurant/'+ route.params.id)

			state.restaurant = result.data
			console.log(result, "result from update")
			console.log(route.params.id)
		})

		async function submitAdd(){
			let updateResult = await axios.put("http://localhost:3000/restaurant/"+route.params.id,state.restaurant)

			console.log(updateResult.data)
			router.push('/')
		}

		return{
			...toRefs(state),
			submitAdd
		}
	}
}
</script>

<style scoped></style>
