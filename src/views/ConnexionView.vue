<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let user = reactive({
  email: '',
  password: ''
})

function validationFormulaire() {
  console.log("Validation connexion");
  router.push('/');
}
</script>

<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">

      <h1 class="title">Se connecter</h1>

      <form class="box" @submit.prevent="validationFormulaire">

        <div class="field">
          <label class="label">E-Mail</label>
          <input class="input" v-model="user.email" type="email" placeholder="email@domaine.com">
        </div>

        <div class="field">
          <label class="label">Mot de passe</label>
          <input class="input" v-model="user.password" type="password">
        </div>

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

