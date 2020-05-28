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

     
    
}
node{
      
      stage('Push Image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            app1.push("${env.BUILD_NUMBER}")
            app1.push("latest")
        }
        echo "Trying to push Docker Build to Dockerhub"
    }

}