pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/arvindyadav-codezilla/nodeapp.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    success {
      echo '✅ Build succeeded.'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}
