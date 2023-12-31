<template>
    <section class="container mx-auto text-base px-12 py-8 mb-5">
        <div class="flex flex-col bg-white roundedb-2xl overflow-hidden lg:m-0 md:m-2 mb-3">
            <NuxtLink :to="link" class="overflow-hidden m-0 rounded-5x1">
            <img alt="Trusted and secured" class="lg:h-[506px] h-80 w-full object-cover "
                src="~/assets/img/system/file.jpg" /></NuxtLink>

                <div class=" mt-5">
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                    <h1 class="text-xl font-bold m-5">{{title}}</h1>
                    <p class="flex item-center m-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis ex, enim harum cumque dolorem, similique obcaecati vel pariatur assumenda deserunt sed porro libero nostrum iure qui. Laudantium, odit aut.
                    </p>
                </div>
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
            title:{
                type:String,
                default:'Madagascar',
            },
        },

        computed:{
            link(){
                return '/plants/1';
            }
        }
    }
</script>