```javascript
function fancyAlert(arg) {
    if(arg) {
        $.facebox({div: '#foo'})
    }
}
```

```python
def sum(a, b):
    return a + b
```

Github steps - New Repository
1. go to Github and create a new repository
2. git init  - creates .git folder in project
3. git add . - Adds all untracked files
4. git commit -m "initial commit" - commits changes
5. Go back to Github repo and copy final 3 lines:
   
git remote add origin https://github.com/CameronStarr7/github-practice.git - Will be different URL for each repo

git branch -M main
git push -u origin main

Updating Github Repository
1. git add .
2. git commit -m "commit message"
3. git push