<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title is-2">Réunionou</h1>

            <div class="box">
                <div class="field mt-3">
                    <label class="label">Ajouter une description</label>
                </div>

                <div class="field mt-6">
                    <div class="control">
                        <router-link to="/createEvent" class="button is-primary">Créer un évènement</router-link>
                    </div>
                </div>
                <div class="field mt-2">
                    <div class="control">
                        <router-link to="/createEventMap" class="button is-primary">Créer un évènement avec la carte</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-for="event in events" :key="event.id" class="mt-4">
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <!-- Display other event information here -->
        </div>
</template>

<script setup>
</script>