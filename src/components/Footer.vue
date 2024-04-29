<template>
  <div>
    <b-container class="bg-warning footer py-3" fluid>
      <b-row>
        <b-col class="text-center">
          <p class="mb-0">Citra Fauzan Alqodri - 06.2023.1.82004</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'Footer',
  components: {
    BContainer,
  },
}
</script>

<style scoped>
.footer {
  border: 2px solid #f2f2f2;
  border-top: 0;
  border-bottom-left-radius: 2vw;
  border-bottom-right-radius: 2vw;
}
</style>
