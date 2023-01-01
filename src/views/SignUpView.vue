<template>
    <h1>Signup</h1>
    <main>
        <div class="button">
                <button @click="verifyEmail" class="submit" v-if="loggedIn"> Verify Email </button>
            </div>
        <form @submit.prevent="handleSubmit">
            <label>Name :</label>
            <input v-model="name" required>

            <label>Username :</label>
            <input v-model="username" required>

            <label>Email :</label>
            <input v-model="email" type="email"  required>

            <label>Password :</label>  
            <input v-model="password" type="password"  required>
            
            <label>Retype Password :</label>  
            <input v-model="passwordConfirm" type="password"  required>
            
            <br>

            <div class="button">
                <button class="submit" type="submit">Sign up</button>
            </div>
            
        </form>
    </main>
</template>
<script setup lang="ts">

    import { validateForm } from '@/utils/formValidation'
    import type { FormData } from '@/utils/types'
	import { useStore } from 'vuex'
    import { computed } from 'vue'
    import { SignupModuleAction } from '@/store/modules/signup/types'
    import { verifyUserEmail } from '@/api/verifyEmail'

    let store = useStore()

    let loggedIn = computed(() => store.getters.loggedIn)

    let name = "", email = "", username = "",
    password = "", passwordConfirm = "", emailVisibility = true


    let postData = (formData: FormData) => {
        store.dispatch(SignupModuleAction.SetSignupData, formData)
        console.log('after submission', loggedIn.value)
    }

    let handleSubmit = (e: Event) => {
        e.preventDefault();

        let formData: FormData = {name, username, email, password, passwordConfirm, emailVisibility}

        if(validateForm(formData))
            postData(formData)

        console.log(loggedIn.value)

    }

    let verifyEmail = async () => {
        await verifyUserEmail(email)
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