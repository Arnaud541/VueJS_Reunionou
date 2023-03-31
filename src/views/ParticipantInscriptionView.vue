<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let user = reactive({
    lastname: '',
    firstname: '',
    email: '',
})

let errors = {
    lastname: ref(''),
    firstname: ref(''),
    email: ref(''),
}

function checkLastname() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if (!regExp.test(user.lastname) && user.lastname !== "") {
        errors.lastname.value = "Le nom est invalide.";
        return false;
    } else {
        errors.lastname.value = "";
        return true;
    }
}

function checkFirstname() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if (!regExp.test(user.firstname) && user.firstname !== "") {
        errors.firstname.value = "Le prénom est invalide.";
        return false;
    } else {
        errors.firstname.value = "";
        return true;
    }
}

function checkEmail() {
    const regExp = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!regExp.test(user.email) && user.email !== "") {
        errors.email.value = "L'adresse e-mail est invalide.";
        return false;
    } else {
        errors.email.value = "";
        return true;
    }
}

function validationFormulaire() {
    if (checkLastname() && checkFirstname() && checkEmail()) {
        router.push('/event');
    }
}
</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">

            <h1 class="title is-2">Rejoignez l'évènement</h1>

            <form class="box" @submit.prevent="validationFormulaire">

                <div class="field" :class="{ 'has-error': !checkLastname() }">
                    <label class="label">Nom*</label>
                    <input class="input" v-model="user.lastname" type="text" placeholder="Dupont" required>
                    <p class="help is-danger" v-if="!checkLastname()">Le nom est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkFirstname() }">
                    <label class="label">Prénom*</label>
                    <input class="input" v-model="user.firstname" type="text" placeholder="Michel" required>
                    <p class="help is-danger" v-if="!checkFirstname()">Le prénom est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkEmail() }">
                    <label class="label">E-Mail*</label>
                    <input class="input" v-model="user.email" type="email" placeholder="email@domaine.com" required>
                    <p class="help is-danger" v-if="!checkEmail()">L'email est invalide.</p>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary">Valider inscription</button>
                    </div>

                    <div class="control">
                        <router-link to="/" class="button">Annuler</router-link>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
</template>