# 🔠 react-animation-typing-text

See [deployment web page](https://indianapoly.github.io/react-animation-typing-text/)

A customizable React component that displays text with a typewriter-like animation, supporting reveal effects, repeat options, and blinking cursors. Built with React, TypeScript, and Framer Motion.

---

## 🚀 Features

- Typing animation with configurable speed and chunk size
- Optional reveal effects (fade-in)
- Repeat animation with custom delay
- ❘ Blinking cursor support
- ⚡ App Router-compatible static export (`output: 'export'`)

---

## 📦 Installation

```bash
npm install react-animation-typing-text
# or
yarn add react-animation-typing-text
```

You can also copy the source directly from this repo.

## 🧩 Usage

```tsx
import { TypingText } from 'react-animation-typing-text';

export default function App() {
  return (
    <TypingText
      text="Hello, world!"
      intervalSec={100}
      numOfWriteChar={2}
      revealMotionType="fade"
      fadeDuration={0.3}
      shouldRepeat={true}
      shouldRepeatDelayTime={1500}
      showCursor={true}
      cursorChar="|"
    />
  );
}
```

## ⚙️ Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **required** | The full text to animate |
| `numOfWriteChar` | `number` | `1` | Number of characters to reveal per interval |
| `intervalSec` | `number` | **required** | Milliseconds between reveals |
| `revealMotionType` | `"none"` \| `"fade"` | `"none"` | Visual reveal effect |
| `fadeDuration` | `number` \| `null` | `0.3` | Duration of fade-in animation (used when `revealMotionType="fade"`) |
| `shouldRepeat` | `boolean` | `false` | Whether to repeat the animation infinitely |
| `shouldRepeatDelayTime` | `number` | `1000` | Delay (ms) before repeating after the text is fully shown |
| `showCursor` | `boolean` | `false` | Whether to show a blinking cursor |
| `cursorChar` | `string` | `"\|"` | Character to use for cursor (`"\|"`, `"_"`, etc.) |

## 🎨 Styling (Cursor)

By default, the cursor uses `.blinking-cursor`. You can style it in your global CSS:

```css
.blinking-cursor {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
```

## 📄 License

MIT

## 🙋‍♂️ Feedback

PRs and issues are welcome! If you have any cool ideas like typing delays, erasing animation, or user input simulation — feel free to contribute!