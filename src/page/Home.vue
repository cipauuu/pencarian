<template>
  <div>
    <Navbar />

    <div>
      <b-card no-body class="home-card">
        <b-tabs card>
          <b-tab title="Cari dengan nama" active>
            <b-row>
              <b-col class="mb-3" cols="12">
                <p class="mb-0">Siapakah nama korban yang ingin dicari?</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <b-form-input
                  class="mb-3"
                  v-model="form.name"
                  v-on:keyup.enter="cariNama()"
                  placeholder="contoh: Asep"
                  type="text"
                  required
                ></b-form-input>
              </b-col>
              <b-col cols="12">
                <b-button block variant="primary" @click="cariNama()">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  Cari
                </b-button>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Cari dengan NIK">
            <b-row>
              <b-col class="mb-3" cols="12">
                <p class="mb-0">
                  Berapa NIK dari korban yang ingin dicari?
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <b-form-input
                  class="mb-3"
                  v-model="form.nik"
                  v-on:keyup.enter="cariNIK()"
                  required
                ></b-form-input>
              </b-col>
              <b-col cols="12">
                <b-button block variant="primary" @click="cariNIK()">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  Cari
                </b-button>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      form: {
        name: '',
        nik: '',
      },
    }
  },
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
  methods: {
    cariNama() {
      if (this.form.name === '') {
        alert('Nama tidak boleh kosong')
      } else if (this.isHaveNumeric(this.form.name)) {
        alert('Nama tidak boleh ada angka')
      } else {
        this.routeToResult('name', this.form.name)
      }
    },
    cariNIK() {
      if (this.form.nik === '') {
        alert('NIK tidak boleh kosong')
      } else if (!this.isNumeric(this.form.nik)) {
        alert('NIK harus berupa angka')
      } else if (this.form.nik.length !== 16) {
        alert('NIK harus 16 digit')
      } else {
        this.routeToResult('nik', this.form.nik)
      }
    },
    routeToResult(type, value) {
      this.$router.push({
        path: '/result',
        query: {
          type: type,
          value: value,
        },
      })
    },
    isNumeric(value) {
      return /^-?\d+$/.test(value)
    },
    isHaveNumeric(value) {
      return /\d/.test(value)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-card {
  border: 2px solid #f2f2f2;
  border-radius: 0;
}
</style>
