pipeline {
    agent any

    stages {

        stage('Clone Repo') {
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
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
    }
}