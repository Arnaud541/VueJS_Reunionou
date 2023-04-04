<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import EventService from "@/services/EventService";
import ParticipantService from "@/services/ParticipantService";
import CommentsService from "@/services/CommentsService";

const route = useRoute();
const eventId = ref(route.params.id);
const eventData = ref({});
const eventParticipants = ref([]);
const eventComments = ref([]);

function getStatusColor(status) {
    switch (status) {
        case 'pending':
            return 'is-warning';
        case 'refused':
            return 'is-danger';
        case 'accepted':
            return 'is-success';
        default:
            return '';
    }
}

async function fetchEventComments() {
    try {
        const comments = await CommentsService.getCommentsByEventId(eventId.value);

        eventComments.value = comments;
        console.log(eventComments.value);
    } catch (error) {
        console.log('Error fetching event data', error);
    }
}

async function fetchEventData() {
    try {
        const event = await EventService.getEvent(eventId.value);

        eventData.value = event;
    } catch (error) {
        console.log('Error fetching event data', error);
    }
}

async function fetchParticipantsOfEvent() {
    try {
        const participants = await ParticipantService.getEventParticipants(eventId.value);

        eventParticipants.value = participants;


    } catch (error) {
        console.log('Error fetching event data', error);
    }
}

onMounted(fetchEventData);
onMounted(fetchParticipantsOfEvent);
onMounted(fetchEventComments);


</script>

<template>
    <div class="box">
        <div class="has-text-centered title">
            {{ eventData.event?.title }}
        </div>
        <div class="columns">
            <div class="column is-6">
                <div class="ml-3 mb-2 mr-6 has-text-justified">
                    {{ eventData.event?.description }}
                </div>
                <div class="columns">
                    <div class="column is-12">
                        <h4>Participants:</h4>
                        <ul>
                            <div
                            v-if="eventParticipants.participants?.length > 0"
                            v-for="participant in eventParticipants?.participants"
                            :key="participant.id"
                            class="box ml-5 mb-1"
                            > 
                            <router-link :to="`/profil/${participant.user_id}`">
                                <li>{{ participant.firstname }} {{ participant.lastname }}</li>
                            </router-link>
                            <button :class="`button is-fullwidth mt-3 ${getStatusColor(participant.status)}`">{{ participant.status }}</button>
                            <!-- <button class="button is-primary is-fullwidth">Accepter</button>
                            <button class="button is-danger is-fullwidth">Refuser</button> -->
                            </div>
                        </ul>
                        <div v-if="eventParticipants.length === 0" class="box ml-5 mb-1">
                            <p>No participants found.</p>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-12">
                        <h4>Comments:</h4>
                        <div
                            v-if="eventComments.length > 0"
                            v-for="comment in eventComments"
                            :key="comment.id"
                            class="box ml-6 mb-1"
                        >
                            <div>
                            {{ comment.content }}
                            </div>
                        </div>
                        <div v-else class="box ml-6 mb-1">
                            No comments yet
                        </div>
                    </div>
                </div>
            </div>
            <div class="column mt-5">
                <figure>
                    <img src="/public/assets/img/image.png">
                </figure>
            </div>
        </div>
    </div>
</template>