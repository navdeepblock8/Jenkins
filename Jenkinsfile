node{
    def app
    
    stage('Clone repository'){
        checkout scm
    }

    stage('Build image'){
        app = docker.build("navdeepduvedi/nodeapp")
    }

    stage('Test image'){
        app.inside{
            echo "Test passed"
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