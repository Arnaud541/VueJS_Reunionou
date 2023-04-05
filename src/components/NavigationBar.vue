<script setup>
import {useRouter} from 'vue-router';
import {ref, onMounted} from "vue";

const router = useRouter();

const state = ref(false);
const userId = ref({})

function logout() {
    if (!confirm('Voulez-vous vraiment vous déconnecter ?')) return;

    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUserId');

    router.push('/connexion');
}

function navBarState() {
    if (!localStorage.getItem('currentUserId')){
        state.value = false;
    } else {
        console.log(localStorage.getItem('currentUserId'))
        state.value = true;
        userId.value = localStorage.getItem('currentUserId')
    }
}


onMounted(navBarState());

console.log(state.value);


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

                    <div class="buttons" v-if="!state">

                        <router-link to="/inscription" class="button is-primary">
                            <strong>Inscription</strong>
                        </router-link>

                        <router-link to="/connexion" class="button is-light">
                            Connexion
                        </router-link>

                    </div>
                    <div class="buttons" v-else>


                        <router-link :to="`/profil/${userId}`" class="button is-primary">
                            <strong>Profil</strong>
                        </router-link>


                        <button class="button is-danger" @click="logout">
                            <strong>Se déconnecter</strong>
                        </button>

                    </div>

                </div>
            </div>
        </div>

    </nav>
</template>

