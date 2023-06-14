# next-theme

Next.js 프레임워크를 사용하는 웹 애플리케이션에서 테마(Theme) 관리를 간편하게 해주는 패키지

(Github)[https://github.com/pacocoursey/next-themes]

## 설치

`npm install next-themes`

### [Next.js 적용](https://github.com/pacocoursey/next-themes#use)

여기서 pages가 아닌 app 디렉토리로 적용했기에 app 디렉토리만 기술

1. `app/providers.jsx` 생성 및 구현

   ```tsx
   // app/providers.jsx
   "use client";

   import { ThemeProvider } from "next-themes";

   export function Providers({ children }) {
     return <ThemeProvider>{children}</ThemeProvider>;
   }
   ```

2. `layout.tsx`에 적용

   ```tsx
   // app/layout.jsx

   import { Providers } from "./providers";

   export default function Layout({ children }) {
     return (
       <html suppressHydrationWarning>
         <head />
         <body>
           <Providers>{children}</Providers>
         </body>
       </html>
     );
   }
   ```

### Tailwind CSS 적용 시 설정

1. `tailwind.config.js` 설정 변경
   ```tsx
   module.exports = {
     darkMode: "class",
   };
   ```
2. `<ThemeProvider>`에 class 추가
   ```tsx
   // pages/_app.js
   <ThemeProvider attribute="class">
   ```

## [사용법](https://github.com/pacocoursey/next-themes#usetheme)

`useState`처럼 쓰면 됨. `darkModeToggleButton.tsx`에서 쓰고 있음.

```tsx
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
```
