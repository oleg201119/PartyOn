angular.module('partyon.config', [])
  .value(
    'Config', {
      'ENV': 'prod',
      'BASE_URL': 'http://ec2-54-203-12-196.us-west-2.compute.amazonaws.com/partyon/index.php/api/',

      //'ENV': 'dev',
      //'BASE_URL': 'http://localhost:8080/partyon/index.php/api/',
    }
  )
;
