# Auto QA Reporter

Auto QA Reporter is a web-based application designed to simulate automated quality assurance reporting. The application demonstrates backend integration, containerization, and CI/CD pipeline implementation using modern DevOps tools.

## Features

* Web interface for QA reporting
* Backend server using Node.js
* MongoDB integration
* Containerized using Docker
* Multi-container orchestration using Docker Compose
* CI/CD pipeline using Jenkins

## Tech Stack

* Node.js
* Docker
* Docker Compose
* Jenkins
* MongoDB

## Project Structure

* server.js – Backend server
* Dockerfile – Application container configuration
* docker-compose.yml – Multi-container setup
* Jenkinsfile – CI/CD pipeline definition
* Dockerfile.jenkins – Custom Jenkins environment with Docker support

## CI/CD Pipeline

The Jenkins pipeline performs the following steps:

1. Clones the repository from GitHub
2. Builds the Docker image
3. Runs the application using Docker Compose

This setup simulates a real-world DevOps workflow for continuous integration and deployment.

## How to Run

### Using Docker Compose

```
docker-compose up --build
```

### Access Application

```
http://localhost:5000
```

### Jenkins (Local Setup)

```
http://localhost:8080
```

## Notes

This project demonstrates a complete DevOps workflow including containerization and CI/CD automation using Jenkins.
