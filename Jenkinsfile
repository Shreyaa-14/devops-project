pipeline {
    agent any

    environment {
        DEPLOY_PATH = "C:\\deploy"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "📥 Cloning repository from GitHub..."
                git branch: 'main', url: 'https://github.com/Shreyaa-14/devops-project.git'
            }
        }

        stage('Validate Files') {
            steps {
                echo "🔎 Validating project files..."
                script {
                    if (!fileExists('index.html')) {
                        error "❌ index.html not found — stopping pipeline."
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "🚚 Deploying website to ${DEPLOY_PATH}..."
                bat """
                    if not exist ${DEPLOY_PATH} mkdir ${DEPLOY_PATH}
                    xcopy . ${DEPLOY_PATH} /Y /E /I
                """
            }
        }
    }

    post {
        success {
            echo "🚀 Deployment Successful! Your website has been updated."
        }
        failure {
            echo "❌ Pipeline Failed. Please check Jenkins logs."
        }
    }
}
