
# Medicine-Dosage-and-Sleep-Tracker

A webapp to track your Medicine schedule and remind you as well as sleep tracking

  

## Features Planned

- User Sign in and Log in.

- Home Page.

- Medicine Tracking

- Next Appointment with Doctor

- Sleep Tracking

- Graph libraries to visualize data

- Email and SMS to remind them of schedule

  

## Guidelines

Create a new feature branch

Run git checkout -b <your-feature-branch>

For branch-name follow the following convention:

name--feature-title

Eg: dhruvil-homepage

Commit and push all changes to your **feature branch**

    git add .
    
    git commit -m “message”
    
    git push -u origin <your-feature-branch>

From time to time pull all changes from the master branch and merge them to your branch. (you don’t have to do this step, but you might end up with merge conflicts when you set up a PR if you don’t)

> Run git checkout master
> 
> Run git pull origin master
> 
> Run git checkout <your-feature-branch>
> 
> Run git merge master

If there are any merge conflicts, resolve them

Once you have completed a task and tested it, set up a Pull Request and have at least 1 member review your code. Make sure you test your code before requesting reviews.

Once your code has been reviewed and approved, merge it to master and delete the remote feature branch branch

Update your master branch with the latest changes

git checkout master

git pull origin master

Delete your local feature branch

git branch --delete <your-feature-branch>