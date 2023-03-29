<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

function validationFormulaire() {
  console.log("Validation formulaire");
  router.push('/');
}
</script>

<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <form class="box" @submit.prevent="validationFormulaire">
                <div>
                    <h1 class="title is-2">Invitation</h1><br/>

                    <h3 class="title is-4">Inviter des gens inscrit sur la plateforme</h3><br/>

                    <h3 class="title is-4">Email du participant</h3>
                    <input class="input" type="text"><br/><br/>

                    <button class="button is-primary">Ajouter un participant</button><br/><br/>

                    <h3 class="title is-4">Inviter des gens hors de la plateforme</h3><br/>

                    <h3 class="title is-4">Url générée à partager</h3>
                    <div>
                        <input type="text" class="input" value="URL" readonly>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>