pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                mkdir -p /home/ec2-user/aws-node-demo

                rsync -av --delete \
                --exclude=node_modules \
                ./ /home/ec2-user/aws-node-demo/

                cd /home/ec2-user/aws-node-demo

                npm install

                pm2 restart aws-node-demo || pm2 start app.js --name aws-node-demo

                pm2 save
                '''
            }
        }
    }
}