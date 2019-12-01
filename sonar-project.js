const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       // serverUrl : is the SonarQube Url that matches appserver machine ip address and port 9000 where SonarQube server runs
       serverUrl: 'http://192.168.56.103:9000',  
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
