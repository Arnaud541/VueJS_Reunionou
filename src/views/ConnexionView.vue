<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';
import UserService from '@/services/UserService';

const router = useRouter();
const errorMessage = ref('');

async function validationFormulaire() {


    if (checkEmail() && checkPassword()) {
         try {

            const currentUser = await UserService.loginUser(user);
            console.log(user);

        if (currentUser && currentUser.user?.id) {
                localStorage.setItem('currentUserId', JSON.stringify(currentUser.user?.id));
                router.push(`/profil/${currentUser.user?.id}`);
    } else {
        errorMessage.value = "Wrong email or password. Please try again.";
    }
    } catch (error) {
      console.error('Error creating the event:', error);
      errorMessage.value = "Wrong email or password. Please try again.";
    }
  }
}

let user = reactive({
    email: '',
    password: ''
})
let errors = {
    formulaire: ref(''),
    boolFormulaire: false
}

function checkEmail() {
    const regExp = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return (regExp.test(user.email) && user.email !== "")
}

function checkPassword() {
    const regExp = /^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/g;
    return (regExp.test(user.password) && user.password !== "")
}

</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">

            <h1 class="title is-2">Se connecter</h1>

            
            <div class="notification is-danger" v-if="errorMessage">
                    {{ errorMessage }}
                </div>

            <form class="box" @submit.prevent="validationFormulaire">
                <div class="field">
                    <label class="label">E-Mail</label>
                    <input class="input" v-model="user.email" type="email" placeholder="email@domaine.com" required>
                </div>

                <div class="field">
                    <label class="label">Mot de passe</label>
                    <input class="input" v-model="user.password" type="password" required>
                </div>

                <div class="help is-danger" v-if="!errors.boolFormulaire">{{ errors.formulaire.value }}</div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary">Se connecter</button>
                    </div>
                    <div class="control">
                        <router-link to="/" class="button">Annuler</router-link>
                    </div>
                </div>

            </form>
            <router-link to="/inscription">Créer un compte</router-link>
        </div>
    </div>

</template>

