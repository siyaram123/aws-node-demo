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
                rsync -av --delete ./ /home/ec2-user/aws-node-demo/
                cd /home/ec2-user/aws-node-demo
                npm install
                pm2 restart aws-node-demo || pm2 start app.js --name aws-node-demo
                '''
            }
        }
    }
}