# WHAT IS GIT?
Git allows us to interact with our github account/repositories and perform series of operations such as cloning, committing, pull, push collaboration, branch, merging etc

Git can either be done via the Git Bash (Command Prompt) or VS Code.



# Steps in linking a project with GitHub repository

1. Create an account or login to your GitHub account via www.github.com
2. Create a GitHub repository with the name of the project
3. Install GitBash software on your computer - search on google for 'Git Bash Download'
4. Right click on the project folder to be linked with the repo and select “GitBash Here”, a command prompt window will open
5. Configure your username and email by running the following command
- git config –-global user.name “enter your github username”
- Git config --global user.email “enter the email address used for github”
6. Now lets proceed to link our project with our repository by running the following command step by step
- git init
- git add –A
- git commit -m “Add a comment of your commit“
- git remote add origin pasteLinkOfRepository
- git push origin master
At this point, if you are using GitBash for the first time on your pc you will be required to sign in using your personal access token
7. Generate your personal access token by going into the settings of your GitHub account, then select Developer settings, then select Personal access tokens and click Generate new token
8. Enter a Note or description for the token being generated – you can just simply type Repo access
9. Select scopes by ticking the checkbox of “Repo” then scroll down and click Generate token
10. Copy the access token and paste it somewhere for future use, and head back and paste the access token in the GitHub Sign up window
At this point your project would be pushed to the github repository you created
11. When changes are made to your project you can update your github repository with those changes via gitbash by following the steps outlined below



# To update/upload a new file to the repository using GitBash

In order to add or update a file in your repository, the following commands are used:
- git add "filename" (this keeps track of the file to be uploaded or updated) or git add . (this adds or commits all your files)
- git commit -m “Description" (this commits the file to be uploaded or updated)
- git push

NB: It should be noted that you cannot push to someone else repository unless you have been given the privilege to, you can only clone.



# Cloning a GitHub repository using GitBash

In order to clone a repository, the following command is used:
- git clone repositorylink.git
Eg:
git clone https://github.com/githubusername/repo.git

Where:
githubusername is the username of the github account
repo.git is the repository to be clonned

NB: In cloning, you first enter the folder on your pc you want to clone the repository into and right click and select "GitBash Here“ (Note that the option for “GitBash Here” will only appear if you have installed Git on your system)



# To get up-to-date files from the repository using GitBash

In order to get up-to-date/previous/later version of a repository, the following command is used:
- git pull



# VS code - How to push a project from vscode to github (to link a repository with vscode)

Our VS Code editor can also be used to create a linkage to our GitHub repository. Our website contents would be transferred into our GitHub repository through our VS Code

Steps:
1. Create a new repository for your project on GitHub
2. Open the project you want to upload in Vscode
3. Configure user.name and user.email if it hasn't been done previously – refer to the process above
4. Initialize Repository from the source control tab of vs code
5. Link repository to vs code: view => Command Palette => Git:Add Remote (Enter URL of repository, enter a remote name)
6. Push the contents of website to the repository from source control tab: Enter commit message => Commit => Publish Branch
7. At this point you may be required to sign into your git account using your browser or with vs code, choose your browser and sign in with your registered github password, enter verification code sent to your email and authorize process. If asked for access token, follow same process as outlined in the GitBash method.

NB: When changes are made to your website and you want to update it online or in the repository, you: Enter commit message => Commit => Push



# VS code - Cloning a repository from github

Step:
1. Go the VSCode: View, Command Palette, Git: Clone (Enter the repository url (ensure it ends with the extension of .git) and select a folder where you want to clone the files)

Note: You can follow same process to clone the repository of someone else



