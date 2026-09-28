const translations = {
  en: {
    skip: 'Skip to content', railLabel: 'Portfolio navigation', navLabel: 'Primary navigation', languageLabel: 'Language', themeLabel: 'Switch color theme',
    availability: 'Open to Senior Android opportunities',
    summary: 'I build reliable mobile products and take complex features from technical design to production. My focus is clear architecture, responsive interfaces and measurable product behavior.',
    cvAction: 'Request CV', proofLabel: 'Professional snapshot', years: 'years in Android development',
    ownership: 'feature ownership from requirements to rollout', graphics: 'maps, rendering and touch-driven UI',
    projectsIntro: 'Three compact builds that show product thinking, Android depth and end-to-end ownership.',
    parcelMediaLabel: 'Open Parcel On Map on GitHub',
    parcelDescription: 'Turns a parcel journey into an animated route. I built the multi-module Compose flow, map camera behavior and lifecycle-safe animation state.',
    filamentMediaLabel: 'Watch Reach Out and Touch Screen demo',
    filamentDescription: 'Makes touch visible as overlapping waves on a real-time 3D Moon. I integrated Filament with Compose and implemented ray casting, GPU effects and multitouch control.',
    holocronMediaLabel: 'Open Holocron of Balance on GitHub',
    holocronDescription: 'Turns remote Star Wars data into an explorable offline graph. I designed the shared KMP architecture, typed persistence and database-first data flow.',
    viewSource: 'Source', watchDemo: 'Demo', otherWorkLabel: 'Other work',
    handbookDescription: 'A bilingual practical reference for Android, Kotlin, Compose, architecture, testing and performance.',
    betweenDescription: 'An atmospheric narrative game where I build reusable mini-games, animation systems and progress persistence.',
    openProject: 'Open', experienceIntro: 'The latest three product teams, with links to the products I worked on.',
    tlmDescription: 'Worked on iRobot Home: live maps, 2D/3D rendering, map editing and real-time robot state. Owned complex features from technical design through production reliability.',
    sweatcoinDescription: 'Delivered cross-platform product features for Android and iOS. Reduced loading time on a complex screen by about three times through request optimization and parallel loading.',
    r4sDescription: 'Built a multi-module IoT application with backend-driven Compose UI and BLE device flows, while modernizing legacy code and introducing snapshot testing.',
    contactLabel: 'Contact', contactText: 'For Android product work, technical leadership or collaboration.'
  },
  ru: {
    skip: 'Перейти к содержимому', railLabel: 'Навигация по портфолио', navLabel: 'Основная навигация', languageLabel: 'Язык', themeLabel: 'Переключить цветовую тему',
    availability: 'Открыт к предложениям Senior Android Developer',
    summary: 'Создаю надёжные мобильные продукты и веду сложные функции от технического решения до production. В фокусе - понятная архитектура, отзывчивые интерфейсы и измеримое поведение продукта.',
    cvAction: 'Запросить CV', proofLabel: 'Профессиональный профиль', years: 'лет в Android-разработке',
    ownership: 'ответственность за функции от требований до выпуска', graphics: 'карты, рендеринг и интерактивный UI',
    projectsIntro: 'Три компактных проекта, которые показывают продуктовое мышление, Android-экспертизу и полную ответственность за результат.',
    parcelMediaLabel: 'Открыть Parcel On Map на GitHub',
    parcelDescription: 'Превращает путь посылки в анимированный маршрут. Я реализовал multi-module Compose flow, поведение камеры карты и lifecycle-safe состояние анимации.',
    filamentMediaLabel: 'Посмотреть демо Reach Out and Touch Screen',
    filamentDescription: 'Визуализирует касания как пересекающиеся волны на 3D-модели Луны. Я интегрировал Filament с Compose и реализовал ray casting, GPU-эффекты и multitouch-управление.',
    holocronMediaLabel: 'Открыть Holocron of Balance на GitHub',
    holocronDescription: 'Превращает удалённые данные Star Wars в offline-граф. Я спроектировал общую KMP-архитектуру, типизированное хранение и database-first поток данных.',
    viewSource: 'Код', watchDemo: 'Демо', otherWorkLabel: 'Другие проекты',
    handbookDescription: 'Двуязычный практический справочник по Android, Kotlin, Compose, архитектуре, тестированию и производительности.',
    betweenDescription: 'Атмосферная сюжетная игра, для которой я создаю переиспользуемые мини-игры, системы анимаций и сохранение прогресса.',
    openProject: 'Открыть', experienceIntro: 'Три последних продуктовых команды со ссылками на приложения, над которыми я работал.',
    tlmDescription: 'Работал над iRobot Home: live maps, 2D/3D-рендеринг, редактирование карт и состояние робота в реальном времени. Вёл сложные функции от технического решения до надёжной работы в production.',
    sweatcoinDescription: 'Разрабатывал кроссплатформенные функции для Android и iOS. Примерно втрое сократил загрузку сложного экрана за счёт оптимизации запросов и параллельной загрузки.',
    r4sDescription: 'Разрабатывал multi-module IoT-приложение с backend-driven Compose UI и BLE-сценариями, обновлял legacy-код и внедрял snapshot-тестирование.',
    contactLabel: 'Контакты', contactText: 'Android-продукты, техническое лидерство и совместные проекты.'
  }
};

const root = document.documentElement;
const languageButtons = document.querySelectorAll('[data-language]');
const themeToggle = document.querySelector('#theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyLanguage(language) {
  const dictionary = translations[language] ?? translations.en;
  root.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.title = language === 'ru' ? 'Дмитрий Ходоркин - Senior Android Developer' : 'Dmitrii Khodorkin - Senior Android Developer';
  localStorage.setItem('portfolio-language', language);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeMeta.setAttribute('content', theme === 'dark' ? '#0a0d11' : '#f4f5f1');
  localStorage.setItem('portfolio-theme', theme);
}

languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

const navLinks = document.querySelectorAll('.rail-nav a');
const sections = document.querySelectorAll('main > section[id]');
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.section === visible.target.id));
}, { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.35] });
sections.forEach((section) => observer.observe(section));

const initialLanguage = localStorage.getItem('portfolio-language') || (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en');
const initialTheme = localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyLanguage(initialLanguage);
applyTheme(initialTheme);
document.querySelector('#year').textContent = new Date().getFullYear();
