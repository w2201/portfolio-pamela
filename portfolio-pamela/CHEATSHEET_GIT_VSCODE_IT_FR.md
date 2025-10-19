# Git + VS Code — Mini guida rapida (IT/FR)

## 0) Configurazione iniziale (una volta)
```bash
git config --global user.name "Pamela Timi"
git config --global user.email "la-tua-email@esempio.com"
git config --global init.defaultBranch main
```

## 1) Primo commit locale
```bash
cd portfolio-pamela
git init
git add .
git commit -m "Primo commit"
```

## 2) Crea repo su GitHub
- Vai su GitHub → **New repository** → `portfolio-pamela` (vuoto, senza README).
- Copia l'URL HTTPS del repo.

## 3) Collega e pubblica
```bash
git remote add origin https://github.com/TUO-UTENTE/portfolio-pamela.git
git push -u origin main
```
> Se ti chiede l’accesso, consenti l’accesso di VS Code a GitHub.

## 4) Ciclo quotidiano
```bash
git status
git add .
git commit -m "Descrivi cosa hai fatto"
git push
```

## 5) Se il repo remoto ha già un README
```bash
git pull origin main --rebase
git push
```

---

# FR
## 0) Configuration initiale (une fois)
```bash
git config --global user.name "Pamela Timi"
git config --global user.email "votre-email@exemple.com"
git config --global init.defaultBranch main
```

## 1) Premier commit local
```bash
cd portfolio-pamela
git init
git add .
git commit -m "Premier commit"
```

## 2) Créer le dépôt sur GitHub
- GitHub → **New repository** → `portfolio-pamela` (vide, sans README).
- Copiez l’URL HTTPS du dépôt.

## 3) Lier et publier
```bash
git remote add origin https://github.com/VOTRE-UTILISATEUR/portfolio-pamela.git
git push -u origin main
```

## 4) Boucle quotidienne
```bash
git status
git add .
git commit -m "Décrivez ce que vous avez fait"
git push
```

## 5) Si le dépôt distant possède déjà un README
```bash
git pull origin main --rebase
git push
```
