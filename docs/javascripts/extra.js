// 自定义JavaScript - 医美心理学网站交互功能

document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滚动效果
    initSmoothScroll();
    
    // 阅读进度条
    initReadingProgress();
    
    // 图片懒加载
    initLazyLoading();
    
    // 搜索增强
    initSearchEnhancement();
    
    // 主题切换动画
    initThemeAnimation();
    
    // 二维码交互
    initQRCodeInteraction();
    
    // 统计分析
    initAnalytics();
});

// 平滑滚动效果
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 阅读进度条
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(142, 154, 175, 0.2);
            z-index: 1000;
            transition: opacity 0.3s ease;
        }
        .reading-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            width: 0%;
            transition: width 0.3s ease;
        }
        .reading-progress.hidden {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // 更新进度
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        
        const progressBarEl = document.querySelector('.reading-progress-bar');
        if (progressBarEl) {
            progressBarEl.style.width = progress + '%';
        }
        
        // 隐藏/显示进度条
        const progressEl = document.querySelector('.reading-progress');
        if (progressEl) {
            if (scrollTop < 100) {
                progressEl.classList.add('hidden');
            } else {
                progressEl.classList.remove('hidden');
            }
        }
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
    
    // 添加懒加载样式
    const style = document.createElement('style');
    style.textContent = `
        img.lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        img.lazy.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// 搜索增强
function initSearchEnhancement() {
    const searchInput = document.querySelector('.md-search__input');
    if (searchInput) {
        // 搜索建议功能
        const suggestions = [
            '医美心理学',
            '认知偏误',
            '社会比较',
            '决策分析',
            '风险评估',
            '营销策略',
            '社交媒体',
            '审美标准',
            '术后心理',
            '理性决策'
        ];
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length > 0) {
                const matches = suggestions.filter(s => 
                    s.toLowerCase().includes(query)
                );
                // 这里可以添加搜索建议显示逻辑
            }
        });
    }
}

// 主题切换动画
function initThemeAnimation() {
    const themeToggle = document.querySelector('[data-md-toggle="__palette"]');
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

// 二维码交互
function initQRCodeInteraction() {
    const qrCodes = document.querySelectorAll('.qr-code img');
    qrCodes.forEach(qr => {
        qr.addEventListener('click', function() {
            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 150);
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
        
        // 添加提示
        const tooltip = document.createElement('div');
        tooltip.className = 'qr-tooltip';
        tooltip.textContent = '点击跳转到企业微信';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
        `;
        
        qr.parentNode.style.position = 'relative';
        qr.parentNode.appendChild(tooltip);
        
        qr.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
        });
        
        qr.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
        });
    });
}

// 统计分析
function initAnalytics() {
    // 页面访问统计
    if (typeof gtag !== 'undefined') {
        gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
    
    // 用户行为跟踪
    trackUserBehavior();
}

// 用户行为跟踪
function trackUserBehavior() {
    // 滚动深度跟踪
    let maxScroll = 0;
    const scrollMilestones = [25, 50, 75, 100];
    
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            scrollMilestones.forEach(milestone => {
                if (scrollPercent >= milestone && !window[`scroll_${milestone}_tracked`]) {
                    window[`scroll_${milestone}_tracked`] = true;
                    
                    // 发送统计数据
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            event_category: 'engagement',
                            event_label: `${milestone}%`,
                            value: milestone
                        });
                    }
                }
            });
        }
    });
    
    // 链接点击跟踪
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'link',
                        event_label: href,
                        value: 1
                    });
                }
            }
        }
    });
    
    // 停留时间跟踪
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                event_category: 'engagement',
                event_label: 'time_on_page',
                value: timeSpent
            });
        }
    });
}

// 工具函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 主题切换器功能已移至 theme-switcher.js

// 导出功能供其他脚本使用
window.PychologyApp = {
    initSmoothScroll,
    initReadingProgress,
    initLazyLoading,
    debounce,
    throttle
};