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
                    sudo -u ec2-user pm2 restart aws-node-demo || \
                    sudo -u ec2-user pm2 start app.js --name aws-node-demo
                '''
            }
        }
    }
}