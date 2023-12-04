
<template>
  <div class="bg-gray-100">
   <Header/>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
import Header from '../components/partials/Header.vue';
export default {
  components:{Header}
}
</script>