<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

function logOut() {
  if (!confirm('Voulez-vous vraiment vous déconnecter ?')) return;
  router.push('/connexion');
}
</script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="/public/assets/img/map.png" height="30">
      </router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/inscription" class="button is-primary">
            <strong>Inscription</strong>
          </router-link>
          <router-link to="/connexion" class="button is-light">
            Connexion
          </router-link>
          <button @click="logOut" class="button is-danger">
            <strong>Se déconnecter</strong>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
