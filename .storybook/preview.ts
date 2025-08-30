// .storybook/preview.ts
import type { Preview } from '@storybook/react'

// Tailwind のグローバルCSS（パスはあなたのプロジェクトに合わせて）
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true }, // App Router を明示
    actions: { argTypesRegex: '^on.*' },
    controls: { expanded: true },
    layout: 'centered',
  },
}
export default preview
