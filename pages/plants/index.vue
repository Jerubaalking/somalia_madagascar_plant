<template>
  <section class="container mx-auto text-base px-12 py-28 m-2">
    <h1 class="mb-24 w-full text-center text-4xl font-extrabold text-dark sm:mx-auto sm:mb-20 sm:w-5/1">
      <span class="text-green-700">Somalia &</span>
      <span class="text-gray-600">Madagascar Plant</span>
    </h1>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1" ><div class="m-0" v-for="content in contents" >
        <ContentCard  class="border border-gray-300 drop-shadow-2xl" :title="content.title" :image="content.image" :link="content.link" :sub_title="content.sub_title"/>
    </div></div>
  </section>
</template>

<style scoped>
span {
  font-family: monospace;
}
</style>
<script>
import ContentCard from '../../components/ContentCard.vue';

export default{
  props:{
    ContentCard: {
      type:typeof require('../../components/ContentCard.vue'),
    }
  },
  components:{ContentCard},
  data() {
    return {
      contents:[
        {image:'/assets/img/system/file.jpg',title:'Madagascar plant', sub_title:'This sub title!', link:"/plants/1" },
        {image:'/assets/img/system/download.jpeg',title:'Cyanotis somaliensis Plant', sub_title:'This sub title!', link:"/plants/2" },
        {image:'/assets/img/system/file.jpg',title:'Ivy Plant', sub_title:'This sub title!', link:"/plants/3" },
        {image:'/assets/img/system/file.jpg',title:'Coffee plant', sub_title:'This sub title!', link:"/plants/4" },
        {image:'/assets/img/system/file.jpg',title:'Title 2', sub_title:'This sub title!', link:"/plants/5" },
        {image:'/assets/img/system/file.jpg',title:'Title 1', sub_title:'This sub title!', link:"/plants/6" },
      ]
    }
  },
}
</script>