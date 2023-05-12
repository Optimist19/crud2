<template>
	<div>
		<div>
			<HeaderView />
		</div>

		<div class="h-btn">
			<h2>Are you sure you want to logout on your account?</h2>
			<div>
				<button @click="logOut">Yes</button>
				<button @click="noLogOut">No</button>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import { useRouter } from 'vue-router'
	export default {
		name: "LogOut",
		components:{
			HeaderView
		},

		setup(){
			const router = useRouter()
			function logOut(){
				const localData = JSON.parse(localStorage.getItem("result"))
				console.log(localData, "the storage details in logout")
				localStorage.clear()
				router.push("/signup")
			}
			
			function noLogOut(){
				router.push("/")
			}


			return{
				logOut,
				noLogOut
			}
		}
	}
</script>

<style scoped>
.h-btn{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

button{
	margin-right: 1px;
	margin-left: 1px;
}
</style>