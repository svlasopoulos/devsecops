node ('Ubuntu-app-agent'){  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }  
    /*
    stage('SAST'){
        build 'SECURITY-SAST-SNYK'
    }
    */
    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("svla299/snake")
    }
    stage('Post-to-dockerhub') { 
        /*docker.withRegistry("https://registry.hub.docker.com", 'svla_docker') {*/
        docker.withRegistry("", 'svla_docker') {
            app.push("latest")
        }
    }
    /*
    stage('SECURITY-IMAGE-SCANNER'){
        build 'SECURITY-IMAGE-SCANNER-AQUAMICROSCANNER'
    }
    */
    stage('Pull-image-server') {
        /*sh "docker-compose down"*/
        sh 'docker rmi $(docker images | grep "^<none>" | awk "{print $3}") || true'
        sh 'docker container stop $(docker container ls -aq) || true'
        sh 'docker container rm $(docker container ls -aq) || true'
        sh 'docker-compose up -d'	
    }
    /*
    stage('DAST') {
        build 'SECURITY-DAST-OWASP_ZAP'
    }
    */
}
