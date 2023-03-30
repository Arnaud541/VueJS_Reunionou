<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let user = reactive({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
})

let errors = {
    lastname: ref(''),
    firstname: ref(''),
    email: ref(''),
    password: ref(''),
    confirmPassword: ref('')
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

function checkPassword() {
    const regExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*\d)[A-Za-z\d\W]{8,}$/;
    if (!regExp.test(user.password) && user.password !== "") {
        errors.password.value = "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.";
        return false;
    } else if (user.password !== user.confirmPassword) {
        errors.confirmPassword.value = "Les mots de passe ne correspondent pas.";
        return false;
    } else {
        errors.password.value = "";
        errors.confirmPassword.value = "";
        return true;
    }
}

function validationFormulaire() {
    if (checkLastname() && checkFirstname() && checkEmail() && checkPassword()) {
        router.push('/connexion');
    }
}
</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">

            <h1 class="title is-2">S'inscrire</h1>

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

                <div class="field" :class="{ 'has-error': !checkPassword() }">
                    <br>
                    <div class="is-size-6">
                        <p>Doit contenir :</p>
                        <ul>
                            <li> - 1 majuscule et 1 minuscule</li>
                            <li> - 1 chiffre et 1 caractère spécial</li>
                            <li> - 8 caractères minimum</li>
                        </ul>
                    </div>
                    <br>

                    <label class="label">Mot de passe*</label>
                    <input class="input" v-model="user.password" type="password" required>
                    <p class="help is-danger" v-if="!checkPassword()">Le mot de passe est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkPassword() }">
                    <label class="label">Confirmer mot de passe*</label>
                    <input class="input" v-model="user.confirmPassword" type="password" required>
                    <p class="help is-danger" v-if="!checkPassword()">Les mots de passe ne correspondent pas.</p>
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