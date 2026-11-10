const copy = {
  en: {
    navHome:'Home',navWork:'Selected work',navAbout:'About',navContact:'Contact',back:'← BACK TO HOME',
    homeIntro:'Hello, I’m',homeTagline:'Building between systems<br>and stories.',homeBrief:'I study Economics & Data Science at USC. I’ve built robotics interfaces and games, and I care about how technology feels to the people using it.',
    workHeading:'Ideas in motion<span class="period">.</span>',workLead:'From physical systems to digital worlds, I like making complex things tangible.',
    workType1:'ROBOTICS / VISUALIZATION',workTitle1:'Making sensor data visible',workDesc1:'At Daimon Robotics, I built a real-time C++ interface for visualizing robotic sensor data. I also prepared gripper datasets for tactile perception research and refined a sensing interface shown at a Shanghai AI exhibition.',
    workType2:'GAME DESIGN / DEVELOPMENT',workTitle2:'Designing worlds to play in',workDesc2:'I designed two original games, including a Unity and C# 2D shooter with gameplay and narrative systems. Feedback from more than 50 beta testers shaped the balance and player experience.',
    workType3:'RESEARCH / CONCEPT',workTitle3:'Rethinking urban parking',workDesc3:'For the Diamond Challenge, I analyzed 120 samples on urban parking shortages and helped develop a mobile app concept through research and 3D modeling. The project advanced to the semifinal round.',
    workType4:'BUSINESS / ANALYSIS',workTitle4:'Research for corporate clients',workDesc4:'At China Construction Bank, I compiled financial and operational data for corporate client and industry reports, and researched company operations to support client meetings.',
    tagVisualization:'Data visualization',tagRobotics:'Robotics',tagExperience:'Player experience',tagResearch:'Research',tagProduct:'Product concept',tagBusiness:'Business research',oldGame:'Explore my earlier game archive ↗',archiveText:'My earlier site collects games, art, and worldbuilding.',visitOld:'VIEW ARCHIVE ↗',
    aboutHeading:'A little<br>of everything<span class="period">.</span>',aboutIntro:'I’m Feiming, usually Tony. I study Economics and Data Science at the University of Southern California, and I’m drawn to the space where analytical thinking meets imagination.',aboutBody:'Games first taught me to see technology as a way to shape experiences. Since then, I’ve worked with robotics data, explored business analysis, and kept making room for art, music, and sport.',basedIn:'BASED IN',currently:'CURRENTLY',degree:'B.S. Economics & Data Science, USC',aboutIndex1:'IN PRACTICE',aboutIndex2:'BEYOND WORK',aboutIndex3:'LANGUAGES',aboutPractice:'Python, C++, C#, Java, Unity, data cleaning and visualization.',aboutBeyond:'Film, photography, R&B and hip-hop, soccer, and singing bass.',aboutLanguages:'Mandarin and English.',
    contactHeading:'Let’s make<br>contact<span class="period">.</span>',contactNote:'Open to conversations at the intersection of technology, design, and culture.',oldSiteLink:'EARLIER SITE ↗'
  },
  zh: {
    navHome:'首页',navWork:'精选作品',navAbout:'关于我',navContact:'联系',back:'← 返回首页',
    homeIntro:'你好，我是',homeTagline:'在理性与想象之间<br>创造新的可能。',homeBrief:'我在南加州大学学习经济学与数据科学。做过机器人可视化和游戏，也关心技术如何被人感受和使用。',
    workHeading:'让想法发生<span class="period">.</span>',workLead:'从现实中的机器人，到屏幕里的游戏世界，我喜欢把复杂的想法变得可感知。',
    workType1:'机器人 / 可视化',workTitle1:'让传感器数据可见',workDesc1:'在 Daimon Robotics 实习期间，我用 C++ 开发实时机器人传感器数据可视化界面，也为触觉感知研究整理机械手数据，并完善了一款在上海 AI 展会上展示的触觉感知界面。',
    workType2:'游戏设计 / 开发',workTitle2:'设计可以进入的世界',workDesc2:'我设计并开发过两款原创游戏，其中包括一款使用 Unity 与 C# 制作、兼具玩法与叙事系统的 2D 射击游戏。50 多位测试玩家的反馈帮助我不断调整平衡与体验。',
    workType3:'研究 / 产品构想',workTitle3:'重新思考城市停车',workDesc3:'在 Diamond Challenge 项目中，我分析了 120 份有关城市停车难题的样本，并通过研究和 3D 建模参与构思移动应用方案。项目进入半决赛。',
    workType4:'商业 / 分析',workTitle4:'为企业客户做研究',workDesc4:'在中国建设银行实习期间，我整理财务与运营数据，用于企业客户及行业报告，也研究企业运营情况，为客户会议提供资料。',
    tagVisualization:'数据可视化',tagRobotics:'机器人',tagExperience:'玩家体验',tagResearch:'研究',tagProduct:'产品构想',tagBusiness:'商业研究',oldGame:'查看早期游戏作品 ↗',archiveText:'旧网站收录了我的游戏、艺术和世界观设计。',visitOld:'查看作品档案 ↗',
    aboutHeading:'不止一种<br>可能<span class="period">.</span>',aboutIntro:'我叫吴飞鸣，也常用 Tony 这个名字。目前在南加州大学学习经济学与数据科学，喜欢探索分析思维与想象力交汇的地方。',aboutBody:'游戏让我第一次意识到，技术也可以用来塑造体验。之后，我接触了机器人数据、商业分析，同时继续给艺术、音乐和运动留出空间。',basedIn:'所在地',currently:'目前',degree:'南加州大学 · 经济学与数据科学本科',aboutIndex1:'技术与实践',aboutIndex2:'工作之外',aboutIndex3:'语言',aboutPractice:'Python、C++、C#、Java、Unity，以及数据清洗与可视化。',aboutBeyond:'电影、摄影、R&B 与嘻哈、足球，以及男低音合唱。',aboutLanguages:'中文与英文。',
    contactHeading:'聊聊吧<span class="period">.</span>',contactNote:'期待与你交流技术、设计与文化之间的可能性。',oldSiteLink:'旧网站 ↗'
  }
};
const routes = ['home','work','about','contact'];
const views = Object.fromEntries(routes.map(name => [name, document.getElementById(`${name}-view`)]));
const menu = document.getElementById('site-menu');
const menuButton = document.getElementById('menu-toggle');
const langButton = document.getElementById('lang-toggle');
let language = localStorage.getItem('tony-language') === 'zh' ? 'zh' : 'en';
function setMenu(open) {menu.hidden = !open; menuButton.classList.toggle('is-open',open); menuButton.setAttribute('aria-expanded',String(open));}
function setLanguage(next) {
  language = next; localStorage.setItem('tony-language',language); document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'; langButton.textContent = language === 'en' ? '中' : 'EN'; langButton.setAttribute('aria-label',language === 'en' ? '切换为中文' : 'Switch to English');
  document.querySelectorAll('[data-i18n]').forEach(node => {const value=copy[language][node.dataset.i18n]; if(value !== undefined) node.innerHTML=value;});
  document.title = language === 'zh' ? 'Tony Wu — 理性与想象之间' : 'Tony Wu — Between Systems & Stories';
}
function showRoute() {
  const route = location.hash.replace('#','') || 'home';
  const current = routes.includes(route) ? route : 'home';
  routes.forEach(name => {views[name].hidden = name !== current;});
  document.querySelectorAll('[data-route]').forEach(a => {if(a.dataset.route === current) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');});
  setMenu(false); window.scrollTo({top:0,behavior:'instant'});
}
menuButton.addEventListener('click',()=>setMenu(menu.hidden));
langButton.addEventListener('click',()=>setLanguage(language === 'en' ? 'zh' : 'en'));
document.addEventListener('keydown',event=>{if(event.key === 'Escape') setMenu(false);});
document.addEventListener('click',event=>{if(!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);});
window.addEventListener('hashchange',showRoute);
document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(language); showRoute();
