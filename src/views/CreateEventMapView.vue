<script>
import EventService from '@/services/EventService';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';

export default {
  methods: {
    async updateMarkerPopupContent(marker) {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${marker.getLatLng().lat}&lon=${marker.getLatLng().lng}&format=json`);
      const data = await response.json();
      if (data.address.house_number != undefined) {
        document.getElementById('adr').value = data.address.house_number+" "+data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
        marker.setPopupContent(data.address.house_number+" "+data.address.road+" "+data.address.postcode+" "+data.address.municipality);
      }
      else{
        document.getElementById('adr').value = data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
        marker.setPopupContent(data.address.road+" "+data.address.postcode+" "+data.address.municipality);
      }
    }
  },
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

    this.map.on('click', async event => {
      if (this.marker) {
        this.marker.setLatLng(event.latlng);
        this.updateMarkerPopupContent(this.marker);
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${event.latlng.lat}&lon=${event.latlng.lng}&format=json`);
        const data = await response.json();
        if (data.address.house_number != undefined) {
          document.getElementById('adr').value = data.address.house_number+" "+data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
          this.marker.bindPopup(data.address.house_number+" "+data.address.road+" "+data.address.postcode+" "+data.address.municipality).openPopup();
        }
        else{
          document.getElementById('adr').value = data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
          this.marker.bindPopup(data.address.road+" "+data.address.postcode+" "+data.address.municipality).openPopup();
        }
      } else {
        this.marker = L.marker(event.latlng).addTo(this.map);
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${event.latlng.lat}&lon=${event.latlng.lng}&format=json`);
        const data = await response.json();
        if (data.address.house_number != undefined) {
          document.getElementById('adr').value = data.address.house_number+" "+data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
          this.marker.bindPopup(data.address.house_number+" "+data.address.road+" "+data.address.postcode+" "+data.address.municipality).openPopup();
        }
        else{
          document.getElementById('adr').value = data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
          this.marker.bindPopup(data.address.road+" "+data.address.postcode+" "+data.address.municipality).openPopup();
        }
        this.marker.on('move', async () => {
        await this.updateMarkerPopupContent(this.marker);
        });
      }
    });
  },
  updateMarkerPopupContent(marker) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${marker.getLatLng().lat}&lon=${marker.getLatLng().lng}&format=json`);
      const data = await response.json();
      if (data.address.house_number != undefined) {
        document.getElementById('adr').value = data.address.house_number+" "+data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
        marker.setPopupContent(data.address.house_number+" "+data.address.road+" "+data.address.postcode+" "+data.address.municipality);
      }
      else{
        document.getElementById('adr').value = data.address.road;
        document.getElementById('city').value =data.address.municipality;
        document.getElementById('zip').value = data.address.postcode;
        marker.setPopupContent(data.address.road+" "+data.address.postcode+" "+data.address.municipality);
      }
      resolve();
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
      titre: '',
      description: '',
      date:'',
      adress:'',
      city:'',
      zipcode:'',
    }
  },
};
</script>

<template>
  <form class="box" @submit.prevent="validationFormulaire">
  <div class="columns ml-3">
      <div class="column is-5">
          <h1 class="title is-2 has-text-centered">Créer un évènement</h1>
          <div class="columns">
            <div class="column">
            <div style="position: absolute; left: {{ markerPosition.left }}px; top: {{ markerPosition.top }}px;">

              <div class="field">
                <div class="field">
                  <label class="label">Titre*</label>
                  <input class="input" type="text" v-model="titre" required>
                </div>
              </div>

              <div class="field">
                <div class="field">
                  <label class="label">Adresse*</label>
                  <input id="adr" class="input" type="text" v-model="adress" required readonly>
                </div>
              </div>

              <div class="field">
                <div class="field">
                  <label class="label">Ville*</label>
                  <input id="city" class="input" type="text" v-model="city" required readonly>
                </div>
              </div>
            </div>
            </div>
            <div class="column">

              <div class="field">
                <div class="field">
                  <label class="label">Date*</label>
                  <input class="input" type="text" v-model="date" required>
                </div>
              </div>

              <div class="field">
                <div class="field">
                  <label class="label">Code Postal*</label>
                  <input id="zip" class="input mb-6" type="text" v-model="zipcode" required readonly>
                </div>
              </div>
            </div>
          </div>
        <div class="field mt-6">
              <div class="field">
                <label class="label">Description*</label>
                <textarea rows="3" cols="33" class="textarea" type="text" v-model="description" required></textarea>
              </div>
            </div>
          </div>
        <div class="column is-4">
            <div style="height:500px; width:800px" id="map" ref="map" @click="addMarker"></div>
            <div id="map" style="position: relative;">
            </div>
        </div>
    </div>
  </form>
</template>