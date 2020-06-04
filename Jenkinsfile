def app 

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
                     env.app =  sh 'docker build -t navdeepduvedi/nodeapps .'
                    }
                }
            }
        }
        stage('Push Image'){
            steps{
                docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            env.app.push("${env.BUILD_NUMBER}")
            env.app.push("latest")  
            }
            }
            

         }
}
}
