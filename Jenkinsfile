node{
    def app
    
    stage('Clone repository'){
        checkout scm
    }
    
    stage('Test image'){
    sh 'npm install'    
    sh 'npm test'  
    }

    stage('Build image'){
        app = docker.build("navdeepduvedi/nodeapp")
    }
     stage('Push Image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
        echo "Trying to push Docker Build to Dockerhub"
    }
     
    
}
node{
    def app2
     stage('Build image'){
        app2 = docker.build("navdeepduvedi/nodeapp")
    }
     stage('Push Image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            app2.push("${env.BUILD_NUMBER}")
            app2.push("latest")
        }
        echo "Trying to push Docker Build to Dockerhub"
    }
    
}
