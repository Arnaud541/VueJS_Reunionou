<script setup>

import { ref, onMounted } from 'vue';
import UserService from '@/services/UserService';
import {useRoute} from 'vue-router';

const route = useRoute();
const userEvents = ref([]);
const userCreatedEvents = ref([]);

const userId = ref(route.params.id);


async function fetchUserEvents() {
    try {

        const events = await UserService.getUserEvents(userId.value);

        userEvents.value = events;
    } catch (error) {
        console.error('Error fetching user events:', error);
    }
}

async function fetchUserCreatedEvents() {
    console.log(userId.value);
    try {
        const createdEvents = await UserService.getCreatedEventsByUserId(userId.value);


        userCreatedEvents.value = createdEvents;
    } catch (error){
        console.log('Error fetching user created events', error);
    }
}

onMounted(fetchUserEvents);
onMounted(fetchUserCreatedEvents);

</script>

<template>
    <div class="container">
        <!-- Colonne pour l'image de profil -->
        <div>
            <!-- ... -->
        </div>

        <!-- Div pour les évènements en cours -->
        <div class="box">
            <h3 class="title is-4">Evènements en cours</h3>
            <div class="is-flex is-flex-wrap-wrap">
                <div v-for="event in userEvents" :key="event.id" class="card m-4">
                    <router-link :to="`/event/${event.id}`">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="event.image || 'https://via.placeholder.com/800x600'" alt="Image de l'évènement"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ event.title }}</p>
                                </div>
                            </div>
                            <div class="content has-text-black-bis">
                                {{ event.description }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Div pour les évènements auxquels l'utilisateur a participé -->

    </div>
    <div>
        <!-- Div pour les évènements auxquels l'utilisateur a participé -->
        <div class="box">
            <h3 class="title is-4">Evènements que vous avez crée</h3>
            <div class="is-flex is-flex-wrap-wrap">
                <div v-for="event in userCreatedEvents" :key="event.id" class="card m-4">
                    <router-link :to="`/event/${event.id}`">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="event.image || 'https://via.placeholder.com/800x600'" alt="Image de l'évènement"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{ event.title }}</p>
                                </div>
                            </div>
                            <div class="content has-text-black-bis">
                                {{ event.description }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
