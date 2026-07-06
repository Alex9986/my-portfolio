/* =============================================
   PORTFOLIO — Interactive Logic
   ============================================= */

/* ----- i18n Data ----- */
const i18n = {
  nav: {
    logo:       { zh: 'ALEX', en: 'ALEX' },
    about:      { zh: '关于', en: 'About' },
    skills:     { zh: '技能', en: 'Skills' },
    experience: { zh: '经历', en: 'Experience' },
    projects:   { zh: '项目', en: 'Projects' },
    contact:    { zh: '联系', en: 'Contact' },
  },
  hero: {
    greeting: { zh: '你好，我是', en: 'Hi, I am' },
    nameCn:   { zh: '尚可', en: 'Alex' },
    desc:     { zh: '2 年经验 · 全栈开发 · AI 应用 · 写干净、高效的代码', en: '2+ Yrs Exp · Full-Stack · AI Apps · Clean, Performant Code' },
    cta1:     { zh: '查看项目', en: 'View Projects' },
    cta2:     { zh: '联系我', en: 'Get In Touch' },
    scroll:   { zh: '向下滚动', en: 'Scroll Down' },
  },
  about: {
    title: { zh: '关于我', en: 'About Me' },
    p1:    { zh: '我是一名拥有 2 年经验的软件工程师，专注于全栈 Web 开发和 AI 应用。我热衷于用前沿技术构建高性能、可维护的软件系统。', en: 'I am a software engineer with 2 years of experience, focused on full-stack web development and AI applications. I build high-performance, maintainable software systems with modern technologies.' },
    p2:    { zh: '毕业于不列颠哥伦比亚大学 (UBC) 数学系，具备扎实的逻辑思维和问题拆解能力。在工作中，我熟练运用 AI 工具（Claude、DeepSeek、Gemini）辅助研发，通过精准的任务拆解显著提升开发效率。', en: 'Graduated from UBC with a BSc in Mathematics, I bring strong logical thinking and problem decomposition skills. I leverage AI tools (Claude, DeepSeek, Gemini) to accelerate development through precise task breakdown and efficient research.' },
    p3:    { zh: '技术栈涵盖 Java、TypeScript、Python、React、Next.js 和 Angular。我享受从 0 到 1 构建产品的过程，也对优化遗留代码、重构复杂系统充满热情。', en: 'My stack spans Java, TypeScript, Python, React, Next.js, and Angular. I thrive on building products from zero to one, and equally enjoy optimizing legacy code and refactoring complex systems.' },
    p4:    { zh: '目前正在探索 AI Agent 和自然语言驱动的交互范式，相信大语言模型将重塑人机交互的未来。', en: 'Currently exploring AI Agents and natural-language-driven interaction paradigms — I believe LLMs will reshape the future of human-computer interaction.' },
    stat1: { zh: '年经验', en: 'Yrs Exp' },
    stat2: { zh: '项目交付', en: 'Projects' },
    stat3: { zh: '数学学士', en: 'BSc Math' },
  },
  skills: {
    title: { zh: '技术技能', en: 'Technical Skills' },
    cat1:  { zh: '编程语言', en: 'Languages' },
    cat2:  { zh: '前端框架与工具', en: 'Frontend Frameworks & Tools' },
    cat3:  { zh: '后端与 API', en: 'Backend & API' },
    cat4:  { zh: '数据库与云服务', en: 'Databases & Cloud' },
    cat5:  { zh: 'AI / LLM 开发', en: 'AI / LLM Development' },
    cat6:  { zh: '测试与 DevOps', en: 'Testing & DevOps' },
    cat7:  { zh: '其他', en: 'Other' },
  },
  exp: {
    title: { zh: '工作经历', en: 'Work Experience' },
    j1: {
      role:  { zh: '助理软件开发工程师', en: 'Associate Software Developer' },
      date:  { zh: '2025.02 — 至今', en: '2025.02 — Present' },
      b1:    { zh: '独立负责完整 Sprint 迭代：近期主导一个完整迭代周期，涵盖新功能开发、UI 优化、缺陷修复与单元测试，协调从需求澄清到客户测试打包的全流程，实现零延期交付', en: 'Independently led a full Sprint iteration — new features, UI optimization, bug fixes, and unit testing; coordinated end-to-end from requirements to client test package with zero-delay delivery' },
      b2:    { zh: '设计并应用 FHIR transaction bundle 将多次分散请求整合为单一调用，结合按需加载与异步流控，页面加载时间缩短 40%，显著降低高并发场景下的网络开销与出错率', en: 'Designed and applied FHIR transaction bundles to consolidate scattered requests into single calls, reducing page load time by 40% via lazy loading and async flow control in high-concurrency scenarios' },
      b3:    { zh: '独立实现基于 FHIR Questionnaire 的动态表单引擎，支持条件渲染与多控件类型；负责里程碑状态机核心逻辑，确保多角色工作流准确流转', en: 'Independently built a FHIR Questionnaire-based dynamic form engine with conditional rendering and multi-widget types; implemented milestone state machine logic for accurate multi-role workflow transitions' },
      b4:    { zh: '编写 Postman 脚本批处理老旧数据，解决功能变更带来的数据结构迁移问题；优化 GitLab CI/CD 流水线，提升构建稳定性与部署效率', en: 'Wrote Postman scripts for batch-processing legacy data to resolve structural migration issues; optimized GitLab CI/CD pipelines for improved build stability and deployment efficiency' },
      b5:    { zh: '运用 DeepSeek / Gemini 进行复杂技术调研与代码重构，将遗留 Angular 组件中的公共逻辑封装为可复用模块，显著提升可维护性和开发效率', en: 'Leveraged DeepSeek / Gemini for complex technical research and code refactoring, extracting shared logic from legacy Angular components into reusable modules — greatly improving maintainability and dev efficiency' },
      b6:    { zh: '独立主持多场客户技术评议会，向团队与干系人同步每日进度；通过高效需求对齐与变更管控，减少约 20% 的需求返工损耗', en: 'Independently led multiple client technical review sessions, syncing daily progress with the team and stakeholders; reduced requirement churn by ~20% through efficient alignment and change management' },
    },
    j2: {
      role:  { zh: '初级软件开发工程师', en: 'Junior Software Developer' },
      date:  { zh: '2024.08 — 2025.02', en: '2024.08 — 2025.02' },
      b1:    { zh: '设计并优化 MySQL 架构，通过索引调优与复杂 SQL 语句重写，使系统查询性能提升 20%', en: 'Designed and optimized MySQL schema — improved query performance by 20% through index tuning and complex SQL rewriting' },
      b2:    { zh: '负责 RESTful API 的迭代开发，增强了系统集成的稳定性', en: 'Led iterative RESTful API development, enhancing system integration stability' },
      b3:    { zh: '负责 WPF 应用的全栈开发，实现直观 UI 与稳健后端逻辑，提升用户满意度达 25%', en: 'Delivered full-stack WPF application with intuitive UI and robust backend logic, improving user satisfaction by 25%' },
    },
    j3: {
      role:  { zh: '软件开发实习生 (Co-op)', en: 'Software Developer Intern (Co-op)' },
      date:  { zh: '2021.09 — 2023.09', en: '2021.09 — 2023.09' },
      b1:    { zh: '入职两周即精通 Angular 框架并独立负责门户核心模块，确保 UI/UX 高保真落地', en: 'Mastered Angular within two weeks and independently owned core portal modules, ensuring high-fidelity UI/UX delivery' },
      b2:    { zh: '建立 90% 覆盖率的自动化测试体系，实现实习期间负责模块"零故障"高质量交付', en: 'Built automated test suites with 90% coverage, achieving zero-defect delivery for all owned modules during the internship' },
    },
  },
  projects: {
    title: { zh: '个人项目', en: 'Personal Projects' },
    demo:  { zh: '▶ 演示视频', en: '▶ Demo Video' },
    p1: {
      name:     { zh: '智能任务管理 Agent', en: 'AI-Driven Task Agent' },
      subtitle: { zh: 'AI-Driven Task Agent', en: 'AI-Driven Task Agent' },
      b1:       { zh: '基于 OpenAI Function Calling 实现自然语言指令解析，将非结构化对话精准映射为代码逻辑（CRUD），构建了自然语言驱动的新型 UI 交互模式', en: 'Implemented natural language command parsing via OpenAI Function Calling, mapping unstructured conversation to CRUD logic — a novel NL-driven UI interaction paradigm' },
      b2:       { zh: '设计 System Prompt 策略与对话滑窗机制，解决 AI 幻觉导致的指令冲突，确保长上下文环境下 React 状态与 AI 逻辑层的实时同步', en: 'Designed System Prompt strategy and sliding-window context management to resolve AI hallucination conflicts, ensuring real-time sync between React state and AI logic in long contexts' },
      b3:       { zh: '利用 TypeScript 对 AI 响应进行动态解析与类型守卫，并优化 Next.js 边缘函数（Edge Routes）响应链路，降低 AI 指令执行的延迟', en: 'Applied TypeScript dynamic parsing and type guards to AI responses; optimized Next.js Edge Routes to reduce AI command execution latency' },
    },
    p2: {
      name:     { zh: 'AI 全栈聊天助手', en: 'AI Full-Stack Chat Bot' },
      subtitle: { zh: 'AI Chat Bot', en: 'AI Chat Bot' },
      b1:       { zh: '基于 Next.js 14 构建全栈应用，实现前后端一体化开发。使用 React + TypeScript 开发具有实时消息渲染、自动滚动与响应式布局的交互式聊天界面', en: 'Built full-stack app with Next.js 14 (unified frontend + backend). Developed interactive chat UI with React + TypeScript featuring real-time message rendering, auto-scroll, and responsive layout' },
      b2:       { zh: '集成 OpenAI GPT-3.5-Turbo 模型，设计并实现支持完整对话上下文记忆的 RESTful API 接口，通过智能会话管理实现连续对话能力', en: 'Integrated OpenAI GPT-3.5-Turbo, designed RESTful APIs with full conversation context memory — enabling coherent multi-turn dialogue through intelligent session management' },
      b3:       { zh: '设计上下文感知的聊天历史系统，确保 AI 在多轮对话中保持逻辑一致性和记忆连贯性，提升人机交互的自然度与效率', en: 'Designed context-aware chat history system ensuring logical consistency and memory continuity across multi-turn conversations, improving human-AI interaction quality' },
    },
    p3: {
      name:     { zh: 'AI Todo — 用对话管理任务', en: 'AI Todo — Task Management via Conversation' },
      subtitle: { zh: 'AI Todo', en: 'AI Todo' },
      b1:       { zh: '集成 DeepSeek Function Calling 实现自然语言对话式任务操作，用户直接输入指令，AI 理解意图并自动执行增删改查，实时同步任务面板', en: 'Integrated DeepSeek Function Calling for conversational task management — users type natural language commands; AI interprets intent and auto-executes CRUD operations, syncing to the task panel in real time' },
      b2:       { zh: '基于 Next.js App Router 构建全栈应用，前端 React + TypeScript 实现聊天式双栏布局，后端 API Routes 处理认证与 AI 对话，数据库采用腾讯 CloudBase HTTP API', en: 'Built full-stack app with Next.js App Router — React + TypeScript chat-style dual-panel UI, API Routes for auth and AI dialogue, Tencent CloudBase HTTP API as the database layer' },
      b3:       { zh: '设计云端优先 → localStorage 缓存 → 示例数据的三级容错方案，确保离线、弱网场景下应用仍可完整使用，多用户数据隔离', en: 'Designed a three-tier fallback strategy — Cloud-first → localStorage cache → sample data — ensuring full app usability offline or on weak networks; multi-tenant data isolation and async cloud sync' },
      b4:       { zh: '自建登录系统：IP 级滑动窗口限流、跨标签页登录状态同步、演示账户一键登录、密码显隐切换，会话持久化于 localStorage', en: 'Custom auth system with IP-based sliding-window rate limiting, cross-tab login sync, demo account one-click login, password show/hide toggle, and localStorage session persistence' },
      b5:       { zh: '将任务操作抽象为纯函数 (Task[] → Task[])，AI 工具调用、服务端执行、前端状态更新完全复用同一逻辑，易于测试和维护', en: 'Abstracted all task operations as pure functions (Task[] → Task[]), reused identically across AI tool calls, server-side execution, and frontend state updates — easy to test and maintain' },
    },
  },
  edu: {
    title:  { zh: '教育背景', en: 'Education' },
    school: { zh: '不列颠哥伦比亚大学 (UBC)', en: 'University of British Columbia (UBC)' },
    degree: { zh: '理学学士 — 数学', en: 'BSc — Mathematics' },
    date:   { zh: '2019.09 — 2024.05', en: '2019.09 — 2024.05' },
    cert:   { zh: '全栈 Web 开发实战营', en: 'Full-Stack Web Development Bootcamp' },
  },
  contact: {
    title:       { zh: '联系我', en: 'Get In Touch' },
    subtitle:    { zh: '很高兴认识你 — 无论是技术交流、项目合作，还是只是想打个招呼 👋', en: 'Always happy to connect — whether for tech discussions, collaboration, or just to say hi 👋' },
    email:       { zh: '邮箱', en: 'Email' },
    placeholder: { zh: '添加链接', en: 'Add Link' },
  },
  footer: {
    tagline: { zh: '使用原生 HTML、CSS 和 JavaScript 构建', en: 'Built with vanilla HTML, CSS & JavaScript' },
  },
  tooltip: {
    zh: '链接待添加 — 请替换为真实 URL',
    en: 'Link placeholder — replace with real URL',
  },
};

/* ----- Typing Strings (language-aware) ----- */
const typingStrings = {
  zh: ['软件工程师', '全栈开发者', 'AI 应用开发者', 'Angular / React 开发者'],
  en: ['Software Engineer', 'Full-Stack Developer', 'AI Application Developer', 'Angular / React Developer'],
};

/* ----- State ----- */
let currentLang = localStorage.getItem('lang') ||
  (navigator.language.startsWith('zh') ? 'zh' : 'en');

/* =============================================
   LANGUAGE
   ============================================= */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    const keys = path.split('.');
    let val = i18n;
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = null;
        break;
      }
    }
    if (val && val[lang]) {
      el.textContent = val[lang];
    }
  });

  // Update lang toggle UI
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Restart typing effect
  restartTyping();
}

/* ----- Lang Toggle Button ----- */
document.getElementById('langToggle').addEventListener('click', () => {
  const next = currentLang === 'zh' ? 'en' : 'zh';
  setLanguage(next);
});

/* =============================================
   TYPING EFFECT
   ============================================= */
let typingTimeout = null;
let typingState = {
  strings: [],
  strIndex: 0,
  charIndex: 0,
  isDeleting: false,
};

function initTypingStrings() {
  typingState.strings = typingStrings[currentLang] || typingStrings.en;
}

function type() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const { strings, strIndex, charIndex, isDeleting } = typingState;
  const currentStr = strings[strIndex % strings.length];

  if (!isDeleting) {
    // Typing
    el.textContent = currentStr.slice(0, charIndex + 1);
    typingState.charIndex++;

    if (charIndex + 1 >= currentStr.length) {
      // Finished typing — pause then delete
      typingTimeout = setTimeout(type, 1800);
      typingState.isDeleting = true;
      return;
    }

    // Random typing speed variation for realism
    const speed = 60 + Math.random() * 80;
    typingTimeout = setTimeout(type, speed);
  } else {
    // Deleting
    el.textContent = currentStr.slice(0, Math.max(0, charIndex - 1));
    typingState.charIndex--;

    if (charIndex <= 0) {
      // Finished deleting — move to next string
      typingState.isDeleting = false;
      typingState.strIndex = (strIndex + 1) % strings.length;
      typingState.charIndex = 0;
      typingTimeout = setTimeout(type, 400);
      return;
    }

    const speed = 30 + Math.random() * 40;
    typingTimeout = setTimeout(type, speed);
  }
}

function stopTyping() {
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
}

function restartTyping() {
  stopTyping();
  initTypingStrings();
  typingState.strIndex = 0;
  typingState.charIndex = 0;
  typingState.isDeleting = false;
  document.getElementById('typingText').textContent = '';
  typingTimeout = setTimeout(type, 400);
}

/* =============================================
   NAVIGATION
   ============================================= */

/* Scroll effect */
const navbar = document.getElementById('navbar');
function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', onScroll, { passive: true });
// Initial check in case page loads scrolled
onScroll();

/* Mobile hamburger */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  hamburger.classList.toggle('active', isActive);
  document.body.style.overflow = isActive ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* =============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================= */
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px',
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children if present
      const children = entry.target.querySelectorAll('.skill-category, .timeline-item, .project-card, .contact-card');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        child.classList.add('visible');
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all .reveal elements
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Also observe sections for skill stagger
document.querySelectorAll('#skills').forEach(el => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cats = entry.target.querySelectorAll('.skill-category');
        cats.forEach((cat, i) => {
          cat.style.transitionDelay = `${i * 0.08}s`;
          cat.classList.add('visible');
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  obs.observe(el);
});

/* =============================================
   PLACEHOLDER LINKS
   ============================================= */
const tooltip = document.getElementById('tooltip');
let tooltipTimer = null;

function showTooltip() {
  if (tooltipTimer) clearTimeout(tooltipTimer);
  tooltip.hidden = false;
  // Update tooltip text for current language
  const key = 'tooltip';
  if (i18n[key] && i18n[key][currentLang]) {
    tooltip.textContent = i18n[key][currentLang];
  }
  tooltipTimer = setTimeout(() => {
    tooltip.hidden = true;
  }, 2000);
}

document.querySelectorAll('[data-placeholder="true"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    showTooltip();
  });
});

/* =============================================
   BACK TO TOP
   ============================================= */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   INIT
   ============================================= */
setLanguage(currentLang);
initTypingStrings();
restartTyping();
