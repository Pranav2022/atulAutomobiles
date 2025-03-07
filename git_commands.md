# Git Commands

## Add Remote Origin
```sh
git remote add origin <repository-url>
```

## Check Remote Origin
```sh
git remote -v
```

## Rename Master Branch
```sh
git branch -m master <new-branch-name>
```

### Example: Rename master to main
```sh
git branch -m master main
git push origin -u main
git push origin --delete master
```
