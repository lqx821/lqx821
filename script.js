// AI工具数据
const toolsData = {
    // 文本创作工具
    writing: [
        {
            name: "ChatGPT",
            description: "OpenAI开发的AI语言模型，支持自然对话和创作",
            icon: "fa-robot",
            tags: ["免费版", "付费版"],
            link: "https://chat.openai.com"
        },
        {
            name: "文心一言",
            description: "百度推出的AI对话语言模型",
            icon: "fa-comment-dots",
            tags: ["免费版"],
            link: "https://yiyan.baidu.com"
        },
        {
            name: "Claude",
            description: "Anthropic开发的AI助手，擅长学术写作和分析",
            icon: "fa-brain",
            tags: ["付费版"],
            link: "https://claude.ai"
        },
        {
            name: "Notion AI",
            description: "集成在Notion中的AI写作助手",
            icon: "fa-pen-to-square",
            tags: ["付费版"],
            link: "https://notion.ai"
        }
    ],
    // 论文写作工具
    thesis: [
        {
            name: "Academic Writer",
            description: "AI驱动的学术论文写作助手",
            icon: "fa-pen-fancy",
            tags: ["付费"],
            link: "#"
        },
        {
            name: "QuillBot",
            description: "AI改写和润色工具，支持多种学术写作风格",
            icon: "fa-feather",
            tags: ["免费版", "付费版"],
            link: "https://quillbot.com"
        },
        {
            name: "Grammarly",
            description: "AI驱动的写作助手，提供语法检查和风格建议",
            icon: "fa-spell-check",
            tags: ["免费版", "付费版"],
            link: "https://www.grammarly.com"
        }
    ],
    // 论文查重
    check: [
        {
            name: "PaperPass",
            description: "专业的中文论文查重工具",
            icon: "fa-magnifying-glass",
            tags: ["付费"],
            link: "https://www.paperpass.com"
        },
        {
            name: "Turnitin",
            description: "国际认可的论文原创性检测工具",
            icon: "fa-check-double",
            tags: ["付费"],
            link: "https://www.turnitin.com"
        }
    ],
    // 内容检测
    content: [
        {
            name: "AI内容检测",
            description: "检测文本是否由AI生成",
            icon: "fa-shield-check",
            tags: ["免费"],
            link: "https://gptzero.me"
        },
        {
            name: "originality.ai",
            description: "专业的AI内容检测工具",
            icon: "fa-fingerprint",
            tags: ["付费"],
            link: "https://originality.ai"
        }
    ],
    // AI提示词
    prompt: [
        {
            name: "PromptHero",
            description: "AI提示词分享和探索平台",
            icon: "fa-lightbulb",
            tags: ["免费"],
            link: "https://prompthero.com"
        },
        {
            name: "MidJourney Prompt Helper",
            description: "MidJourney提示词生成工具",
            icon: "fa-wand-magic-sparkles",
            tags: ["免费"],
            link: "https://prompt.noonshot.com"
        }
    ],
    // AI小说
    novel: [
        {
            name: "NovelAI",
            description: "专注于小说创作的AI工具",
            icon: "fa-book",
            tags: ["付费"],
            link: "https://novelai.net"
        },
        {
            name: "Sudowrite",
            description: "AI辅助创意写作工具",
            icon: "fa-pen-nib",
            tags: ["付费", "新功能"],
            link: "https://www.sudowrite.com"
        }
    ],
    // AI公文
    doc: [
        {
            name: "公文写作助手",
            description: "专业的公文写作AI助手",
            icon: "fa-file-lines",
            tags: ["付费"],
            link: "#"
        },
        {
            name: "智能公文生成",
            description: "快速生成规范公文",
            icon: "fa-file-word",
            tags: ["付费"],
            link: "#"
        }
    ],
    // AIGC绘画工具
    drawing: [
        {
            name: "Midjourney",
            description: "强大的AI艺术创作工具，生成高质量图像",
            icon: "fa-palette",
            tags: ["付费", "热门"],
            link: "https://www.midjourney.com"
        },
        {
            name: "Stable Diffusion",
            description: "开源的AI图像生成模型，支持本地部署",
            icon: "fa-image",
            tags: ["免费", "开源"],
            link: "https://stability.ai"
        },
        {
            name: "DALL·E 3",
            description: "OpenAI开发的AI绘画模型，支持精确文本描述",
            icon: "fa-paintbrush",
            tags: ["付费", "新功能"],
            link: "https://openai.com/dall-e-3"
        },
        {
            name: "Canva AI",
            description: "集成AI功能的设计平台，支持图片生成和编辑",
            icon: "fa-pen-ruler",
            tags: ["免费版", "付费版"],
            link: "https://www.canva.com"
        }
    ],
    // AI绘画提示词
    prompt_art: [
        {
            name: "Midjourney Prompt Helper",
            description: "AI绘画提示词生成和优化工具",
            icon: "fa-wand-magic-sparkles",
            tags: ["免费"],
            link: "https://prompt.noonshot.com"
        },
        {
            name: "PromptBase",
            description: "AI艺术提示词市场，分享和购买优质提示词",
            icon: "fa-store",
            tags: ["付费"],
            link: "https://promptbase.com"
        }
    ],
    // AIGC视频平台
    video: [
        {
            name: "Runway",
            description: "专业的AI视频创作和编辑平台",
            icon: "fa-film",
            tags: ["付费", "专业版"],
            link: "https://runway.ml"
        },
        {
            name: "Synthesia",
            description: "AI数字人视频生成平台，支持多语言",
            icon: "fa-user-tie",
            tags: ["付费", "企业版"],
            link: "https://www.synthesia.io"
        },
        {
            name: "Descript",
            description: "AI驱动的视频编辑工具，支持文本编辑视频",
            icon: "fa-video",
            tags: ["免费版", "付费版"],
            link: "https://www.descript.com"
        },
        {
            name: "HeyGen",
            description: "AI数字人视频生成平台，适合营销内容",
            icon: "fa-person-rays",
            tags: ["付费"],
            link: "https://www.heygen.com"
        }
    ],
    // AIGC智能对话
    chat: [
        {
            name: "ChatGPT",
            description: "OpenAI的AI对话模型，支持多种任务",
            icon: "fa-message",
            tags: ["免费版", "Plus版"],
            link: "https://chat.openai.com"
        },
        {
            name: "Claude",
            description: "Anthropic的AI助手，擅长分析和写作",
            icon: "fa-brain",
            tags: ["付费"],
            link: "https://claude.ai"
        },
        {
            name: "Gemini",
            description: "Google的AI模型，支持多模态交互",
            icon: "fa-gem",
            tags: ["免费版", "付费版"],
            link: "https://gemini.google.com"
        },
        {
            name: "讯飞星火",
            description: "科大讯飞推出的认知大模型",
            icon: "fa-fire",
            tags: ["免费版", "付费版"],
            link: "https://xinghuo.xfyun.cn"
        }
    ],
    // AI搜索引擎
    search: [
        {
            name: "New Bing",
            description: "微软AI驱动的新一代搜索引擎",
            icon: "fa-search",
            tags: ["免费"],
            link: "https://www.bing.com/new"
        },
        {
            name: "Perplexity",
            description: "AI驱动的智能搜索和问答引擎",
            icon: "fa-compass",
            tags: ["免费版", "付费版"],
            link: "https://www.perplexity.ai"
        }
    ],
    // AI知识问答
    qa: [
        {
            name: "Wolfram Alpha",
            description: "专业的知识计算引擎",
            icon: "fa-square-root-variable",
            tags: ["免费版", "付费版"],
            link: "https://www.wolframalpha.com"
        },
        {
            name: "ChatPDF",
            description: "AI驱动的PDF智能问答工具",
            icon: "fa-file-pdf",
            tags: ["免费版", "付费版"],
            link: "https://www.chatpdf.com"
        }
    ]
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取必要的DOM元素
    const categoryBtns = document.querySelectorAll('.category-btn');
    const subcategoryLinks = document.querySelectorAll('.subcategories a');
    const contentArea = document.querySelector('.subcategory-content');
    const searchInput = document.querySelector('.search-box input');

    // 生成工具卡片HTML
    function createToolCard(tool) {
        return `
            <div class="tool-card">
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <div class="tool-content">
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <div class="tool-tags">
                        ${tool.tags.map(tag => `
                            <span class="tag-${tag.toLowerCase().includes('免费') ? 'free' : 'pro'}">${tag}</span>
                        `).join('')}
                    </div>
                    <a href="${tool.link}" class="tool-link" target="_blank">
                        访问网站 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;
    }

    // 显示所有工具
    function showAllTools() {
        let html = '<div class="tools-grid">';
        for (let category in toolsData) {
            html += toolsData[category].map(tool => createToolCard(tool)).join('');
        }
        html += '</div>';
        contentArea.innerHTML = html;
    }

    // 显示特定分类的工具
    function showCategoryTools(category) {
        if (category === 'all') {
            showAllTools();
            return;
        }

        let html = `
            <div class="subcategory-header">
                <h2>${category} 相关工具</h2>
            </div>
            <div class="tools-grid">
        `;

        if (toolsData[category]) {
            html += toolsData[category].map(tool => createToolCard(tool)).join('');
            html += '</div>';
        } else {
            html = '<div class="no-content">暂无相关工具</div>';
        }

        contentArea.innerHTML = html;
    }

    // 分类按钮点击事件
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (e.target.closest('.subcategories')) return;
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            showCategoryTools(category);
        });
    });

    // 子分类链接点击事件
    subcategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const subcategory = this.getAttribute('href').substring(1);
            showCategoryTools(subcategory);
            
            // 更新URL但不刷新页面
            history.pushState(null, '', `#${subcategory}`);
        });
    });

    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let matchedTools = [];

            // 搜索所有分类中的工具
            for (let category in toolsData) {
                matchedTools = matchedTools.concat(
                    toolsData[category].filter(tool => 
                        tool.name.toLowerCase().includes(searchTerm) ||
                        tool.description.toLowerCase().includes(searchTerm)
                    )
                );
            }

            // 显示搜索结果
            let html = '<div class="tools-grid">';
            if (matchedTools.length > 0) {
                html += matchedTools.map(tool => createToolCard(tool)).join('');
            } else {
                html = '<div class="no-content">未找到相关工具</div>';
            }
            html += '</div>';
            contentArea.innerHTML = html;
        });
    }

    // 初始显示所有工具
    showAllTools();
}); 