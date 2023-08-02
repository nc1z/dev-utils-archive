# How To SSH

Use Case: Developer wants to commit and push code into a different repository on a different github account, on the same device

## Guide

First check if an SSH key exists for your purpose

```bash
ls -al ~/.ssh
```

By default the filenames of public keys are one of the following:
- id_dsa.pub
- id_ecdsa.pub
- id_ed25512.pub
- id_rsa.pub

If there isn't any, you can generate one by running the command

```bash
ssh-keygen -trsa -C your-github-email@email.com
```

Next you can press enter to save the key in the default directory

Once generated, you can run the command

#### Windows:
This copies your ssh key to the clipboard

```bash
clip ~/.ssh/id_rsa.pub
```

#### Linux/Mac:
These displays the key for you to copy

```bash
cat ~/.ssh/id_rsa.pub
```
OR the full directory

```bash
cat /home/your-user-name/.ssh/id_rsa.pub
```

Lastly, go to the github account that you want to be able to push to its repositories

1. Go to settings
2. Under `SSH and GPG keys`
3. Create new SSH key
4. Paste in the key you generated

You’re done! Now you can proceed to push code into another of your github account's repositories.

