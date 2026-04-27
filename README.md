# Auto QA Reporter

Auto QA Reporter is a web-based application designed to simulate automated quality assurance reporting workflows. The project demonstrates how modern DevOps practices can be applied to build, containerize, and deploy a full-stack application with CI/CD automation.

It showcases integration between backend services, database storage, container orchestration, and pipeline automation using industry-standard tools.

---

## Features

- Web interface for QA report submission and viewing  
- Backend API built with Node.js and Express  
- MongoDB integration for storing QA reports  
- Containerized application using Docker  
- Multi-container setup using Docker Compose  
- CI/CD pipeline implemented using Jenkins  
- Automated build and deployment workflow  

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Docker  
- Docker Compose  
- Jenkins  
- HTML, CSS, JavaScript  

---

## Architecture Overview

The application follows a containerized DevOps workflow:

1. User interacts with the frontend UI  
2. Backend API processes QA data  
3. Data is stored in MongoDB  
4. Docker manages application containers  
5. Jenkins automates build and deployment pipeline  

---

## Project Structure

auto-qa-reporter/

├── node_modules/  
├── Dockerfile  
├── docker-compose.yml  
├── Jenkinsfile  
├── server.js  
├── package.json  
├── index.html  
└── README.md  

---

## Setup Instructions

### 1. Clone Repository

git clone https://github.com/laksh1107/auto-qa-reporter.git  
cd auto-qa-reporter  

---

### 2. Install Dependencies

npm install  

---

### 3. Run Application Locally

node server.js  

Access application at:  
http://localhost:3000  

---

## Docker Setup

Build image:

docker build -t qa-reporter .  

Run container:

docker run -p 3000:3000 qa-reporter  

---

## Docker Compose (Recommended)

docker-compose up --build  

This will start:

- Backend service  
- MongoDB database  

---

## Jenkins CI/CD Pipeline

The Jenkins pipeline automates:

- Pulling code from GitHub  
- Installing dependencies  
- Building Docker image  
- Running containers  

Pipeline configuration is defined in:

Jenkinsfile  

---

## Use Case

This project simulates a real QA reporting system where:

- Test results are submitted via UI  
- Reports are stored and retrieved dynamically  
- Deployment is automated through CI/CD  
- Containers ensure consistency across environments  

---

## Future Enhancements

- Add authentication and user roles  
- Implement real test case integrations  
- Add reporting dashboard with analytics  
- Integrate cloud deployment (AWS ECS / EC2)  

---

## Author

Lakshya Jain
