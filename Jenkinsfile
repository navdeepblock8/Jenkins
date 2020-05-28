node{
    def app
    
    stage('Clone repository'){
        checkout scm
    }

    stage('Build image'){
        app = docker.build("navdeepduvedi/nodeapp")
    }

    stage('Test image'){
        
    sh 'npm test'   
    
}
node{
    def app2
     
      stage('Build Image'){
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