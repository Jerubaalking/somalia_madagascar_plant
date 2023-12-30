<template>
    <section class="container mx-auto text-base px-12 py-28 m-2">
        <div class="flex flex-col bg-white roundedb-2xl overflow-hidden lg:m-2 md:m-2 mb-3">
            <NuxtLink :to="link" class="overflow-hidden m-0 rounded-5x1">
            <img alt="Trusted and secured" class="lg:h-[256px] h-40 w-full object-cover "
                src="~/assets/img/system/file.jpg" /></NuxtLink>
        </div>
    </section>
</template>

<script>
export default {
    props:{
            image:{
                type:String,
                default:'../../assets/img/system/BoT.svg',
            },
        },

        computed:{
            link(){
                return '/plants/1';
            }
        }
    }
</script>