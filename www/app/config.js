angular.module('partyon.config', [])
  .value(
    'Config', {
      //'ENV': 'prod',
      //'BASE_URL': 'http://vps.oliveinnovations.com/devrest/mobile/',

      'ENV': 'dev',
      'BASE_URL': 'http://localhost:8080/partyon/index.php/api/',
    }
  )
;
