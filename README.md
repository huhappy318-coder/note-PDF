# PageLock PDF Marker

一个轻量的 Chrome / Edge Manifest V3 插件，用来在网页里直接划线、记录当前屏，并把勾选后的片段导出为 PDF。

## 当前版本特性

- 点击浏览器插件图标，网页右上角直接出现悬浮工具条
- 开始划线后，选中文字会立刻弹出颜色条
- 点击颜色圆点，文本立即高亮
- 点击删除按钮，只移除插件自己加的高亮
- 点击“记录这一屏”后，当前可见区域会保存为片段
- 片段抽屉支持勾选、删除、直接导出 PDF
- 导出时按片段顺序生成多页 PDF

## 目录结构

```text
src/
  background/
    service-worker.ts
  content/
    index.ts
    overlay.ts
    selection.ts
    highlight.ts
  popup/
    App.tsx
    main.tsx
  preview/
    App.tsx
    main.tsx
  options/
    App.tsx
    main.tsx
  lib/
    capture.ts
    storage.ts
    pdf.ts
    dom-anchor.ts
    types.ts
    utils.ts
  styles/
    variables.css
    content.css
    popup.css
    preview.css
public/
  manifest.json
  icons/
```

## 安装依赖

```bash
npm install
```

## 开发

```bash
npm run dev
```

说明：

- `dev` 会把构建结果持续输出到 `dist/`
- 扩展页不支持热更新，改完代码后刷新扩展即可

## 构建

```bash
npm run build
```

## 本地加载扩展

1. 先执行 `npm run build`
2. 打开 `chrome://extensions` 或 `edge://extensions`
3. 打开开发者模式
4. 点击“加载已解压的扩展程序”
5. 选择项目里的 `dist` 目录

## 使用流程

1. 打开任意网页
2. 点击浏览器顶部的插件图标
3. 网页右上角出现悬浮工具条
4. 点击“开始划线”
5. 选中文字并点颜色圆点
6. 点击“记录这一屏”收集片段
7. 打开“片段”抽屉勾选要导出的内容
8. 点击“导出 PDF”

## 已知限制

- 高度动态页面、无限流页面、复杂电商页不保证 100% 稳定
- 跨域 iframe 内容无法稳定处理
- 标注恢复采用文本上下文匹配，大改版页面可能无法恢复
- 当前版本优先保证“手动记录每一屏”稳定，不包含自动滚动采集
