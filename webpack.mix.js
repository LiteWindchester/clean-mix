const mix = require('laravel-mix')
require('laravel-mix-ejs')

mix.setPublicPath('public')


// disable system notifications
mix.disableNotifications()

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .ejs('resources/views', 'public', {}, {
    ext: '.html',
    base: 'resources/views',
    partials: 'resources/views/partials'
  })
// .version()

mix.copyDirectory('resources/img', 'public/img')


// If in development mode - enable sourcemaps
if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
  mix.sourceMaps()
}
