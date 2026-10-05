pipeline {
  agent any

  environment {
    AWS_REGION = 'ap-south-1'
    ACCOUNT_ID = '280768229384'
    ECR        = "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
    TAG        = "${env.BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('ECR Login') {
      steps {
        sh 'aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR'
      }
    }

    stage('Build Images') {
      steps {
        sh '''
          docker build -t $ECR/streamingapp-auth:$TAG backend/authService
          docker build -t $ECR/streamingapp-streaming:$TAG -f backend/streamingService/Dockerfile backend
          docker build -t $ECR/streamingapp-admin:$TAG -f backend/adminService/Dockerfile backend
          docker build -t $ECR/streamingapp-chat:$TAG -f backend/chatService/Dockerfile backend
          docker build -t $ECR/streamingapp-frontend:$TAG frontend
        '''
      }
    }

    stage('Push Images') {
      steps {
        sh '''
          for s in auth streaming admin chat frontend; do
            docker push $ECR/streamingapp-$s:$TAG
          done
        '''
      }
    }
  }

  post {
    always { sh 'docker image prune -f' }
  }
}
