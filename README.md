# MEQuest Node.js Azure CI/CD Lab

This project is a simple Node.js Express application deployed to Azure App Service using GitHub Actions.

## Application URL

Production URL:

https://abuwawebapp12345.azurewebsites.net

## CI/CD Pipeline

The GitHub Actions workflow is located at:

.github/workflows/deploy.yml

The pipeline performs the following steps:

1. Checks out the repository code.
2. Sets up Node.js.
3. Installs project dependencies using npm install.
4. Runs tests using npm test.
5. Runs the build command if available.
6. Deploys the application to a staging environment first.
7. Requires manual approval before deploying to production.
8. Deploys the approved version to the production Azure App Service.

## Staging and Production Deployment

Because Azure deployment slots require a higher App Service plan, staging was implemented using a separate Azure App Service. The GitHub Actions workflow deploys first to the staging App Service. After testing the staging URL, the production deployment waits for manual approval through GitHub Environments before deploying to the production App Service.

The staging App Service was later deleted after completing the lab to avoid unnecessary cost, while the production App Service remains active on the Free F1 App Service Plan.

## GitHub Secret Used

The repository uses the following GitHub Actions secret:

AZURE_CREDENTIALS

This secret allows GitHub Actions to authenticate with Azure and deploy the application to Azure App Service.

## Technologies Used

- Node.js
- Express.js
- GitHub Actions
- Azure App Service
- Azure CLI

## Deployment Summary

The project demonstrates a CI/CD workflow where code changes pushed to the main branch automatically trigger GitHub Actions. The workflow builds and tests the Node.js application, deploys it to a staging environment, and then requires manual approval before deploying to production.
