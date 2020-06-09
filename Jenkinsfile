pipeline{
    agent any
    stages{
        stage('Clone repository'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
        
                    steps{
                        sh 'npm install'
                        sh 'npm test'
                    }
                
               
        }
        stage('Docker build and push'){
            steps{
                script{
                def image = docker.build("jenkins-docker-personal/nodeapp:${BUILD_NUMBER}")         
            
                withDockerRegistry([ credentialsId: "Jenkins-docker-personal", url: "https://asia.gcr.io" ]){
                image.push()
            }
            }
            }

         }
}
}
