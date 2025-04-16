The error you're seeing:

```
Selector is not pure (pure selectors must contain at least one local class or id), (lightningcss, Selector(p, specificity = 0x1))
```

is coming from **Turbopack**, which is the new bundler used in **Next.js 13+ (App Router)**. It has **stricter CSS Module rules** compared to Webpack.

---

### 🔍 Why This Error Happens

In **CSS Modules**, all styles must be **scoped locally** — meaning you cannot use **global selectors** like `body` or `p` directly. When you do:

```css
body {
  background-color: purple;
}

p {
  color: lime;
}
```

Turbopack throws an error because these are **global selectors** and CSS Modules are meant to be used with local class or ID selectors only.

---

### ✅ Fix Options

#### ✅ Option 1: Convert to local styles

Use class-based styles (recommended for CSS Modules):

```css
/* home.module.css */
.title {
  font-family: cursive;
  font-size: 2rem;
}

.paragraph {
  color: lime;
}

.container {
  background-color: purple;
}
```

Then in your `page.js`:

```jsx
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome!</h1>
      <p className={styles.paragraph}>Styled with CSS Modules</p>
    </div>
  );
}
```

---

#### ✅ Option 2: Use global styles

If you **want to style `body`, `p`, or global tags**, create a **global CSS file** like `globals.css` (typically inside `app/globals.css`) and import it in your root layout (`layout.js`):

```css
/* app/globals.css */
body {
  background-color: purple;
}

p {
  color: lime;
}
```

And in `app/layout.js`:

```jsx
import './globals.css';

export const metadata = {
  title: 'My App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### 🔁 Summary

| Problem        | Solution                                   |
|----------------|--------------------------------------------|
| Global selectors in CSS Modules | Move to global CSS or convert to class-based styles |
| Using `body`, `p`, `h1`, etc. | Only allowed in global styles (`globals.css`) |
| Want to keep everything in modules | Use `.container`, `.paragraph`, etc. instead of `body`, `p` |

Let me know if you want help refactoring your CSS or component!