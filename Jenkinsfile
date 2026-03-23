pipeline {

	agent any

	tools{
		nodejs 'NodeJS'
	}
	
    stages {
		stage{
			steps{
				cleanWs()
			}
		}

		// stage('Check Tools') {
  //           steps {
  //               sh '''
  //                   node -v
  //                   npm -v
  //                   git --version
  //               '''
  //           }
  //       }
       

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/akashn1993/PWTemplate.git',
                    credentialsId: 'github-credentials'
            }
        }

  //      stage('Validate') {
  //           steps {
  //               script {
  //                   sh 'ls -la'
  //               }
  //           }
		// }

        stage('Install Dependencies') {
            steps {
                sh '''
					npm ci
                    npm install
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                    npx playwright test
                '''
            }
        }

        stage('Publish Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
	}
    

    post {
        always {
            echo 'Pipeline completed'
        }
        success {
            echo 'Tests Passed ✅'
        }
        failure {
            echo 'Tests Failed ❌'
        }
    }
}
