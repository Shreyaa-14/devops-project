pipeline {
    agent any

    environment {
        DEPLOY_PATH = "C:\\deploy"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository from GitHub..."
                git branch: 'main', url: 'https://github.com/Shreyaa-14/devops-project'
            }
        }

        stage('Validate Files') {
            steps {
                echo "Validating project files..."
                script {
                    if (!fileExists('index.html')) {
                        error "index.html not found — build stopped."
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo "Static website detected — skipping compilation"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying website to ${DEPLOY_PATH}..."
                bat """
                    if not exist ${DEPLOY_PATH} mkdir ${DEPLOY_PATH}
                    xcopy * ${DEPLOY_PATH} /Y /E /I
                """
            }
        }
    }

    post {
        success {
            echo "🚀 Deployment Successful!"
        }
        failure {
            echo "❌ Build / Deployment Failed. Check the console logs."
        }
    }
}
