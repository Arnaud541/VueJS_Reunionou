<script setup>
import {reactive, ref} from 'vue';
import {useRoute} from 'vue-router';
import EventService from '@/services/EventService'; 

const route = useRoute();



let participant = reactive({
    email: ''
});

let errors = {
    email: ref('')
};

let participants = [];

function ajouterParticipant() {
    if (participants.email !== "") {
        console.log("Ajout participant");
        participants.push(participant.email);
        participant.email = '';
        console.log(participants);
    }
}

function checkEmail() {
    const regExp = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!regExp.test(participant.email) && participant.email !== "") {
        errors.email.value = "L'adresse e-mail est invalide.";
        return false;
    } else {
        errors.email.value = "";
        return true;
    }
}

async function validationFormulaire() {
  if (checkEmail()) {
    try {
      const formattedParticipants = { participants: participants };

        console.log(formattedParticipants);

      const createdEvent = await EventService.inviteParticipant(route.params.id, formattedParticipants);

      console.log(createdEvent);

      if (createdEvent && createdEvent.id) {
        router.push(`/invit/${createdEvent.event.id}`);
      }
    } catch (error) {
      console.error('Error creating the event:', error);
    }
  }
}




</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title is-2">Invitation</h1>

            <form class="box" @submit.prevent="validationFormulaire">
                <div class="field" :class="{ 'has-error': !checkEmail() }">
                    <h3 class="title is-4">Inviter des personnes inscrites sur la plateforme</h3>
                    <label class="label">E-mail du participant</label>
                    <input class="input" v-model="participant.email" type="email" placeholder="email@domaine.com">
                    <p class="help is-danger" v-if="!checkEmail()">L'email est invalide.</p>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button" @click.prevent="ajouterParticipant">Ajouter un participant</button>
                    </div>
                    <div class="control">
                        <button class="button is-primary">Envoyer invitation</button>
                    </div>
                </div>
                <br>
                <div class="field">
                    <div class="control">
                        <h3 class="title is-4">Inviter des personnes hors de la plateforme</h3>
                        <label class="label">URL générée à partager</label>
                        <input type="text" class="input" value="URL" readonly>
                    </div>
                </div>

            </form>
            <router-link to="/">Annuler</router-link>
        </div>
    </div>
</template>