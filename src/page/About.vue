<template>
  <div>
    <Navbar />

    <b-container class="body" fluid>
      <b-row>
        <b-col cols="12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dicta consequuntur, quia nostrum laboriosam id odio saepe laudantium omnis quis fuga, corporis dignissimos rem, temporibus cum quasi ducimus nisi rerum unde amet placeat nihil eligendi. Molestias rem sunt inventore tempore eos magnam et quo voluptatum, magni corrupti molestiae consectetur libero!
          <br />
          <br />
          Alias, minus velit. Eos obcaecati culpa animi vitae corporis nemo officiis aspernatur at magnam eaque minima qui illum quo hic molestiae expedita, repellendus excepturi natus debitis quos a tempore aliquam fuga et. Aspernatur aliquam quaerat similique officiis eligendi tempore delectus ipsa architecto id eos inventore sint labore blanditiis, nisi facilis.
          <br />
          <br />
          Pariatur tenetur, ullam assumenda, cum quod distinctio nam magni delectus maxime ab officiis voluptatibus dolor quo aspernatur voluptates suscipit harum expedita labore odit possimus rem perspiciatis! Voluptatibus asperiores eveniet adipisci neque ducimus saepe laborum qui doloribus iste iusto. Temporibus repellat quisquam voluptatibus quas omnis quasi ratione nam facere perspiciatis dolore!
          <br />
          <br />
          Ab et dolores magnam. Rem non esse, fuga maiores, commodi libero reprehenderit error, aut vitae blanditiis eos perferendis? Optio perspiciatis aut facilis maiores ullam molestiae tenetur odio, totam dignissimos nihil, magni iste non vero exercitationem id soluta dolorum iure expedita quis culpa. Accusamus, harum officia. Neque quasi maiores aut error!
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
