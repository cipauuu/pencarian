<template>
  <div>
    <Navbar />

    <b-container class="body" fluid>
      <b-row>
        <b-col cols="12">
          <h3>Abstrak</h3>

          <p>
            Sistem administrasi dan informasi korban kebencanaan pada saat ini
            masih dikelola secara internal dan data korban sulit diakses secara
            jarak jauh bagi masyarakat. Informasi korban pada lokasi bencana
            umumnya ditulis pada papan pengumuman di papan tulis putih yang
            belum terkomputerisasi. Maka diperlukan sebuah wadah yang dapat
            mengantisipasi permasalahan informasi korban yang belum
            terkomputerisasi dan tidak dapat diakses secara jarak jauh oleh
            masyarakat.

            <br />
            <br />

            Website yang dibangun bertujuan untuk membangun purwarupa website
            yang terdapat fasilitas untuk mencari lokasi dari korban pasca
            bencana alam dengan framework Vue.Js. Sistem data dibangun
            menggunakan pemrograman Hypertext Preprocessor (PHP) dan database
            mySQL.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'About',
  components: {
    Navbar,
    BContainer,
    Footer,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
