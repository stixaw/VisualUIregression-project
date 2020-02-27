def branch = BRANCH_NAME.replaceAll('/', '-')
def is_master = false
def is_pr = false

if (branch == "master") {
  is_master = true
}
if(branch.contains('PR-')){
  is_pr = true
}


pipeline {
  agent any
  stages {
    stage('Pull Bitbucket Repository'){
      steps {
        checkout scm
        nodejs('node v10') {
          sh 'echo "branch: $BRANCH_NAME"'
          sh 'npm -v'
          sh 'node -v'
        }
      }
    }
    stage('Install Dependencies') {
      when {
        expression { return "$BRANCH_NAME" ==~ /^(feature|PR|master).*/}
      }
      steps {
        nodejs('node v10') {
          sh 'npm ci'
        }
      }
    }
    stage('Run Lint'){
      when {
        expression { return "$BRANCH_NAME" ==~ /^(feature|master).*/}
      }
      steps {
        nodejs('node v10') {
          sh 'npm run lint'
        }
      }
    }
    stage('Run Unit Tests'){
      when {
        expression { return "$BRANCH_NAME" ==~ /^(feature|master).*/}
      }
      steps {
        nodejs('node v10') {
          sh 'npm run test'
        }
      }
    }
    stage('Run UI Tests'){
      when {
        expression { return "$BRANCH_NAME" ==~ /^(PR).*/}
      }
      steps {
        sh 'make test'
      }
    }
    stage('Build Artifact'){
      when {
        expression { return "$BRANCH_NAME" ==~ /master/}
      }
      steps {
        nodejs('node v10') {
          sh 'npm run build --if-present'
        }
      }
    }
    stage('Publish NPM Package'){
      when {
        expression { return "$BRANCH_NAME" ==~ /master/}
      }
      environment{
        NPM_REGISTRY = 'https://registry.common.aws.chgit.com'
        NPM_SCOPE = '@chg'
        NPM_USER = credentials('npm-user')
        NPM_PASS = credentials('npm-password')
        NPM_EMAIL = credentials('npm-user-email')
      }
      steps {
        nodejs('node v10') {
          sh 'npm publish'
        }
      }
    }

    stage('Publish Storybook'){
      when {
        expression { return "$BRANCH_NAME" ==~ /master/}
      }

      steps {
        sh 'aws s3 sync ./dist/storybook s3://chg-pde-component-library'
      }
    }
  }
}
