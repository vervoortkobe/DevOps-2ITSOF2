# DevOps Todo-App
This is an easy-to-use todo-webapplication to suit your needs.  
It's easy to install, just clone this repo and run it using **NodeJS**, **Docker** (Nginx & Traefik recommended), **Jenkins** or your own preferred software.
## ✅ Prerequisites
- A Linux VM Server (Debian-based recommended) or your own local computer
- A functioning installation of Docker
- Minimal 2 Domain names (opt.)
- A functioning NodeJS installation (only necessary when running with NodeJS only)
## 📥 Installation
1. Clone the repo (as mentioned before)  
`git clone https://github.com/AP-IT-GH/projectopdracht-vervoortkobe.git`
1. Create a .env file (to store your secrets)  
Copy and/or rename the example.env to `.env` and edit the variables to match your secrets  
## 🏃 Running the project
### Working with NodeJS only
1. Install the required packages using:  
`npm install`
1. Run the project using:  
`npm start`
### 🐋 Working with Docker
1. Build the backend Docker image using:  
/backend > `docker build -t backend .`  
1. Run the project using:  
/ > `docker compose up -d`
### 🎩 Working with Jenkins
1. Setup Jenkins
1. Create a new Pipeline for the project
1. Setup the Pipeline Script
1. Configure the credentials
1. Build the project
## ⚠️ Required Environment Variables
```cs
- MYSQL_DB          # Your database name
- MYSQL_ROOT_PWD    # Your database root password
- MYSQL_USER        # Your database user
- MYSQL_PWD         # Your database user's password
- TODO_HOST         # Your domain name to host the todo-webapplication
```
## ⚙️ Mentioned Technologies
![Static Badge](https://img.shields.io/badge/NodeJS-NodeJs?style=for-the-badge&logo=npm&labelColor=%23565656&color=%2343853d&link=https%3A%2F%2Fnodejs.org)
![Static Badge](https://img.shields.io/badge/Docker-Docker?style=for-the-badge&logo=docker&labelColor=%23262626&color=%232391e6&link=https%3A%2F%2Fdocker.com)
![Static Badge](https://img.shields.io/badge/Jenkins-Jenkins?style=for-the-badge&logo=jenkins&labelColor=%23ffffff&color=d33833&link=https%3A%2F%2Fjenkins.io)
![Static Badge](https://img.shields.io/badge/Nginx-Nginx?style=for-the-badge&logo=nginx&labelColor=%23262626&color=%23009639&link=https%3A%2F%2Fnginx.com)
![Static Badge](https://img.shields.io/badge/ae-Traefik-Traefik?style=for-the-badge&labelColor=%23ef9325&color=%2337abc8&link=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2F)