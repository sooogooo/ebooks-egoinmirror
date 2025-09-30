/**
 * Mermaid 图表配置 - 优雅不饱和配色方案
 * 医美心理学项目专用
 */

// 等待页面加载完成后初始化Mermaid
document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            theme: 'base',
            themeVariables: {
                // 主要颜色 - 优雅不饱和
                primaryColor: '#8FA4B3',
                primaryTextColor: '#2D3748',
                primaryBorderColor: '#A0AEC0',
                
                // 次要颜色
                secondaryColor: '#D4B896',
                tertiaryColor: '#E2E8F0',
                
                // 背景色
                background: '#FFFFFF',
                mainBkg: '#F7FAFC',
                secondBkg: '#EDF2F7',
                
                // 线条颜色
                lineColor: '#718096',
                
                // 文字颜色
                textColor: '#2D3748',
                
                // 节点样式
                nodeBkg: '#F7FAFC',
                nodeBorder: '#A0AEC0',
                
                // 流程图特定
                clusterBkg: '#F7FAFC',
                clusterBorder: '#A0AEC0',
                
                // 序列图特定
                actorBkg: '#D4B896',
                actorBorder: '#A0AEC0',
                actorTextColor: '#2D3748',
                actorLineColor: '#718096',
                signalColor: '#8FA4B3',
                signalTextColor: '#2D3748',
                
                // 甘特图特定
                section0: '#8FA4B3',
                section1: '#D4B896',
                section2: '#A0C4C7',
                section3: '#E2C2B9',
                
                // 饼图特定
                pie1: '#8FA4B3',
                pie2: '#D4B896',
                pie3: '#A0C4C7',
                pie4: '#E2C2B9',
                pie5: '#C8D6E5',
                pie6: '#F8E6E0',
                pie7: '#D5DBDB',
                pie8: '#F4F6F7',
                pie9: '#EBF3FD',
                pie10: '#FDF2E9',
                pie11: '#E8F5E8',
                pie12: '#FFF2F2',
                
                // 状态图特定
                fillType0: '#F7FAFC',
                fillType1: '#E2E8F0',
                fillType2: '#CBD5E0',
                fillType3: '#A0AEC0',
                fillType4: '#718096',
                fillType5: '#4A5568',
                fillType6: '#2D3748',
                fillType7: '#1A202C'
            },
            
            // 流程图配置
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            },
            
            // 序列图配置
            sequence: {
                useMaxWidth: true,
                diagramMarginX: 50,
                diagramMarginY: 10,
                actorMargin: 50,
                width: 150,
                height: 65,
                boxMargin: 10,
                boxTextMargin: 5,
                noteMargin: 10,
                messageMargin: 35,
                mirrorActors: true,
                bottomMarginAdj: 1,
                rightAngles: false,
                showSequenceNumbers: false
            },
            
            // 甘特图配置
            gantt: {
                useMaxWidth: true,
                leftPadding: 75,
                gridLineStartPadding: 35,
                fontSize: 11,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                sectionFontSize: 24,
                numberSectionStyles: 4
            },
            
            // 饼图配置
            pie: {
                useMaxWidth: true
            },
            
            // 状态图配置
            state: {
                useMaxWidth: true
            },
            
            // 类图配置
            class: {
                useMaxWidth: true
            },
            
            // Git图配置
            git: {
                useMaxWidth: true,
                mainBranchName: 'main'
            },
            
            // 用户旅程图配置
            journey: {
                useMaxWidth: true,
                diagramMarginX: 50,
                diagramMarginY: 10,
                leftMargin: 150,
                width: 150,
                height: 50,
                boxMargin: 10,
                boxTextMargin: 5,
                noteMargin: 10,
                messageMargin: 35,
                bottomMarginAdj: 1
            },
            
            // 需求图配置
            requirement: {
                useMaxWidth: true,
                rect_fill: '#F7FAFC',
                text_color: '#2D3748',
                rect_border_size: '1px',
                rect_border_color: '#A0AEC0'
            },
            
            // ER图配置
            er: {
                useMaxWidth: true,
                diagramPadding: 20,
                layoutDirection: 'TB',
                minEntityWidth: 100,
                minEntityHeight: 75,
                entityPadding: 15,
                stroke: '#A0AEC0',
                fill: '#F7FAFC',
                fontSize: 12
            },
            
            // 全局字体设置
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            
            // 安全配置
            securityLevel: 'loose',
            
            // 启动配置
            startOnLoad: true,
            
            // 日志级别
            logLevel: 'error'
        });
    }
});

// 为动态加载的Mermaid图表提供重新渲染功能
window.rerenderMermaid = function() {
    if (typeof mermaid !== 'undefined') {
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }
};

// 主题切换时重新渲染Mermaid图表
document.addEventListener('themeChanged', function() {
    setTimeout(() => {
        if (window.rerenderMermaid) {
            window.rerenderMermaid();
        }
    }, 100);
});