<script>
import EventService from '@/services/EventService';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();

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
  methods: {
    async validationFormulaire() {
      if (this.checkTitle() && this.checkDesc() && this.checkStreet() && this.checkCity() && this.checkZipcode()) {
        try {
          const newEvent = {
            title: event.title,
            description: event.desc,
            address: `${event.street}, ${event.city}, ${event.zipcode}`,
          };

          await EventService.createEvent(newEvent);

          router.push('/invit');
        } catch (error) {
          console.error('Error creating the event:', error);
        }
      }
    },

    checkTitle() {
      const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'\d]+$/;
      if (!regExp.test(event.title) && event.title !== "") {
        errors.title.value = "Le titre est invalide.";
        return false;
      } else {
        errors.title.value = "";
        return true;
      }
    },

    checkDesc() {
      const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'\d]+$/;
      if (!regExp.test(event.desc) && event.desc !== "") {
        errors.desc.value = "Le description est invalide.";
        return false;
      } else {
        errors.desc.value = "";
        return true;
      }
    },

    checkStreet() {
      const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'\d]+$/;
      if (!regExp.test(event.street) && event.street !== "") {
        errors.street.value = "L'adresse est invalide.";
        return false;
      } else {
        errors.street.value = "";
        return true;
      }
    },

    checkCity() {
        const regExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[\s-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if (!regExp.test(event.city) && event.city !== "") {
        errors.city.value = "La ville est invalide.";
        return false;
    } else {
        errors.city.value = "";
        return true;
    }

    checkZipcode() {
    const regExp = /^([A-Z]+[A-Z]?-)?[0-9]{1,2} ?[0-9]{3}$/;
    if (!regExp.test(event.zipcode) && event.zipcode !== "") {
        errors.zipcode.value = "Le code postal est invalide.";
        return false;
    } else {
        errors.zipcode.value = "";
        return true;
    }
    }