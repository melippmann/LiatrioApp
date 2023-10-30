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
  Share GitHub repo in Slack and push changes frequently.