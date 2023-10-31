# LiatrioApp
This Repository is part of the Liatrio Apprenticeship Interview Exercise

The following steps were taken to set up Git and GitHub:

## GitHub Repository
  Create new dirrectory
  ```
  mkdir LiatrioApp
  ```
  Show directory was created
  ```
  ls
  ``` 
  navigate to the directory
  ```
  cd LiatrioApp
  ```
  initialize git tracking
  ```
  git init
  ```
  log into GitHub, create new repository, set to public, add README.md
  
  Connect local repo to Github repo
  
  ```  
    git remote add origin https://github.com/melippmann/LiatrioApp.git
    git remote show origin
    git remote -v
 ```   
  Want to track upstream as well:
```
  git remote add upstream https://github.com/melippmann/LiatrioApp.git
  git remote -v
  git pull origin main
  ls
  git push -u origin main
  ```
  Edit .md file and make first commit:
  ```
  git add README.md
  git commit -m "Updating markdown file with steps taken to set up git and GitHub for the application"
  git push origin main
```
My authentication failed as my personal access tokens are expired. Walking through creating new access tokens,
```
gh auth status
github.com
  X github.com: authentication failed
  - The github.com token in /home/meher/snap/gh/502/.config/gh/hosts.yml is no longer valid.
  - To re-authenticate, run: gh auth login -h github.com
  - To forget about this host, run: gh auth logout -h github.com

```
read the docs at: 

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github

https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories

https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

running the suggested command:

```
 gh auth login -h github.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: xxxx-xxxx
Press Enter to open github.com in your browser... 
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as melippmann
```
Since I will want to set up GitHub actions late will want to review: 

https://docs.github.com/en/actions/security-guides/automatic-token-authentication

```
git push --set-upstream origin main
```
Share GitHub repo in Slack and push changes frequently.

## Node.js Application
Install Node.js and use Express.js to build a simple single endpoint web applicaiton that returns the following JSON object.:

```
{
    "message": "My name is Meher Lippmann",
    "timestamp": dynamically genearted timestamp
}
```
Having never used Node.js or Express.js

The first thing I will do is peruse 
https://nodejs.org/en/about
and
https://expressjs.com/

I am running on Ubuntu 20.04; will install using apt:

```
sudo apt update
sudo apt install nodejs
node -v

```
```
v12.22.9
```
```
sudo apt install npm
```

I can now install Express.js as described: 

https://expressjs.com/en/starter/installing.html

In the LiatrioApp directory run:

```
npm init
```
This command is used to generate a package.json file for the project
```
package name: (liatrioapp) 
version: (1.0.0) 
description: This is a simple single endpoint web application that returns a JSON object with a message and dynamically set timestamp.
entry point: (index.js)
...
```
Default settings were choosen, though a description and authorship was added.

https://expressjs.com/en/starter/installing.html
```

npm install express
```
and following the "hello world" 
https://expressjs.com/en/starter/hello-world.html
turorial was enough to get the desired app up and running.

## Docker Containerization
using Docker's docs for node.js applications:
https://docs.docker.com/language/nodejs/containerize/

giving docker-desktop a try:
https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

following
https://docs.docker.com/desktop/install/ubuntu/

```
sudo apt install gnome-terminal
sudo apt-get update
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
Download the latest DEB package and install:

```
sudo apt-get update
sudo apt-get install ./docker-desktop-<version>-<arch>.deb

```
Now we can use 

```
docker init
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml

Let's get started!

? What application platform does your project use? Node
? What version of Node do you want to use? 12.22.9
? Which package manager do you want to use? npm
? What command do you want to use to start the app: node app.js
? What port does your server listen on? 80

```
this creates

```
├── docker-nodejs-sample/
│ ├── spec/
│ ├── src/
│ ├── .dockerignore
│ ├── .gitignore
│ ├── compose.yaml
│ ├── Dockerfile
│ ├── package-lock.json
│ ├── package.json
│ └── README.md
```

run with 

```
docker compose up --build
```
navigating to
```
http://localhost:80/
``` 
in the browser demonstrates that it is working
```
ctr+c
```
to shut down.

To run in the background:
```
docker compose up --build -d

```
and to shut down:

```
docker compose down
```