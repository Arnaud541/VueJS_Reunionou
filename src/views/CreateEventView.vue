<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

function validationFormulaire() {
  console.log("Validation formulaire");
  router.push('/invit');
}
</script>

<template>
    <div>
        Créer un évènement
    </div>
    <form @submit.prevent="validationFormulaire">
        <div>
            Titre : <input type="text"><br/>
            Description : <input type="text"><br/>
            Adresse : <input type="text"><br/>
            Ville : <input type="text"><br/>
            Code Postal : <input type="text"><br/>
            <button>Créer</button>
        </div>
    </form>
</template>