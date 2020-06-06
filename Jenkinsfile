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
                          
                     sh "docker build -t navdeepduvedi/nodeapp"
                    //customImage.push()
                    
                    
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
