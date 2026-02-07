# Create GitHub repo and push (one-time)

GitHub CLI is not installed, so create the repo on GitHub, then push from here.

## 1. Create the repo on GitHub

1. Open: **https://github.com/new**
2. Set **Repository name:** `Regulon-LandingPage`
3. Set **Description (optional):** e.g. `Landing page for Regulon — Product File compliance for Israeli importers (Code 65)`
4. Choose **Public**
5. Do **not** check "Add a README" (you already have one locally)
6. Click **Create repository**

## 2. Add remote and push (from project folder)

In PowerShell, from `c:\Users\kraff\Desktop\Regulon`:

```powershell
git remote add origin https://github.com/drkraff/Regulon-LandingPage.git
git branch -M main
git push -u origin main
```

If GitHub prompts for auth, use a **Personal Access Token** (Settings → Developer settings → Personal access tokens) as the password, or sign in via browser if you use credential manager.

## 3. Verify

- Repo: **https://github.com/drkraff/Regulon-LandingPage**
- After push, your README and PRD will appear there.
