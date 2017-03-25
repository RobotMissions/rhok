/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
    '*': 'node_modules/*',
    'main.js': 'main.js',
    'app/*': 'app/*'
  },
   // map tells the System loader where to look for things
    map: {
      // angular bundles
      '@angular/core': '@angular/core/bundles/core.umd.js',
      '@angular/common': '@angular/common/bundles/common.umd.js',
      '@angular/compiler': '@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': '@angular/http/bundles/http.umd.js',
      '@angular/router': '@angular/router/bundles/router.umd.js',
      '@angular/forms': '@angular/forms/bundles/forms.umd.js',

      'angular-in-memory-web-api': 'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      'socket.io-client': 'socket.io-client/dist/socket.io.js',
      'feathers-hooks': 'feathers-hooks/lib/hooks.js',
      'superagent': 'superagent/lib/client.js',
      'uberproto': 'uberproto/lib/proto.js',
      'feathers-commons': 'feathers-commons/lib/commons.js',
      'component-emitter': 'component-emitter/index.js',
      'feathers-errors': 'feathers-errors/lib/index.js',
      'events': 'events/events.js',
      'debug': 'debug/browser.js',
      'qs': 'qs/lib/index.js',
      'ms': 'ms/index.js',
      'rubberduck': 'rubberduck/lib/rubberduck.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      '.': {
        defaultExtension: 'js'
      },
      app: {
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      }
    }
  });
})(this);
