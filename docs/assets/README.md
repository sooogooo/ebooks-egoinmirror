# 资源文件使用指南

## 📁 文件夹结构

```
docs/
├── images/                 # 图片资源总目录
│   ├── charts/            # 图表和数据可视化
│   ├── illustrations/     # 插图和装饰图片
│   └── icons/             # 图标文件
├── assets/                # 静态资源总目录
│   ├── downloads/         # 下载文件
│   └── media/             # 多媒体文件
```

## 🖼️ 图片使用方法

### 在Markdown中引用图片

```markdown
# 基本语法
![图片描述](images/filename.jpg)

# 带链接的图片
[![图片描述](images/filename.jpg)](链接地址)

# HTML语法（更多控制）
<img src="images/filename.jpg" alt="图片描述" width="500">
```

### 图片优化建议

- **格式选择**：
  - 照片：JPEG（.jpg）
  - 图标/简单图形：PNG（.png）
  - 矢量图：SVG（.svg）
  - 动画：GIF（.gif）或WebP（.webp）

- **尺寸建议**：
  - 全宽图片：最大1200px宽
  - 内容图片：600-800px宽
  - 图标：64px-128px
  - 缩略图：200-300px

- **文件大小**：
  - 单个图片不超过500KB
  - 关键图片可压缩至100KB以下

## 📄 文档资源

### 下载文件

```markdown
# PDF文档
[下载完整版PDF](assets/downloads/complete-book.pdf)

# 工具清单
[医美决策清单](assets/downloads/checklist-decision.pdf)
```

### 多媒体文件

```html
<!-- 音频文件 -->
<audio controls>
  <source src="assets/media/chapter-audio.mp3" type="audio/mpeg">
  您的浏览器不支持音频播放。
</audio>

<!-- 视频文件 -->
<video controls width="100%">
  <source src="assets/media/explanation-video.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>
```

## 🎨 图表和可视化

### 推荐工具
- **图表制作**：Canva、Figma、Adobe Illustrator
- **数据可视化**：Chart.js、D3.js、Python matplotlib
- **流程图**：Draw.io、Lucidchart、Mermaid

### 样式建议
- 使用网站配色方案：
  - 主色：#5B7C99（优雅蓝灰）
  - 辅色：#B8860B（温润玫瑰金）
  - 文字：#2D3748（深灰）

## 📝 文件命名规范

### 图片文件
```
# 章节相关
chapter-01-mirror-self.jpg
chapter-02-social-comparison.png

# 图表
chart-age-anxiety-statistics.svg
diagram-decision-process.png

# 插图
illustration-brain-psychology.jpg
concept-cognitive-bias.png

# 图标
icon-brain.svg
icon-heart.png
```

### 文档文件
```
# PDF文档
chapter-01-complete.pdf
checklist-medical-beauty-decision.pdf

# 多媒体
audio-chapter-01-narration.mp3
video-psychology-explanation.mp4
```

## 🔧 技术要求

### 图片优化
```bash
# 使用ImageOptim、TinyPNG等工具压缩图片
# 或使用命令行工具
imageoptim *.jpg *.png
```

### 响应式图片
```html
<!-- 响应式图片 -->
<picture>
  <source media="(max-width: 768px)" srcset="images/mobile-version.jpg">
  <source media="(min-width: 769px)" srcset="images/desktop-version.jpg">
  <img src="images/default-version.jpg" alt="描述">
</picture>
```

## 📊 SEO优化

### 图片SEO
- 使用描述性文件名
- 添加alt属性
- 控制文件大小
- 使用适当的图片格式

```markdown
![医美心理学决策流程图 - 展示从心理动机到最终决策的完整过程](images/charts/decision-process-flowchart.svg)
```

## 🚀 部署注意事项

1. **路径检查**：确保所有资源路径正确
2. **文件存在**：部署前检查所有引用的文件都存在
3. **权限设置**：确保Web服务器可以访问资源文件
4. **缓存策略**：为静态资源设置适当的缓存头

## 📞 技术支持

如果在使用资源文件时遇到问题，请联系：
- 邮箱：yuxiaodong@beaucare.org
- 微信：sooogooo