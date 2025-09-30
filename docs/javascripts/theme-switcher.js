/**
 * 主题切换器 - 支持多种皮肤和字号切换
 * 医美心理学项目专用
 */

// 主题切换器功能
function initThemeSwitcher() {
    const themes = {
        'elegant-blue': {
            name: '优雅蓝调',
            description: '专业医疗风格，沉稳可信',
            primary: '#5B7C99',
            secondary: '#B8860B',
            accent: '#7A9BB8'
        },
        'warm-rose': {
            name: '温润玫瑰',
            description: '温暖亲和风格，舒适自然',
            primary: '#C4A484',
            secondary: '#D4A574',
            accent: '#E8C5A0'
        },
        'fresh-green': {
            name: '清新绿意',
            description: '自然健康风格，清新舒缓',
            primary: '#6B8E6B',
            secondary: '#8FBC8F',
            accent: '#98D982'
        },
        'noble-purple': {
            name: '高贵紫韵',
            description: '优雅高贵风格，神秘魅力',
            primary: '#8B7EC8',
            secondary: '#B19CD9',
            accent: '#DDA0DD'
        },
        'modern-gray': {
            name: '现代灰调',
            description: '简约现代风格，专业干练',
            primary: '#708090',
            secondary: '#9370DB',
            accent: '#B0C4DE'
        }
    };

    const fontSizes = {
        'small': {
            name: '小号字体',
            description: '适合阅读密集内容',
            baseSize: '14px',
            scale: 0.875
        },
        'medium': {
            name: '中号字体',
            description: '标准阅读体验',
            baseSize: '16px',
            scale: 1
        },
        'large': {
            name: '大号字体',
            description: '舒适阅读体验',
            baseSize: '18px',
            scale: 1.125
        }
    };

    let currentTheme = localStorage.getItem('theme') || 'elegant-blue';
    let currentFontSize = localStorage.getItem('fontSize') || 'medium';

    // 创建主题面板
    function createThemePanel() {
        // 检查是否已存在面板
        if (document.querySelector('.theme-switcher-panel')) {
            return;
        }

        const panel = document.createElement('div');
        panel.className = 'theme-switcher-panel';
        panel.innerHTML = `
            <button class="theme-toggle-btn" title="主题设置" type="button">
                🎨
            </button>
            <div class="theme-switcher-content">
                <div class="theme-section">
                    <h3>🎨 选择皮肤</h3>
                    <div class="theme-options">
                        ${Object.entries(themes).map(([key, theme]) => `
                            <div class="theme-option ${key === currentTheme ? 'active' : ''}" 
                                 data-theme="${key}">
                                <div class="theme-preview" style="background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});">
                                    <div class="theme-accent" style="background: ${theme.accent};"></div>
                                </div>
                                <div class="theme-info">
                                    <div class="theme-name">${theme.name}</div>
                                    <div class="theme-desc">${theme.description}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="font-section">
                    <h3>📝 字号大小</h3>
                    <div class="font-options">
                        ${Object.entries(fontSizes).map(([key, font]) => `
                            <div class="font-option ${key === currentFontSize ? 'active' : ''}" 
                                 data-font="${key}">
                                <div class="font-preview" style="font-size: ${font.baseSize};">Aa</div>
                                <div class="font-info">
                                    <div class="font-name">${font.name}</div>
                                    <div class="font-desc">${font.description}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="theme-actions">
                    <button class="reset-btn" type="button">恢复默认</button>
                    <button class="close-btn" type="button">关闭面板</button>
                </div>
            </div>
        `;

        document.body.appendChild(panel);
    }

    // 绑定事件
    function bindEvents() {
        const panel = document.querySelector('.theme-switcher-panel');
        if (!panel) return;

        const toggleBtn = panel.querySelector('.theme-toggle-btn');
        const closeBtn = panel.querySelector('.close-btn');
        const resetBtn = panel.querySelector('.reset-btn');

        // 切换面板显示
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                panel.classList.toggle('open');
            });
        }

        // 关闭面板
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                panel.classList.remove('open');
            });
        }

        // 点击外部关闭
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target)) {
                panel.classList.remove('open');
            }
        });

        // 主题选择
        panel.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = option.dataset.theme;
                if (theme) {
                    selectTheme(theme);
                }
            });
        });

        // 字号选择
        panel.querySelectorAll('.font-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const fontSize = option.dataset.font;
                if (fontSize) {
                    selectFontSize(fontSize);
                }
            });
        });

        // 重置设置
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                resetToDefault();
            });
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey) {
                switch (e.key) {
                    case 'T':
                        e.preventDefault();
                        panel.classList.toggle('open');
                        break;
                    case '1':
                        e.preventDefault();
                        selectFontSize('small');
                        break;
                    case '2':
                        e.preventDefault();
                        selectFontSize('medium');
                        break;
                    case '3':
                        e.preventDefault();
                        selectFontSize('large');
                        break;
                }
            }
        });
    }

    // 选择主题
    function selectTheme(themeKey) {
        if (!themes[themeKey]) return;

        currentTheme = themeKey;
        applyTheme(themeKey);
        localStorage.setItem('theme', themeKey);

        // 更新UI状态
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.toggle('active', option.dataset.theme === themeKey);
        });

        // 显示切换提示
        showNotification(`已切换到 ${themes[themeKey].name}`);
    }

    // 选择字号
    function selectFontSize(fontKey) {
        if (!fontSizes[fontKey]) return;

        currentFontSize = fontKey;
        applyFontSize(fontKey);
        localStorage.setItem('fontSize', fontKey);

        // 更新UI状态
        document.querySelectorAll('.font-option').forEach(option => {
            option.classList.toggle('active', option.dataset.font === fontKey);
        });

        // 显示切换提示
        showNotification(`已切换到 ${fontSizes[fontKey].name}`);
    }

    // 应用主题
    function applyTheme(themeKey) {
        const theme = themes[themeKey];
        if (!theme) return;

        const root = document.documentElement;

        // 应用主题色彩
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--secondary-color', theme.secondary);
        root.style.setProperty('--primary-light', lightenColor(theme.primary, 20));
        root.style.setProperty('--primary-dark', darkenColor(theme.primary, 20));
        root.style.setProperty('--secondary-light', lightenColor(theme.secondary, 20));
        root.style.setProperty('--secondary-dark', darkenColor(theme.secondary, 20));

        // 应用透明度变体
        root.style.setProperty('--primary-alpha', hexToRgba(theme.primary, 0.08));
        root.style.setProperty('--secondary-alpha', hexToRgba(theme.secondary, 0.08));

        // 更新渐变
        root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`);
        root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${theme.secondary} 0%, ${lightenColor(theme.secondary, 20)} 100%)`);

        // 添加主题类名
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${themeKey}`);
    }

    // 应用字号
    function applyFontSize(fontKey) {
        const font = fontSizes[fontKey];
        if (!font) return;

        const root = document.documentElement;

        // 应用基础字号
        root.style.setProperty('--base-font-size', font.baseSize);
        root.style.setProperty('--font-scale', font.scale);

        // 计算各级标题大小
        const scale = font.scale;
        root.style.setProperty('--h1-size', `${2.5 * scale}rem`);
        root.style.setProperty('--h2-size', `${2 * scale}rem`);
        root.style.setProperty('--h3-size', `${1.5 * scale}rem`);
        root.style.setProperty('--h4-size', `${1.25 * scale}rem`);
        root.style.setProperty('--h5-size', `${1.125 * scale}rem`);
        root.style.setProperty('--h6-size', `${1 * scale}rem`);

        // 应用到body
        document.body.style.fontSize = font.baseSize;

        // 添加字号类名
        document.body.className = document.body.className.replace(/font-size-\w+/g, '');
        document.body.classList.add(`font-size-${fontKey}`);
    }

    // 重置到默认
    function resetToDefault() {
        selectTheme('elegant-blue');
        selectFontSize('medium');
        showNotification('已恢复默认设置');
    }

    // 显示通知
    function showNotification(message) {
        // 移除现有通知
        const existing = document.querySelector('.theme-notification');
        if (existing) {
            existing.remove();
        }

        // 创建新通知
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.textContent = message;

        // 添加通知样式
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color, #5B7C99);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;

        document.body.appendChild(notification);

        // 显示动画
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);

        // 自动隐藏
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 2000);
    }

    // 工具函数
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function lightenColor(hex, percent) {
        const num = parseInt(hex.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    function darkenColor(hex, percent) {
        const num = parseInt(hex.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
            (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
            (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
    }

    // 初始化
    createThemePanel();
    applyTheme(currentTheme);
    applyFontSize(currentFontSize);
    bindEvents();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 延迟初始化，确保其他脚本加载完成
    setTimeout(initThemeSwitcher, 100);
});