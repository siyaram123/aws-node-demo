pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    pm2 delete aws-node-demo || true
                    pm2 start app.js --name aws-node-demo
                '''
            }
        }
    }
}