const translations = {
  en: {
    skip: 'Skip to content', railLabel: 'Portfolio navigation', navLabel: 'Primary navigation', languageLabel: 'Language', themeLabel: 'Switch color theme',
    availability: 'Open to Senior Android opportunities',
    summary: 'I build reliable mobile products and take complex features from technical design to production. My focus is clear architecture, responsive interfaces and measurable product behavior.',
    cvAction: 'My CV', proofLabel: 'Professional snapshot', years: 'years in Android development',
    ownership: 'feature ownership from requirements to rollout', graphics: 'maps, rendering and touch-driven UI',
    fintech: 'white-label banking apps and POS terminal software', iotFitness: 'robot vacuums, smart appliances and fitness products',
    projectsIntro: 'Pet projects - experiments with different stacks and technologies.',
    parcelMediaLabel: 'Open Parcel On Map on GitHub',
    parcelDescription: 'Turns a parcel journey into an animated route. I built the multi-module Compose flow, map camera behavior and lifecycle-safe animation state.',
    filamentMediaLabel: 'Watch Reach Out and Touch Screen demo',
    filamentDescription: 'Makes touch visible as overlapping waves on a real-time 3D Moon. I integrated Filament with Compose and implemented ray casting, GPU effects and multitouch control.',
    holocronMediaLabel: 'Open Holocron of Balance on GitHub',
    holocronDescription: 'Turns remote Star Wars data into an explorable offline graph. I designed the shared KMP architecture, typed persistence and database-first data flow.',
    viewSource: 'Source', watchDemo: 'Demo', otherWorkLabel: 'Other work',
    handbookDescription: 'A bilingual practical reference for Android, Kotlin, Compose, architecture, testing and performance.',
    audioDescription: 'A native Android companion for the Handbook, designed for bilingual educational playlists, streaming playback and media controls.',
    betweenDescription: 'An atmospheric narrative game where I build reusable mini-games, animation systems and progress persistence.',
    openProject: 'Open', experienceIntro: 'Product work from my CV, from mobile games and logistics to fintech, fitness and IoT.',
    tlmDescription: 'Worked on iRobot Home: live maps, 2D/3D rendering, map editing and real-time robot state. Owned complex features from technical design through production reliability.',
    sweatcoinDescription: 'Delivered cross-platform product features for Android and iOS. Reduced loading time on a complex screen by about three times through request optimization and parallel loading.',
    r4sDescription: 'Built a multi-module IoT application with backend-driven Compose UI and BLE device flows, while modernizing legacy code and introducing snapshot testing.',
    dejavooDescription: 'Built an application store for distributing software and updates to Android POS terminals used by cafes and restaurants, and maintained a legacy product with C++ libraries.',
    improveDescription: 'Delivered white-label banking applications, smart-home integrations for climate systems and locks, and an Android Wear companion app.',
    msteamDescription: 'Worked on embedded automotive software and map-based applications for real-time vehicle and service tracking in on-demand logistics.',
    sibersDescription: 'Built a reusable cross-platform mobile game engine and delivered multiple game variants from the shared foundation.',
    dejavooProduct: 'POS software', improveProduct: 'Banking / Smart home', msteamProduct: 'Automotive / Logistics', sibersProduct: 'Mobile games',
    contactLabel: 'Contact', contactText: 'For Android product work, technical leadership or collaboration.'
  },
  ru: {
    skip: 'Перейти к содержимому', railLabel: 'Навигация по портфолио', navLabel: 'Основная навигация', languageLabel: 'Язык', themeLabel: 'Переключить цветовую тему',
    availability: 'Открыт к предложениям Senior Android Developer',
    summary: 'Создаю надёжные мобильные продукты и веду сложные функции от технического решения до production. В фокусе - понятная архитектура, отзывчивые интерфейсы и измеримое поведение продукта.',
    cvAction: 'Моё CV', proofLabel: 'Профессиональный профиль', years: 'лет в Android-разработке',
    ownership: 'ответственность за функции от требований до выпуска', graphics: 'карты, рендеринг и интерактивный UI',
    fintech: 'white-label банковские приложения и ПО для POS-терминалов', iotFitness: 'роботы-пылесосы, умная бытовая техника и фитнес-продукты',
    projectsIntro: 'Pet-проекты - эксперименты с разными стеками и технологиями.',
    parcelMediaLabel: 'Открыть Parcel On Map на GitHub',
    parcelDescription: 'Превращает путь посылки в анимированный маршрут. Я реализовал multi-module Compose flow, поведение камеры карты и lifecycle-safe состояние анимации.',
    filamentMediaLabel: 'Посмотреть демо Reach Out and Touch Screen',
    filamentDescription: 'Визуализирует касания как пересекающиеся волны на 3D-модели Луны. Я интегрировал Filament с Compose и реализовал ray casting, GPU-эффекты и multitouch-управление.',
    holocronMediaLabel: 'Открыть Holocron of Balance на GitHub',
    holocronDescription: 'Превращает удалённые данные Star Wars в offline-граф. Я спроектировал общую KMP-архитектуру, типизированное хранение и database-first поток данных.',
    viewSource: 'Код', watchDemo: 'Демо', otherWorkLabel: 'Другие проекты',
    handbookDescription: 'Двуязычный практический справочник по Android, Kotlin, Compose, архитектуре, тестированию и производительности.',
    audioDescription: 'Нативное Android-приложение для Handbook с двуязычными образовательными плейлистами, streaming playback и системными media controls.',
    betweenDescription: 'Атмосферная сюжетная игра, для которой я создаю переиспользуемые мини-игры, системы анимаций и сохранение прогресса.',
    openProject: 'Открыть', experienceIntro: 'Продукты из моего CV - от мобильных игр и логистики до финтеха, фитнеса и IoT.',
    tlmDescription: 'Работал над iRobot Home: live maps, 2D/3D-рендеринг, редактирование карт и состояние робота в реальном времени. Вёл сложные функции от технического решения до надёжной работы в production.',
    sweatcoinDescription: 'Разрабатывал кроссплатформенные функции для Android и iOS. Примерно втрое сократил загрузку сложного экрана за счёт оптимизации запросов и параллельной загрузки.',
    r4sDescription: 'Разрабатывал multi-module IoT-приложение с backend-driven Compose UI и BLE-сценариями, обновлял legacy-код и внедрял snapshot-тестирование.',
    dejavooDescription: 'Создал магазин приложений для доставки ПО и обновлений на Android POS-терминалы в кафе и ресторанах, а также поддерживал legacy-продукт с C++ библиотеками.',
    improveDescription: 'Разрабатывал white-label банковские приложения, smart-home интеграции для климатических систем и замков, а также companion-приложение для Android Wear.',
    msteamDescription: 'Работал над embedded automotive ПО и Android-приложениями с картами для отслеживания транспорта и услуг в реальном времени.',
    sibersDescription: 'Создал переиспользуемый cross-platform движок мобильных игр и выпустил на его основе несколько игровых вариантов.',
    dejavooProduct: 'ПО для POS', improveProduct: 'Банкинг / Smart home', msteamProduct: 'Авто / Логистика', sibersProduct: 'Мобильные игры',
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

function startPointerEffects() {
  const supportsPointerEffects = window.matchMedia('(pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    && window.innerWidth > 760;
  if (!supportsPointerEffects) return;

  const light = document.querySelector('#cursor-light');
  const canvas = document.querySelector('#node-field');
  const context = canvas.getContext('2d', { alpha: true });
  const pointer = { x: window.innerWidth * .78, y: window.innerHeight * .22, active: false };
  let nodes = [];
  let cloudRoots = [];
  let width = window.innerWidth;
  let height = window.innerHeight;
  let pixelRatio = 1;

  const cloudTerms = [
    ['Android', 'Kotlin', 'Jetpack Compose', 'Mobile Architecture', 'Maps', 'Real-time UI', 'Kotlin Multiplatform'],
    ['Coroutines', 'Flow', 'StateFlow', 'ViewModel', 'Material 3', 'Navigation', 'Hilt', 'Room', 'Retrofit', 'WebSockets', 'Google Maps', '2D/3D Rendering', 'Google Filament', 'Gradle', 'Android SDK', 'UI Components', 'Performance Optimization'],
    ['Java', 'Views/XML', 'Clean Architecture', 'MVVM', 'MVI', 'Paging', 'OkHttp', 'GraphQL', 'Firebase', 'GitHub Actions', 'Maven Publishing', 'AGSL', 'React Native', 'TypeScript', 'SQLDelight', 'Koin'],
    ['IoT', 'Smart Home', 'Geospatial', 'Fintech', 'Offline-first', 'Developer Tools']
  ];

  function createNodes() {
    const layouts = [
      { centerX: .62, centerY: .18, radiusX: Math.min(170, width * .12), radiusY: Math.min(105, height * .13) },
      { centerX: .79, centerY: .42, radiusX: Math.min(250, width * .18), radiusY: Math.min(175, height * .22) },
      { centerX: .64, centerY: .73, radiusX: Math.min(240, width * .17), radiusY: Math.min(175, height * .22) },
      { centerX: .86, centerY: .79, radiusX: Math.min(145, width * .1), radiusY: Math.min(95, height * .12) }
    ];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const nextNodes = [];
    cloudRoots = [];
    context.font = '600 10px Inter, Segoe UI, sans-serif';

    cloudTerms.forEach((terms, cloudIndex) => {
      const layout = layouts[cloudIndex];
      const rootIndex = nextNodes.length;
      cloudRoots.push(rootIndex);

      terms.forEach((label, localIndex) => {
        const progress = terms.length === 1 ? 0 : Math.sqrt(localIndex / (terms.length - 1));
        const angle = localIndex * goldenAngle + cloudIndex * .78;
        const rawX = width * layout.centerX + Math.cos(angle) * progress * layout.radiusX;
        const rawY = height * layout.centerY + Math.sin(angle) * progress * layout.radiusY;
        const labelWidth = context.measureText(label).width;
        const anchorX = Math.max(width * .39, Math.min(width - labelWidth - 18, rawX));
        const anchorY = Math.max(24, Math.min(height - 24, rawY));

        nextNodes.push({
          label,
          cloudIndex,
          parentIndex: localIndex === 0 ? null : rootIndex + Math.floor((localIndex - 1) / 2),
          x: anchorX,
          y: anchorY,
          anchorX,
          anchorY,
          velocityX: 0,
          velocityY: 0,
          phase: nextNodes.length * .63 + Math.random() * 2,
          size: localIndex === 0 ? 2.6 : 1.2 + Math.random() * 1.1
        });
      });
    });

    nodes = nextNodes;
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    createNodes();
  }

  function handlePointerMove(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    root.style.setProperty('--cursor-x', `${pointer.x}px`);
    root.style.setProperty('--cursor-y', `${pointer.y}px`);
    light.classList.add('is-visible');
  }

  function handlePointerLeave() {
    pointer.active = false;
    light.classList.remove('is-visible');
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    const darkTheme = root.dataset.theme === 'dark';
    const color = darkTheme ? '199, 255, 74' : '66, 105, 0';
    const repelRadius = 175;

    nodes.forEach((node) => {
      const driftX = Math.sin(time * .00045 + node.phase) * 5;
      const driftY = Math.cos(time * .00038 + node.phase) * 4;
      node.velocityX += (node.anchorX + driftX - node.x) * .006;
      node.velocityY += (node.anchorY + driftY - node.y) * .006;

      if (pointer.active) {
        const distanceX = node.x - pointer.x;
        const distanceY = node.y - pointer.y;
        const distance = Math.hypot(distanceX, distanceY) || 1;
        if (distance < repelRadius) {
          const force = (1 - distance / repelRadius) * 1.7;
          node.velocityX += (distanceX / distance) * force;
          node.velocityY += (distanceY / distance) * force;
        }
      }

      node.velocityX *= .91;
      node.velocityY *= .91;
      node.x += node.velocityX;
      node.y += node.velocityY;
    });

    nodes.forEach((node) => {
      if (node.parentIndex === null) return;
      const parent = nodes[node.parentIndex];
      context.beginPath();
      context.moveTo(node.x, node.y);
      context.lineTo(parent.x, parent.y);
      context.strokeStyle = `rgba(${color}, ${darkTheme ? .12 : .09})`;
      context.lineWidth = .75;
      context.stroke();
    });

    for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
        const first = nodes[firstIndex];
        const second = nodes[secondIndex];
        if (first.cloudIndex !== second.cloudIndex) continue;
        const distance = Math.hypot(first.x - second.x, first.y - second.y);
        if (distance > 108) continue;
        context.beginPath();
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.strokeStyle = `rgba(${color}, ${(1 - distance / 108) * .1})`;
        context.lineWidth = .6;
        context.stroke();
      }
    }

    context.save();
    context.setLineDash([3, 9]);
    for (let index = 1; index < cloudRoots.length; index += 1) {
      const previousRoot = nodes[cloudRoots[index - 1]];
      const currentRoot = nodes[cloudRoots[index]];
      context.beginPath();
      context.moveTo(previousRoot.x, previousRoot.y);
      context.lineTo(currentRoot.x, currentRoot.y);
      context.strokeStyle = `rgba(${color}, ${darkTheme ? .075 : .055})`;
      context.lineWidth = .7;
      context.stroke();
    }
    context.restore();

    nodes.forEach((node) => {
      context.beginPath();
      context.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(${color}, ${darkTheme ? .5 : .34})`;
      context.fill();

      if (width >= 1050) {
        const pointerDistance = pointer.active ? Math.hypot(node.x - pointer.x, node.y - pointer.y) : 1000;
        const proximity = Math.max(0, 1 - pointerDistance / 240);
        const labelAlpha = (darkTheme ? .24 : .2) + proximity * .28;
        context.font = `${node.parentIndex === null ? 700 : 600} 10px Inter, Segoe UI, sans-serif`;
        context.textBaseline = 'middle';
        context.fillStyle = `rgba(${color}, ${labelAlpha})`;
        context.fillText(node.label, node.x + 7, node.y);
      }
    });

    window.requestAnimationFrame(draw);
  }

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', handlePointerLeave);
  window.addEventListener('resize', resizeCanvas, { passive: true });
  resizeCanvas();
  window.requestAnimationFrame(draw);
}

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
startPointerEffects();
