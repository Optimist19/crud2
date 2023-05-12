<template>
	<div class="container">
		<div>Login</div>
		<div class="div-input">
			<input type="email" v-model="form.email" placeholder="Enter Email" />
			<input type="password" v-model="form.password" placeholder="Enter Password" />
			<button @click="login">Login</button>
		</div>
		<router-link to="/signup">
			Sign up
		</router-link>
	</div>
</template>

<script>
import {reactive} from "vue"
import { useRouter } from "vue-router"
import axios from "axios"

	export default {
		name: "LoginView",

		setup(){
			let router = useRouter()
			const form = reactive({
				email: "",
				password: ""
			})


			async function login(){
				let result = await axios.get(`http://localhost:3000/users?email=${form.email}&password=${form.password}`)
				alert("Logged in successfully")
				console.log(result)

				
				if(result.status == 200){
					localStorage.setItem("result", JSON.stringify(result.data))
					console.log(result.data, "result.data")
					router.push("/")
				}else{
					router.push("/signup")
				}
			}

			
			// function login(){
			// 	let result = JSON.parse(localStorage.getItem("resultFromPost"))
			// 	console.log(result,"resultfromlogin")
			// 	console.log(result.email,"resultfromlogin")

			// 	if(form.email == result.email){
			// 		if(form.pass == result.password){
			// 			router.push('/')
			// 		}else{
			// 			router.push('/signup')
			// 		}
			// 	}else{
			// 		router.push('/signup')
			// 	}

			// 	alert("Logged in successfully")
				
			// }

			return{
				form,
				login
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