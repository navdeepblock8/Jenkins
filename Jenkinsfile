node{
    def app
    
    stage('Clone repository'){
        checkout scm
    }
    stage('Test and build'){
        parallel{
                stage('Test image'){
                    sh 'npm install'    
                    sh 'npm test' 
                   },
                stage("build image"){
                    app = docker.build("navdeepduvedi/nodeapp") 
                }
        }
    

    }
     stage('Push Image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
        echo "Trying to push Docker Build to Dockerhub"
    }
     
    
}
