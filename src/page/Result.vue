<template>
  <div>
    <Navbar />

    <b-container class="body" fluid>
      <b-row v-if="this.status">
        <b-col cols="12">
          <b-alert show dismissible variant="success">
            Data korban ditemukan
          </b-alert>

          <b-table :items="items" :fields="fields" striped responsive="sm">
            <template #cell(action)="row">
              <b-button
                size="sm"
                @click="goToData(row.item.id)"
                variant="primary"
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
                Lihat Data Lengkap
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <b-row v-if="!this.status">
        <b-col cols="12">
          <b-alert show dismissible variant="danger">
            Maaf, data korban tidak ditemukan
          </b-alert>

          <p>
            Apakah anda bersedia untuk dihubungi jika korban nantinya ditemukan?
          </p>

          <b-row>
            <b-col cols="6">
              <b-button block variant="danger" @click="goToHome()">
                <i class="fa fa-times" aria-hidden="true"></i>
                Tidak Bersedia
              </b-button>
            </b-col>
            <b-col cols="6">
              <b-button block variant="success" v-b-modal.modal-form>
                <i class="fa fa-check" aria-hidden="true"></i>
                Bersedia
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      id="modal-form"
      title="Silahkan isi form berikut"
      :cancel-title="'Batal'"
      :ok-title="'Kirim'"
      @ok="submitForm()"
    >
      <b-form-group label="Nama anda:">
        <b-form-input
          v-model="form.name"
          :state="formValidation(form.name)"
          placeholder="Masukkan nama anda"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="formValidation(form.name)">
          Nama tidak boleh kosong
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Cari data korban berdasarkan?">
        <b-form-select
          v-model="form.type"
          :options="options"
          :state="formValidation(form.type)"
        ></b-form-select>
        <b-form-invalid-feedback :state="formValidation(form.type)">
          Tipe data tidak boleh kosong
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group v-if="form.type === 'name'" label="Nama korban:">
        <b-form-input
          v-model="form.nameSearch"
          :state="formValidation(form.nameSearch)"
          placeholder="Masukkan nama korban yang anda cari"
          :required="form.type === 'name' ? true : false"
        ></b-form-input>
        <b-form-invalid-feedback :state="formValidation(form.nameSearch)">
          Nama korban tidak boleh kosong
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group v-if="form.type === 'nik'" label="NIK korban:">
        <b-form-input
          v-model="form.nikSearch"
          :state="formValidation(form.nikSearch)"
          placeholder="Masukkan NIK korban yang anda cari"
          type="number"
          :required="form.type === 'nik' ? true : false"
        ></b-form-input>
        <b-form-invalid-feedback :state="formValidation(form.nikSearch)">
          NIK korban tidak boleh kosong
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="No. handphone anda:">
        <b-form-input
          v-model="form.phoneNumber"
          :state="formValidation(form.phoneNumber)"
          placeholder="Masukkan no. handphone anda"
          type="number"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="formValidation(form.phoneNumber)">
          No. handphone tidak boleh kosong
        </b-form-invalid-feedback>
      </b-form-group>
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
  data() {
    return {
      status: null,
      fields: ['no', 'nama', 'jenis_kelamin', 'usia', 'action'],
      items: [],
      options: [
        { value: 'name', text: 'Cari berdasarkan nama' },
        { value: 'nik', text: 'Cari berdasarkan NIK' },
      ],
      form: {
        name: '',
        type: '',
        nameSearch: '',
        nikSearch: '',
        phoneNumber: '',
      },
    }
  },
  name: 'Result',
  components: {
    Navbar,
    BContainer,
    Footer,
  },
  mounted() {
    this.searchData(this.$route.query.type, this.$route.query.value)
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    searchData(type, value) {
      axios
        .get('https://skripsi-fauzan.000webhostapp.com/skripsi/pencarian/result', {
          params: {
            type: type,
            value: value,
          },
        })
        .then((response) => {
          this.status = true
          this.items = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // Handle 404 Not Found error
            this.status = false

            const type = this.$route.query.type
            const value = this.$route.query.value

            switch (type) {
              case 'name':
                this.form.type = 'name'
                this.form.nameSearch = value
                break
              case 'nik':
                this.form.type = 'nik'
                this.form.nikSearch = value
                break
            }
          }
        })
    },
    goToData(id) {
      this.$router.push(`/data?id=${id}`)
    },
    formValidation(value) {
      return value !== ''
    },
    submitForm() {
      if (this.form.name === '') {
        alert('Nama tidak boleh kosong')
        return
      }

      if (this.form.type === '') {
        alert('Tipe data tidak boleh kosong')
        return
      }

      if (this.form.type === 'name' && this.form.nameSearch === '') {
        alert('Nama korban tidak boleh kosong')
        return
      }

      if (
        this.form.type === 'nik' &&
        (isNaN(this.form.nikSearch) || this.form.nikSearch.length !== 16)
      ) {
        alert(
          'NIK korban tidak boleh kosong, berupa angka, dan berjumlah 16 digit',
        )
        return
      }

      if (this.form.phoneNumber === '') {
        alert('No. handphone tidak boleh kosong')
        return
      }

      if (
        this.form.phoneNumber.length < 10 ||
        this.form.phoneNumber.length > 12
      ) {
        alert(
          'No. handphone harus memiliki panjang antara 10 hingga 12 karakter',
        )
        return
      }

      axios
        .post('https://skripsi-fauzan.000webhostapp.com/skripsi/pencarian/savedata', {
          namapencari: this.form.name,
          type: this.form.type,
          value:
            this.form.type === 'name'
              ? this.form.nameSearch
              : this.form.nikSearch,
          hppencari: this.form.phoneNumber,
        })
        .then((response) => {
          console.log(response.data)
          alert(
            'Data anda berhasil masuk database dan akan dihubungi jika korban nantinya ditemukan',
          )
          this.$router.push('/')
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
