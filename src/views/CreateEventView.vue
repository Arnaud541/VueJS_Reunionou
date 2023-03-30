<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let event = reactive({
    title: '',
    desc: '',
    street: '',
    city: '',
    zipcode: ''
})
let errors = {
    title: ref(''),
    desc: ref(''),
    street: ref(''),
    city: ref(''),
    zipcode: ref('')
}

function checkTitle() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
    if (!regExp.test(event.title) && event.title !== "") {
        errors.title.value = "Le titre est invalide.";
        return false;
    } else {
        errors.title.value = "";
        return true;
    }
}

function checkDesc() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
    if (!regExp.test(event.desc) && event.desc !== "") {
        errors.desc.value = "Le description est invalide.";
        return false;
    } else {
        errors.desc.value = "";
        return true;
    }
}

function checkStreet() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s,'-]*$/;
    if (!regExp.test(event.street) && event.street !== "") {
        errors.street.value = "L'adresse est invalide.";
        return false;
    } else {
        errors.street.value = "";
        return true;
    }
}

function checkCity() {
    const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[\s-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if (!regExp.test(event.city) && event.city !== "") {
        errors.city.value = "La ville est invalide.";
        return false;
    } else {
        errors.city.value = "";
        return true;
    }
}

function checkZipcode() {
    const regExp = /^([A-Z]+[A-Z]?-)?[0-9]{1,2} ?[0-9]{3}$/;
    if (!regExp.test(event.zipcode) && event.zipcode !== "") {
        errors.zipcode.value = "Le code postal est invalide.";
        return false;
    } else {
        errors.zipcode.value = "";
        return true;
    }
}

function validationFormulaire() {
    if (checkTitle() && checkDesc() && checkStreet() && checkCity() && checkZipcode()) {
        router.push('/invit');
    }
}
</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title is-2">Créer un évènement</h1>

            <form class="box" @submit.prevent="validationFormulaire">

                <div class="field" :class="{ 'has-error': !checkTitle() }">
                    <div class="field">
                        <label class="label">Titre</label>
                        <input class="input" type="text" v-model="event.title" required>
                    </div>
                    <p class="help is-danger" v-if="!checkTitle()">Le titre est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkDesc() }">
                    <div class="field">
                        <label class="label">Description</label>
                        <input class="input" type="text" v-model="event.desc" required>
                    </div>
                    <p class="help is-danger" v-if="!checkDesc()">La description est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkStreet() }">
                    <div class="field">
                        <label class="label">Adresse</label>
                        <input class="input" type="text" v-model="event.street" required>
                    </div>
                    <p class="help is-danger" v-if="!checkStreet()">L'adresse est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkCity() }">
                    <div class="field">
                        <label class="label">Ville</label>
                        <input class="input" type="text" v-model="event.city" required>
                    </div>
                    <p class="help is-danger" v-if="!checkCity()">La ville est invalide.</p>
                </div>

                <div class="field" :class="{ 'has-error': !checkZipcode() }">
                    <div class="field">
                        <label class="label">Code Postal</label>
                        <input class="input" type="text" v-model="event.zipcode" required>
                    </div>
                    <p class="help is-danger" v-if="!checkZipcode()">Le code postal est invalide.</p>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Créer</button>
                    </div>
                </div>

            </form>
            <router-link to="/">Annuler</router-link>
        </div>
    </div>
</template>