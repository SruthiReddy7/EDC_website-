# EDC_website-# 
# 🚀 Case StudiesUI

A premium Work / Case Studies UI built using React + Framer Motion, inspired by modern portfolio websites.

---

## ✨ Features

- Dark modern UI
- 5 case study sections
- Smooth scroll animations
- Slow moving (parallax) images
- Hover effects & micro-interactions
- Fully responsive design

---

## 🛠️ Tech Stack

- React (Vite)
- Framer Motion
- CSS / Inline Styles

---

## 📦 Installation

### 1. Create Project

```bash
npm create vite@latest my-portfolio
cd my-portfolio
npm install
```

### 2. Install Dependencies

```bash
npm install framer-motion
```

---

## 📁 Setup

### Step 1: Replace App.jsx

Go to:
```
src/App.jsx
```

Replace the content with the provided code.

---

### Step 2: Run Project

```bash
npm run dev
```

Open in browser:
```
http://localhost:5173
```

---

## 🎨 Fonts

Fonts used:
- DM Mono
- DM Sans

If fonts are not loading, add this to your index.html:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans&display=swap" rel="stylesheet">
```

---

## 🧠 How It Works

### CaseStudyCard
- Each section represents one project
- Left side → text content
- Right side → animated image

---

### Parallax Effect

Images move slowly using:
```
useScroll + useTransform + useSpring
```

---

### Animations

- Fade-in on scroll
- Smooth hover scaling
- Premium easing transitions

---

## ⚙️ Customization

### Change Projects

Edit this array in your code:

```js
const cases = [
  {
    heading: "Your Project",
    body: "Description",
    img: "image-url"
  }
];
```

---

### Adjust Animation Speed

Find this line:

```js
useSpring(rawY, { stiffness: 40, damping: 26 })
```

- Lower stiffness → slower movement
- Higher damping → smoother motion

---

## 📱 Responsive Design

- Desktop → side-by-side layout
- Mobile → stacked layout

---

## 🚀 Build for Production

```bash
npm run build
```

---

## 📌 Notes

- Use optimized images for better performance
- Keep 4–5 projects for best UI appearance

---

## 🧾 License

Free to use for personal portfolio projects.

---

## 🙌 Credits

Inspired by premium portfolio UI designs.
