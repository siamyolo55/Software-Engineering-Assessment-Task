<template lang="">
    <main>
        <form @submit.prevent="handleSubmit">

            <label>Email :</label>
            <input v-model="email" type="email"  required>

            <label>Password :</label>  
            <input v-model="password" type="password"  required>

            <div class="button">
                <button class="submit" type="submit">Login</button>
            </div>
            
        </form>
    </main>
</template>
<script setup lang="ts">



</script>
<style lang="">
    
</style>