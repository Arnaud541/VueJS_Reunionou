<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="container">
        <div class="is-flex">
            <!-- Colonne pour l'image de profil -->
            <div class="">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="https://via.placeholder.com/50x50" alt="Image de profil"/>
                </figure>
                <label class="label">Arnaud Bourgoin</label>
            </div>
        </div>

        <!-- Div pour les événements auxquels l'utilisateur a participé -->
        <div class="box">
            <h3 class="title is-4">Evènement auxquels vous avez participé</h3>
            <div class="is-flex is-flex-wrap-wrap">
                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>
                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>

                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>

                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Div pour les événements que l'utilisateur a créé -->
        <div class="box">
            <h3 class="title is-4">Evènement que vous avez crée</h3>
            <div class="is-flex is-flex-wrap-wrap">
                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>
                <div class="card m-4">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://via.placeholder.com/800x600" alt="Image de l'événement"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Titre de l'événement</p>
                            </div>
                        </div>
                        <div class="content">
                            Description de l'événement
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
