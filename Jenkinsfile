pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/laksh1107/auto-qa-reporter.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t qa-app .'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker run -d -p 5000:5000 qa-app'
            }
        }

        stage('Test API') {
            steps {
                sh 'curl http://localhost:5000/api/results'
            }
        }
    }
}