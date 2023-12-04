module.exports = {
    apps: [
        {
            name: 'Somalia Madagascar plant',
            port: 3200,
            exec_mode: 'cluster',
            instances: 1,
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            cwd: '/var/www/app',
            env: {
                NODE_ENV: 'production',
            },
        },
        {
            name: 'Somalia Madagascar Plant',
            port: 3000,
            exec_mode: 'cluster',
            instances: 1,
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            cwd: '/var/www/app',
            env: {
                NODE_ENV: 'development'
            },
        },
    ]
}
