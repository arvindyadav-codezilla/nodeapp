@Library('my-shared-lib') _

pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('Arvind@9039431715') // Jenkins credential ID
    IMAGE_NAME = 'arvindyadavcodezilla51200/my-node-app'
  }
  stages {
    stage('Build Docker Image') {
      steps {
        script {
          sh "docker build -t ${IMAGE_NAME}:latest ."
        }
      }
    }
    stage('Login to Docker Hub') {
      steps {
        script {
          sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
        }
      }
    }
    stage('Push Docker Image') {
      steps {
        script {
          sh "docker push ${IMAGE_NAME}:latest"
        }
      }
    }
  }
  post {
    success {
      echo 'Docker image build and push succeeded!'
    }
    failure {
      echo 'Build failed!'
    }
  }
}
