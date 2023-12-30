const {join, resolve} = require('path');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Somalia madagascar plant',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/v-tooltip.css", "@/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'node_modules/autoprefixer'},
    // { src: "~/plugins/v-i18n.js" },
  ],
  alias: {
    images: '@/assets/img',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    "@nuxt/postcss8",
  ],
 // Build Configuration: https://go.nuxtjs.dev/config-build
 build: {
  // analyze: true,
  standalone: false,
  transpile: ["flagpack-core", "vue-flagpack", "swiper"],
  postcss: {
      postcssOptions: {
          plugins: {
              tailwindcss: {},
              autoprefixer: {},
          },
      },
  },
},
i18n: {
  lazy: true,
  defaultLocale: "sw",
  fallbackLocale: "sw",
  langDir: "locales/",
  locales: [
      {
          code: "en",
          name: "English",
          iso: "en-US",
          file: "en-US.js",
          dir: "ltr",
          countryCode: "US",
      },
      {
          code: "sw",
          name: "Swahili",
          iso: "sw-TZ",
          file: "sw-TZ.js",
          dir: "ltr",
          countryCode: "TZ",
      },
  ],
  vueI18n: {
      dateTimeFormats: {
          en: {
              short: {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
              },
              long: {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
              },
              month_day: {
                  day: "2-digit",
                  month: "long",
              },
              year: {
                  year: "numeric",
              },
          },
          sw: {
              short: {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
              },
              long: {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
              },
              month_day: {
                  day: "2-digit",
                  month: "long",
              },
              year: {
                  year: "numeric",
              },
          },
      },
      numberFormats: {
          en: {
              currency: {
                  style: "currency",
                  currency: "TZS",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
              },
          },
          sw: {
              currency: {
                  style: "currency",
                  currency: "TZS",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
              },
          },
      },
  },
  strategy: "prefix_and_default",
  detectBrowserLanguage: false,
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  router: {
    extendRoutes(routes, resolve) {
        // Loop through the routes
        routes.forEach((route) => {
            // Check if the route is a default route created via the pages directory
            // And add the new breadcrumb meta property to the route
            //   if (route.path === '/') {
            //     route.meta = { ...route.meta, breadcrumb:'breadcrumb.home'};
            //   }
            switch (route.path) {
              case "/":
                  route.meta = {
                      ...route.meta,
                      breadcrumb: "breadcrumb.home",
                      scrollPos:{x:0,y:0},
                  };
                  break;
                  case "/plant":
                      route.meta = {
                          ...route.meta,
                          breadcrumb: "breadcrumb.plant",
                          scrollPos:{x:0,y:0},
                      };
                      break;
              case "/plants":
                  route.meta = {
                      ...route.meta,
                      breadcrumb: "breadcrumb.plants",
                      scrollPos:{x:0,y:0},
                  };
                  break;
                  case "/plants/:id":
                    console.log("router meta===>>",route.meta);
                  route.meta = {
                      ...route.meta,
                      breadcrumb: "breadcrumb.plant",
                      
                  };
                  break;

            }
           
        });
    },
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
}
