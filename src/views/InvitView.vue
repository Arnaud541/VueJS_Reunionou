<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

function validationFormulaire() {
  console.log("Validation formulaire");
  router.push('/');
}
</script>

<template>
    <form @submit.prevent="validationFormulaire">
        <div>
            Invitation<br/>
            Inviter des gens inscrit sur la plateforme<br/>
            <button>Ajouter un participant</button><br/><br/><br/>
            Email du participant <input type="text"><br/><br/>
            Inviter des gens hors de la plateforme<br/>
            Url générée à partager : URL
        </div>
    </form>
</template>