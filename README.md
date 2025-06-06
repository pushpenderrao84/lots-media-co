# LOTS Media – Website Front-End  
Welcome to the public code-base for the **LOTS Media** portfolio & service site.

---

## ✨ Main Features
| Area | What’s Included |
|------|-----------------|
| ✉️ **Smart Forms** | Contact, Booking, Feedback and Newsletter forms wired to **EmailJS** (no backend required). |
| 🎨 **Design System** | Built with **shadcn-ui** components + **Tailwind CSS** tokens for consistent theming. |
| ⚡ **Vite + React 18** | Instant dev-server reloads, TypeScript typing and code-splitting out-of-the-box. |
| 📱 **Fully Responsive** | Mobile-first layouts, dark-mode ready, motion-safe animations. |
| 🛡 **Spam-Safe** | Client-side validation, toasts for success/error, optional reCAPTCHA drop-in. |

---

## 🛠 Local Development

> **Prerequisite:** Node ≥ 18 with npm. We recommend managing Node via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```bash
# 1 Clone your repo (replace with your Git URL)
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2 Install deps
npm install

# 3 Create an .env file
cp .env.example .env
# ⇢ Add your EMAILJS_SERVICE_ID, TEMPLATE_ID & PUBLIC_KEY

# 4 Start dev server
npm run dev
