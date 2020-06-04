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
                        sh 'docker build -t navdeepduvedi/nodeapp .'
                    }
                }
            }
        }
       /* stage('Push Image'){
            docker.withRegistry('https://registry.hub.docker.com','docker-cred'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")  
            }
         }*/
}
}
