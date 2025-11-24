pipeline {
    agent any

    environment {
        DEPLOY_PATH = "C:\\deploy"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "📥 Cloning repository from GitHub..."
                git branch: 'main', url: 'https://github.com/Shreyaa-14/devops-project'
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

        stage('Build') {
            steps {
                echo "⚙️ Static website — no build step required."
            }
        }

        stage('Deploy') {
            steps {
                echo "🚚 Deploying website to ${DEPLOY_PATH}..."
                bat """
                    if not exist ${DEPLOY_PATH} mkdir ${DEPLOY_PATH}
                    xcopy *.html ${DEPLOY_PATH} /Y /E /I
                    xcopy css ${DEPLOY_PATH}\\css /Y /E /I
                    xcopy js ${DEPLOY_PATH}\\js /Y /E /I
                    xcopy images ${DEPLOY_PATH}\\images /Y /E /I
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
