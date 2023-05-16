// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app:{
      head:{
        title:'Nuxt-Net-Ninja',
        meta:[{
          name:'description', content:'Everything about Nuxt 3'
        }],
        link:[{
          rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'
        }]
      }
    },

    runtimeConfig:{
      currencyKey:process.env.CURRENCY_API_KEY
    },
    

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        // config: {},
        injectPosition: 'first',
        viewer: true,

      }

})
