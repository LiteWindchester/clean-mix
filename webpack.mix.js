const mix = require('laravel-mix')
require('laravel-mix-ejs')

mix.setPublicPath('public')


// disable success notifications, notify only on errors
mix.disableSuccessNotifications()

mix.copyDirectory('resources/img', 'public/img')

mix.options({
  fileLoaderDirs: {
    images: 'img',
    fonts: 'fonts'
  }
})

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .ejs('resources/views', 'public', {}, {
    ext: '.html',
    partials: 'resources/views/partials'
  })
  .version()


// If in development mode - enable sourcemaps
if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
  mix.browserSync({
    // browser: 'opera',
    open: false, // open browser on start?
    watch: true,
    server: './public',
  })
  mix.sourceMaps()
}
