vue<template>
	<div class="container">
		<div>Sign Up</div>
		<div class="div-input">
			<input type="text" v-model="form.name" placeholder="Enter Name" />
			<input type="email" v-model="form.email" placeholder="Enter Email" />
			<input type="password" v-model="form.password" placeholder="Enter Password" />
			<button @click="signUp">Sign up</button>
		</div>
		<router-link to="/login">
			Login
		</router-link>
	</div>
</template>wss@gmail.com

<script>
import axios from "axios";
import {reactive} from "vue"
import {useRouter} from "vue-router"

	export default {
		name: "SignUp",

		setup(){

			const router = useRouter()
			const form = reactive({
				name: "",
				email: "",
				password: ""
			})

			async function signUp(){
				const result = await axios.post("http://localhost:3000/users", form)

				console.log(result,"the result of post")
				alert("Sign up was successful")

				if(result.status == 201){
					localStorage.setItem("resultFromPost", JSON.stringify(result.data))
					router.push("/login")
				}
			}

			return{
				form,
				signUp
			}
		}
	}
</script>

<style scoped>
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

a{
	color: rgb(167, 3, 3);
	margin-top: 2vh;
	font-size: 18px;
}
</style>