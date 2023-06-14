# Tailwind CSS

[github](https://github.com/tailwindlabs/tailwindcss)<br/>
[Docs](https://tailwindcss.com/docs/)

## Install 방법

[Tailwind With Next.JS](https://tailwindcss.com/docs/guides/nextjs)

1. start.md에 있는 Next.JS 기반 개발 환경 설치
2. 라이브러리 설치<br/>
   `npm install -D tailwindcss postcss autoprefixer`<br/>
   `npx tailwindcss init -p`<br/>
   tailwindcss: Tailwind Css의 코어 패키지<br/>
   postcss: Tailwind Css를 우리가 알고 있는 순수 Css로 변환해주는 후처리 css 패키지: css를 위한 babel<br/>
   autoprefixer: 브라우저별로 다르게 지원되는 벤더 프리픽스를 자동으로 넣어주는 패키지<br/>
   postcss-loader: Webpack이 Postcss를 읽어들일 수 있도록 해주는 로더<br/>
3. `tailwind.config.js` 설정

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./components/**/*.{js,ts,jsx,tsx,mdx}",

       // Or if using `src` directory:
       "./src/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

## 사용법

공식페이지나 [Cheet Sheet](https://nerdcave.com/tailwind-cheat-sheet)에 CSS 코드를 입력해 찾아서 Style 적용

1. TSX, JSX에 적용

   ```tsx
   export default function Home() {
     return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
   }
   ```

2. 만약 CSS 파일에 tailwind를 쓴다면
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   body {
     @apply text- ...;
   }
   ```
