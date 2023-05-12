<template>
	<div>
		<headerView />
		<div class="container">
			<form @submit.prevent="submitAdd" class="div-input">
				<input type="text" v-model="name" placeholder="Please enter Name">
				<input type="text" v-model="address" placeholder="Please enter address">
				<input type="text" v-model="contact" placeholder="Please enter Contact">
				<button type="submit" :disabled="name && address && contact === ''">Add up</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import {reactive, toRefs} from "vue"
import { useRouter } from "vue-router"
import HeaderView from "./HeaderView.vue"

export default {
	name: "AddRestaurants",
	components: {
		HeaderView
	},

	setup(){
		const router = useRouter()

		const add = reactive({
			name: "",
			address: "",
			contact: ""
		})

		async function submitAdd(){
			const result = await axios.post("http://localhost:3000/restaurant", add)
			
			if(result.status == 201){
				alert("Added successfully")
				router.push("/")
			}
			console.log(result)

		}

		return{
			...toRefs(add),
			submitAdd 
		}


	}
}
</script>

<style>
.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 70vh;
	box-shadow: 3px 3px 3px 3px black;
	font-size: 24px;
	margin: 10vh auto;
	background-color: rgb(87, 150, 233);
	border-radius: 3px;
}

.div-input{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

input{
	margin: 2vh 0 2vh 0; 
	padding: 2vh 2vw 2vh 2vw;
}

input::placeholder{
	font-size: 16px;
}
button{
	margin-top: 2vh;
	padding: 1vh 2vw;
	text-decoration: none;
	background-color: rgb(239, 221, 243);
	cursor: pointer;
	border: none;
}
</style>