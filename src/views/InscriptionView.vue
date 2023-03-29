<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let user = reactive({
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  confirmPassword: ''
})

function checkPassword() {
  return ((user.password === user.confirmPassword) && (user.password !== '') && (user.confirmPassword !== ''))
}

function validationFormulaire() {
  console.log("Validation inscription");

  if (!checkPassword()) {
    alert("Le mot de passe et sa confirmation ne sont pas identiques.");
    return;
  }

  router.push('/connexion');
}
</script>

<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">

      <h1 class="title">S'inscrire</h1>

      <form class="box" @submit.prevent="validationFormulaire">

        <div class="field">
          <label class="label">Nom</label>
          <input class="input" v-model="user.lastname" type="text" placeholder="Dupont">
        </div>

        <div class="field">
          <label class="label">Prénom</label>
          <input class="input" v-model="user.firstname" type="text" placeholder="Michel">
        </div>

        <div class="field">
          <label class="label">E-Mail</label>
          <input class="input" v-model="user.email" type="email" placeholder="email@domaine.com">
        </div>

        <div class="field">
          <label class="label">Mot de passe</label>
          <input class="input" v-model="user.password" type="password">
        </div>

        <div class="field">
          <label class="label">Confirmer mot de passe</label>
          <input class="input" v-model="user.confirmPassword" type="password">
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
