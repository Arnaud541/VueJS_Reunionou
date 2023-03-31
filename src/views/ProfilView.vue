<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="container">
        <!-- Colonne pour l'image de profil -->
        <div>
            <figure class="image is-128x128 container">
                <img class="is-rounded" src="https://via.placeholder.com/50x50" alt="Image de profil"/>
            </figure>
            <label class="label has-text-centered">Nom utilisateur</label>
        </div>

        <!-- Div pour les évènements en cours -->
        <div class="box">
            <h3 class="title is-4">Evènements en cours</h3>

            <div class="is-flex is-flex-wrap-wrap">
                <div class="card m-4">
                    <router-link to="/event">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://via.placeholder.com/800x600" alt="Image de l'évènement"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Titre de l'évènement</p>
                                </div>
                            </div>
                            <div class="content has-text-black-bis">
                                Description de l'évènement
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="card m-4">
                    <router-link to="/event">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://via.placeholder.com/800x600" alt="Image de l'évènement"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Titre de l'évènement</p>
                                </div>
                            </div>
                            <div class="content has-text-black-bis">
                                Description de l'évènement
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="card m-4">
                    <router-link to="/event">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://via.placeholder.com/800x600" alt="Image de l'évènement"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Titre de l'évènement</p>
                                </div>
                            </div>
                            <div class="content has-text-black-bis">
                                Description de l'évènement
                            </div>
                        </div>
                    </router-link>
                </div>

            </div>
        </div>

        <!-- Div pour les évènements auxquels l'utilisateur a participé -->
        <div class="box">
            <h3 class="title is-4">Evènements auxquels vous avez participé</h3>

            <div class="is-flex is-flex-wrap-wrap">
                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'évènement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'évènement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'évènement
                        </div>
                    </div>
                </div>

                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'évènement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'évènement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'évènement
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
