pipeline {
  agent any

    environment {
        IMAGE = 'node:20-alpine'
    }

    options {
        skipDefaultCheckout(true)
    }

  stages {

    stage('Clean & Checkout') {
      steps {
        cleanWs()
        checkout scm
      }
    }

    stage('Install') {
      agent {
        docker {
          image 'node:20-alpine'
          reuseNode true
        }
      }
      steps {
        sh '''
          set -e
          node --version
          npm ci
        '''
      }
    }

    stage('Build') {
      agent {
        docker {
          image 'node:20-alpine'
          reuseNode true
        }
      }
      steps {
        sh '''
          npm run build
        '''
        stash name: 'dist', includes: 'dist/**'
      }
    }

    stage('Verify Build') {
      agent {
        docker {
          image 'node:20-alpine'
          reuseNode true
        }
      }
      steps {
        unstash 'dist'
        sh '''
          test -f dist/index.html
          echo "✔ Vite build verified"
        '''
      }
    }
  }
}
