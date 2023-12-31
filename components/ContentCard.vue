<template>
    <NuxtLink :to="link" class="flex flex-col bg-white roundedb-2xl overflow-hidden lg:m-2 md:m-2 mb-3">
            <div class="overflow-hidden m-0 rounded-5x1">
            <img alt="Trusted and secured" class="lg:h-[256px] h-40 w-full object-cover "
            :src="'_nuxt'+image"/></div>

                <footer class="px-4 py-6 space-y-3">
                    <div class="flex flex-between center-items">
                    <h2 class="mb-2 text-xl text-gray-700 font-bold leading-tight md:text-xl">
                    {{title}}
                    </h2>
                    </div>
            <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                {{ sub_title }}
            </p>
        <div class="flex flex-block justify-between item-center">
          <a class="relative item-center mx-auto inline-block text-sm font-bold text-[#3f3f3f] underline decoration-[#3f3f3f] decoration-2 underline-offset-8 dark:decoration-slate-400 transition hover:decoration-slate-400 dark:text-slate-400 dark:hover:text-slate-600 dark:hover:decoration-slate-600 sm:m-0"
            :href="link">
            Read more

            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"
              class="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100">
              <path fill="none" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14m-4 4l4-4m-4-4l4 4"></path>
            </svg>
          </a>
        </div></footer>
      </NuxtLink>
</template>
<script>
    export default {
        props:{
            image:{
                type:String,
                default:'~/assets/img/system/BoT.svg',
            },
            title:{
                type:String,
                default:'Title',
            },
            sub_title:{
                type:String,
                default:'sub title',
            },
            link:{
                type:String,
                default:'/plants/1',
            },
        },
    }
</script>