<script>
import EventService from '@/services/EventService';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';

export default {

  computed: {
    markerPosition() {
      if (!this.marker) return { left: 0, top: 0 };
      const markerPos = this.map.latLngToContainerPoint(this.marker.getLatLng());
      const markerWidth = this.marker._icon.clientWidth;
      const markerHeight = this.marker._icon.clientHeight;
      return { left: markerPos.x - (markerWidth / 2), top: markerPos.y - markerHeight };
    }
  },
  mounted() {
    this.map = L.map('map').setView([48.685054, 6.184417], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', event => {
      if (this.marker) {
        this.marker.setLatLng(event.latlng);
      } else {
        this.marker = L.marker(event.latlng).addTo(this.map);
      }
    });
  },


  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      map: null,
      marker: null,
      name: '',
      description: ''
    }
  },
  async created() {
    try {
      const response = await EventService.getAllEvents();
      this.events = response.data.events;
    } catch (error) {
      console.error(error);
    }
  },
};

</script>

<template>
    <div class="columns">
        <div class="column is-2">
            <div style="position: absolute; left: {{ markerPosition.left }}px; top: {{ markerPosition.top }}px;">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name">
                <br>
                <label for="description">Description:</label>
                <input type="text" id="description" v-model="description">
            </div>
        </div>
        <div class="column is-4 is-offset-2">
            <div style="height:500px; width:800px" id="map" ref="map" @click="addMarker"></div>
            <div id="map" style="position: relative;">
            </div>
        </div>
    </div>
    <div v-for="event in events" :key="event.id" class="mt-4">
      <h3>{{ event.title }}</h3>
      <p>{{ event.description }}</p>
    </div>
</template>

<script setup>
</script>