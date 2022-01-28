# Github commands

## Main commands

In your daily life as a software engineer you probably gonna use less than 5% (it is a guess)
of github commands. For this reason I present below the main commands that you have to know.

### Creating a branch

Assuming that you have an account in github website you can create a repository from the github website.
From your computer you can use the CLI (command line interface).

1. Add files from your local branch

Use . to mark to upload all the files in current folder or type the file name that you want to upload.

```
    git add .
```

2. Git commit

This command is used attach changes that you made locally to the HEAD of the repository with a description.
at Figure-1 commit is when you mark all the green dots to be uploaded to remote.

```
    git commit -m '<a description for this changes>'
```

![Figure 1 - Git commit](https://github.com/leonardogandrade/lifetime-coding/img/git-commit.png)

3. Git push

Push is used to send all the local changes to the remote repository. You must set the branch
that you want to sync, in the example below we're syncing with master branch on remote. Don't worry,
you'll still having your local copy.

```
    git push origin master
```

4. Git branch

Think git as a tree where you have many branches. The same way that you have a trunk in a tree,
you have the master branch in a git structure.
In a real life's project after step 3 you can start you own tasks in the main project. Now you
can create locally a new branch which is derived from the main branch. It lead us to next git
command.

5. Git checkout

Git checkout is used to move through branches, branches are similar to directories or folders.
So you can move to a specif branch and from there create a new one based on the current branch.

```
    git checkout <branch_name>
    git branch -b <new_branch_name>
```

Figure-1 can show us a visual explanation of what we're talking about. The first green dot represent
the exact moment when we used git checkout to create a new branch.

6. Git status

Using git status you can list all all files which was changed. It is a good idea before making a commit
list the files changed the make sure you really want to push this files. Just in case you realize that
don't to push some file take a look at next command.

```
    git status
```

7. Git restore

After list changed files with git status you can restore for the initial state (IT MEANS UNDO ALL THE CHANGES)
a file and do not mark it to be commited.

```
    git restore <file_name>
```

If you just realize that don't want to push a file after mark it as staged, you can use command below to remove
it from the staged list.

```
    git resore --staged <file_name>
```

> I strongly recomend you to use git status before commit and before push your code changes.

8. Git remove

After push a file, maybe you can remove the file from remote, to accomplish that you can use git remove using
cached parameter. Just for exemplify, if you want to remove foo.js use the command below

```
    git remove --cached foo.js
```
