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
            
                 docker.withRegistry("https://asia.gcr.io","Jenkins-docker-personal"){
                image.push()
            }
            }
            }

         }
}
}
