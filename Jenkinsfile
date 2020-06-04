pipeline{
    agent any
    stages{
        stage('Clone repository'){
            steps{
                checkout scm
            }
        }
        stage('Test and Build'){
            parallel{
                stage('Test'){
                    steps{
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
                stage('Build images'){
                    steps{
                          script {
                    def customImage = docker.build("navdeepduvedi/nodeapp:${env.BUILD_ID}")
                    customImage.push()
                    }
                    
                }
                }
            }
        }
        /*stage('Push Image'){
            steps{
                withDockerRegistry([ credentialsId: "docker111", url: "https://registry.hub.docker.com" ]){
                sh "docker push navdeepduvedi/nodeapps:latest"
            }
            }
            

         }*/
}
}
