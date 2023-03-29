<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

let event = reactive({
  titre: '',
  desc: '',
  adresse: '',
  ville: '',
  cp: ''
})

function validationFormulaire() {
  console.log("Validation formulaire");
  router.push('/invit');
}
</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Créer un évènement</h1>
            <form class="box" @submit.prevent="validationFormulaire">
                <div class="field">
                    <label class="label">Titre</label>
                    <input class="input" type="text" v-model="event.titre"><br/>
                </div>

                <div class="field">
                    <label class="label">Description</label>
                    <input class="input" type="text" v-model="event.desc"><br/>
                </div>

                <div class="field">
                    <label class="label">Adresse</label>
                    <input class="input" type="text" v-model="event.adresse"><br/>
                </div>
                <div class="field">
                    <label class="label">Ville</label>
                    <input class="input" type="text" v-model="event.ville"><br/>
                </div>
                <div class="field">
                    <label class="label">Code Postal</label>
                    <input class="input" type="text" v-model="event.cp"><br/>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Créer</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>