<template lang="">
    <main>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">

            <label>Email :</label>
            <input v-model="email" type="email"  required>

            <label>Password :</label>  
            <input v-model="password" type="password"  required>

            <br>

            <div class="button">
                <button class="submit" type="submit">Login</button>
            </div>
            
        </form>
        <h3 id="error"></h3>
        <br>

        <h3>New here?</h3>
        <div class="button">
            <router-link to="/sign-up"> Sign Up </router-link>
        </div>

    </main>
</template>
<script setup lang="ts">

    import router from '@/router';
    import { EModuleAction, type ILoginForm } from '@/store/modules/login/types'
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    let store = useStore()

    let email = "", password = "",
    error = false

    let handleLogin = async (e: Event) => {
        e.preventDefault()

        let loginForm: ILoginForm = {identity: email, password}
        console.log(loginForm)
        store.dispatch(EModuleAction.UserLogin, loginForm)

        await new Promise(r => setTimeout(r, 3000))

        let loginError = computed(() => store.getters.loginError)
        
        if(loginError.value)
            document.getElementById('error')!.innerText = 'Wrong Email or Password'
        else{
            document.getElementById('error')!.innerText = ''
            router.push('/home')
        }

    }



</script>
<style scoped lang="css">

    main {
		margin: auto;
	}

    form {
        /* max-width: 1000px; */
        margin: 30px auto;
        background: rgb(248, 248, 248);
        text-align: left;
        padding: 20px;
        border-radius: 10px;
    }

    label {
        color: rgb(0, 0, 0);
        display:inline-block;
        margin: 25px 0 15px;
        text-transform: uppercase;
    }

    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: bordre-box;
        border: none;
        border-bottom: 1px solid rgb(0, 0, 0);
        color: rgb(0, 0, 0);
    }


	button {
		text-align: center;
		padding: 10px 0px;
		width: 10rem;
		border-radius: 20px;
		background-color: var(--vt-c-primary);
		cursor: pointer;
	}

    .submit {
        text-align: center;
    }
    
</style>