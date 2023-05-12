<template>
 	 <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Sign Up</router-link> | -->
      <router-link to="/addRestaurants">Add Restaurant</router-link> |
      <router-link to="/logout">Log Out</router-link> |
    </nav>
</template>

<script>
export default {
	name: "HeaderView"
}
</script>

<style>
nav{
  width: 100%;
  background-color: rgb(87, 150, 233);
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
}

a{
  text-decoration: none;
  color: white;
}
</style>