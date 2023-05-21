pipeline {
    agent any
    triggers { pollSCM('* * * * *') }
    stages {

        stage('Configure node') {
            steps {
                nodejs('node v18') {
                    sh 'npm --version'
                }
            }
        }

        stage('install dependencies') {
            steps {
                nodejs('node v18') {
                    sh 'npm ci'
                }
            }
        }

        stage('run app') {
            steps {
                nodejs('node v18') {
                    sh 'npm start'
                }
            }
        }

    }

}