---
draft: true
title: "Getting Started"
date: "2021-02-25"
---

### Slack
* [Join Slack](https://join.slack.com/t/webtypespring2021/shared_invite/zt-n1w790sx-0fQR~fSsXuTpKTnjkSToAQ) for class communications

### Github
[GitHub](https://github.com/) is a web-based repository hosting service based on the Git version control and source code management system. GitHub allows individuals and teams of programmers to manage, share, store and make editable revisions to projects. We will be using Github’s code sharing and publishing service to store our class projects. 

* If you don’t have one already, sign up for a [GitHub](https://github.com/) account and make a repository for this class.
	- This will become part of the url for where upload your projects
	- Avoid spaces in the repository name
* Review Git Version control or download [GitHub Desktop Mac client](https://desktop.github.com/), a program that helps you keep track of changes in your code and upload them to your repository.
- See more on [Github Guides](https://guides.github.com/)

### Text Editor
* Download [Sublime Text](https://www.sublimetext.com/3) / [Atom](https://atom.io/) / [Visual Studio Code](https://code.visualstudio.com/)

### Tutorials
* Recordings are up on [Panopto](https://risd.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?embedded=0#folderID=%224db47cb6-f06a-46b1-9d81-acda00f2f8c3%22&view=0)
* Sign up for a free account at [Codecademy](https://www.codecademy.com/)


### Browser
* Assignments will be evaluated in [Chrome](https://www.google.com/chrome/) for its Inspector tools


## Setup access to the demos repository
### Prereqs
- You have a Text Editor installed
- You have Github Desktop installed
- You are signed into Github Desktop
- You are signed into Github.com

Our [demos repository]() contains the code used in the [technical lectures](https://risd.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?embedded=0#folderID=%224db47cb6-f06a-46b1-9d81-acda00f2f8c3%22&view=0).

1. Access the Demos repository on Github.com
2. Hit `Clone` and `Open in Github Desktop`
3. Clone the Demos repository into an easily accessible location on your hard drive (it may be where other Github repos are stored.) By default, Github will use / create a folder called `Github` in your `Documents` folder. Otherwise, select `choose` button, and navigate to the folder where you are keeping your materials for this class and then press the `Open` button. 
4. Once cloning is complete, hit `⇧ + ⌘ + F` (Show in Finder) to verify the location of the demo files.


## Setup your class repository
1. Make sure you’re logged into Github.com create a new repository using the link under the + icon in the upper right of the GitHub homepage. 

2. Name your repository `web-type`.  When you create the repository, check the box to `Initiate with a .README` file. This repository will be the home for all of your assignments and exercises for this class.

3. Once you’ve initialized your repository, it will take you to the home screen of the repository. Click the green button `Clone or Download` and then `Open in Desktop`.

4. When you press this button, it should launch the Github desktop application you downloaded before. (If it doesn’t happen, open the application manually. Login using your new Github account, press the `+` button in the upper left hand corner and navigate to the `Clone` tab.)

5. For the local path, select the parent (containing) directory you selected for your Demos folder. (Do not select the Demos repository folder, select the folder above it.) This way it’ll be easy to find all of your web-type related code and navigate between them. You will find a folder named `web-type`. This is the **local** version of your github repository. Through the course of this semester, we will use this as a space to archive your projects and exercises.


## Create your Class Site Index


### Copy starter files to your own folder
1. Navigate to the `webtype-demos folder` in the Finder on your computer.
2. Open the folder `week-1 > 00_class-site-starter-kit`.
3. Display hidden files using `⇧ + ⌘ + .` for Mac. There should be 2 files: an `index.html` file and a `.gitignore` file. 
4. Copy the contents of that folder into your own repository, your `web-type` folder.
5. If you’d like, you may disable the "show hidden files" feature with `⇧ + ⌘ + .`.

### Make some changes
1. After you’ve transfered the files to your own folder, double click on the `index.html`. It’ll open up on your browser.
2. Notice that the url begins with `file:///`. This is because your browser is referencing a **local** file that lives on your computer.
3. Drag-and-drop your `web-type` folder onto your Text Editor, such as Sublime Text.
4. Open the `index.html` page, and make any change. Try entering in your name into the placeholder texts, and type in `Hello World` in between the `<h2>` tags, like: `<h2> Hello World </h2>`.
5. Save your changes.
6. Navigat back to your browser, and hit refresh.
7. You should see the updates reflected.
8. Once you are happy with your updates, let’s push this to the **remote** server on Github.

### Upload your changes

1. Go back to your Github application. 
2. Confirm you see changes made to your `index.html` file in the `Changes Tab` on the Github app. 
3. You’ll see some empty input fields, one that says `Summary` and the other that says `Description`. In the summary, summarize what you just did. You might say something like `initial commit` or `hello world`. If you want to say more, type it in description, but this is optional. Only the Summary is required — it is a note for your future self. (This can be anything — it is for your own reference as you look back to the history of change for your code.)
6. Then press the `Commit to main` button.
7. In the upper right hand corner of the application, press the `Push` button.

* `commit` : Adds and saves changes to the local repository. Think of it as a snapshot of your code. This does not necessarily push your changes online.
* `push` : Sends your committed changes to a remote repository, such as a repository. You must push your changes for anyone not on your computer to see your webpage!

### Enable Github pages and verify your live site

1. Go to Github.com and navigate to your class repo. It would look along the lines of `https://github.com/yourusername/web-type`. This is a link to the code view of the site.
2. Go to the `Settings` (on the right, above the `Clone` button) and scroll down to `Github Pages`
3. Under `Source`, select `main` and `Save.`
4. This will refresh the page, but scroll back down to that section again. You’ll find a message that says `Your site is ready to be published at [url]`.
5. After the `url` provided should be a live website! This is a link to the **remote** / **live url**.
6. Please post this link to the `#class-sites` channel on Slack.

All future work for this class should happen in your `web-type` folder repository.
It is a good practice to keep your code organized — make a folder for each project. Note, your Github repository should only contain files related to your website — code and web-optimized files that are linked from your sites. It should not contain design files or planning documents, such as `.psd` or `figma` `sketch` files. Github has a `push` size limit and these will quickly eat those up.

