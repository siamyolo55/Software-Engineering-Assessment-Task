<template>
    <main>
        <form @submit.prevent="handleSubmit">
            <label>Username :</label>
            <input v-model="username" required>

            <label>Email :</label>
            <input v-model="email" type="email"  required>

            <label>Password :</label>  
            <input v-model="password" type="password"  required>
            
            <label>Retype Password :</label>  
            <input v-model="retypePassword" type="password"  required>
            
            <br>

            <div class="button">
                <button class="submit" type="submit">Sign up</button>
            </div>
        </form>
    </main>
</template>
<script lang="ts">

    import * as EmailValidator from 'email-validator'

    export default {

        data() {
            return {
                username: "",
                email: "",
                password: "",
                retypePassword: "",
            }
        },

        methods: {
            handleSubmit(e: Event) {
                e.preventDefault();

                if(this.username === ""){
                    alert("Username can't be empty");
                    return;
                }

                if(!EmailValidator.validate(this.email)){
                    alert('Invalid Email');
                    return;
                }

                if(this.password === "" || this.password !== this.retypePassword){
                    alert("Passwords don't match");
                }

                

            }
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


    .pill {
        display: inline-block;
        margin: 20px 10px 0 0 ;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        background: #eee;
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

    .error {
        color: #ff0000;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>