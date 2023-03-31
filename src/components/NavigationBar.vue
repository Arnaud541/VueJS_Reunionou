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
            <router-link to="/" class="navbar-item">
                <img src="/public/assets/img/map.png" alt="70">
            </router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu"
               @click="state.navbarOpen=!state.navbarOpen">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu " :class="{'is-active':state.navbarOpen}">
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
