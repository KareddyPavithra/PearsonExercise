# Technical Support System

## Overview
The Technical Support System is a web application designed to manage and track support requests submitted by users.

## Features
* Submit Support Request
* View Support Requests
* User-friendly interface

## Technologies Used
* Backend: Java, Spring Boot, Spring Data JPA, Maven
* Frontend: React, Javascript, Bootstrap
* Database: PostgreSQL

## Prerequisites:
* JDK 11 or higher
* Node.js
* npm 
* PostgreSQL

## Steps to run the application
### Backend:
* Clone the repository
* Create a PostgreSQL database named 'support_requests'
* Update application.properties with your database credentials

* Build and run:
* mvn clean install 
* mvn spring-boot:run

The backend should start running on 'http://localhost:8080'

### Frontend:
* cd frontend
* npm install
* npm start

The frontend should start running on 'http://localhost:3000'

### Screenshots of the application:

Submit Requests Page

![Submit requests.png](Screenshots%2FSubmit%20requests.png)

Data is being entered to submit the request

![Submitt requestss.png](Screenshots%2FSubmitt%20requestss.png)

View Requests Page

![View Requests.png](Screenshots%2FView%20Requests.png)

Validation Check

![Due date validation.png](Screenshots%2FDue%20date%20validation.png)
