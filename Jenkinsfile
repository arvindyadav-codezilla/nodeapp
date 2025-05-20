@Library('my-shared-lib') _

pipeline {
  agent any

  tools {
    nodejs 'nodejs'
  }

  stages {
    stage('Build Node App') {
      steps {
        script {
          nodeBuild()
        }
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
