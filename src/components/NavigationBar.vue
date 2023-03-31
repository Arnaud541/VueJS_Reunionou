<script setup>
import {useRouter} from 'vue-router';
import {reactive} from "vue";

const router = useRouter();

const state = reactive({
    navbarOpen: false
});

function logout() {
    // Code de déconnexion
    if (!confirm('Voulez-vous vraiment vous déconnecter ?')) return;
    router.push('/connexion');
}

function isAuthenticated() {
    // Code de connexion
    router.push('/');
}
</script>

<template>
    <nav class="navbar has-background-info-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item has-background-primary-dark">
                <figure class="navbar-item">
                    <img src="/public/assets/img/map.png" alt="Logo du site">
                </figure>
            </router-link>

            <div class="navbar-item mx-4 px-4">
                <div class="title has-text-white">
                    <div v-if="$route.path === '/'">Bienvenue</div>
                    <div v-if="$route.path === '/connexion'">Connectez-vous</div>
                    <div v-if="$route.path === '/inscription'">Rejoignez-nous</div>
                    <div v-if="$route.path === '/createEvent'">Nouvel évènement ?</div>
                    <div v-if="$route.path === '/invit'">Invitez vos amis !</div>
                    <div v-if="$route.path === '/event'">Évènement en cours !</div>
                    <div v-if="$route.path === '/profil'">Voici votre profil</div>
                    <div v-if="$route.path === '/participant-inscription'">Vous-êtes nouveau ?</div>
                </div>
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu"
               @click="state.navbarOpen=!state.navbarOpen">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">

                        <router-link to="/profil" class="button is-primary">
                            <strong>Profil</strong>
                        </router-link>
                        <router-link to="/inscription" class="button is-primary">
                            <strong>Inscription</strong>
                        </router-link>

                        <router-link to="/connexion" class="button is-light">
                            Connexion
                        </router-link>

                        <button class="button is-danger" v-if="isAuthenticated" @click="logout">
                            <strong>Se déconnecter</strong>
                        </button>

                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>
