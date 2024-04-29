<template>
  <div>
    <Navbar />

    <b-container class="body" fluid>
      <b-row>
        <b-col cols="12">
          <b-table striped hover :items="korban"></b-table>

          <p class="text-center">Alamat Posko:</p>
          <iframe
            :src="this.gmaps"
            width="100%"
            height="450"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="modal-form" title="Silahkan isi form berikut">
      <p>Hello from modal!</p>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { BContainer } from 'bootstrap-vue'
import axios from 'axios'

export default {
  mounted() {
    if (this.$route.query.id === undefined) {
      this.$router.push('/')
    }

    this.getKorbanData(this.$route.query.id)
  },
  data() {
    return {
      status: true,
      korban: [],
      gmaps: '',
    }
  },
  name: 'Result',
  components: {
    Navbar,
    BContainer,
    Footer,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    getKorbanData(id) {
      axios
        .get('http://localhost/website/pencarian/datakorban', {
          params: {
            id: id,
          },
        })
        .then((response) => {
          console.log(response.data)
          this.korban = [
            { data: 'Nama', nilai: response.data.nama },
            { data: 'Jenis Kelamin', nilai: response.data.jenis_kelamin },
            { data: 'Usia', nilai: response.data.usia },
            { data: 'Ciri-ciri', nilai: response.data.ciri_ciri },
            { data: 'Status', nilai: response.data.status },
          ]

          this.getPoskoData(response.data.id_posko)
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // Handle 404 Not Found error
            console.log(error)
          }
        })
    },
    getPoskoData(id) {
      axios
        .get('http://localhost/website/pencarian/dataposko', {
          params: {
            id: id,
          },
        })
        .then((response) => {
          this.korban.push(
            { data: 'Lokasi', nilai: response.data.alamat_posko },
            {
              data: 'Penanggungjawab Posko',
              nilai: response.data.nama_pj_posko,
            },
            { data: 'No. HP Posko', nilai: response.data.hp_pj_posko },
          )

          // Set gmaps iframe
          const parser = new DOMParser()
          const string = response.data.gmaps_posko
          const doc = parser.parseFromString(string, 'text/html')
          const iframe = doc.querySelector('iframe')
          const src = iframe.getAttribute('src')
          this.gmaps = src
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // Handle 404 Not Found error
            console.log(error)
          }
        })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
