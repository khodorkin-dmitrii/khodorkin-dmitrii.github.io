import './styles.css';

const translations = {
  en: {
    skip: 'Skip to content', navLabel: 'Primary navigation', languageLabel: 'Language', themeLabel: 'Switch color theme',
    navWork: 'Work', navHandbook: 'Handbook', navContact: 'Contact', availability: 'Open to Senior Android opportunities',
    role: 'Senior Android Developer',
    summary: 'I build reliable mobile products and take complex features from technical design to production - with a focus on clear architecture, responsive UI and observable behavior.',
    cvAction: 'Request CV', proofLabel: 'Professional snapshot', years: 'years in Android development',
    ownership: 'feature ownership, from requirements to rollout', graphics: 'maps, rendering and touch-driven interfaces',
    selectedWork: 'Selected work', workTitle: 'Projects that run, move and respond',
    workIntro: 'Focused builds that show product thinking, Android depth and careful technical ownership.',
    parcelMediaLabel: 'Open Parcel On Map on GitHub', parcelKicker: 'Route visualization prototype',
    parcelDescription: 'A parcel journey is replayed as an animated route instead of a static status list. I built the multi-module Compose flow, map camera behavior and lifecycle-safe animation state, backed by a real data source and focused tests.',
    filamentMediaLabel: 'Watch Reach Out and Touch Screen demo', filamentKicker: 'Touch-driven 3D experiment',
    filamentDescription: 'An Android surface where touch becomes overlapping waves on a real-time 3D Moon. I integrated Filament directly with Compose, implemented ray casting, GPU wave interference, multitouch rotation and explicit render-resource lifecycle management.',
    holocronMediaLabel: 'Open Holocron of Balance on GitHub', holocronKicker: 'Offline-first knowledge archive',
    holocronDescription: 'A connected archive turns remote Star Wars data into an explorable graph across Android and Desktop. I designed the shared KMP architecture, typed SQLDelight persistence and database-first cache-on-read flow.',
    viewSource: 'View source', watchDemo: 'Watch demo', handbookTitle: 'Engineering knowledge, kept useful',
    handbookDescription: 'A bilingual, structured Android development handbook covering Kotlin, Java, Compose, Coroutines & Flow, architecture, testing, networking and performance. I maintain it as a practical reference rather than a collection of disconnected notes.',
    openHandbook: 'Open handbook', viewRepository: 'View repository', sideProject: 'Side project',
    betweenImageLabel: 'Rainy landscape artwork from Between Stops',
    betweenDescription: 'An atmospheric narrative game built by a multidisciplinary team. As the sole engineer, I am building reusable mini-games, animation systems, progress persistence and release-ready Unity scenes.',
    playItch: 'Play on itch.io', contact: 'Contact', contactTitle: 'Let’s build something clear, useful and dependable.', backTop: 'Back to top ↑'
  },
  ru: {
    skip: 'Перейти к содержимому', navLabel: 'Основная навигация', languageLabel: 'Язык', themeLabel: 'Переключить цветовую тему',
    navWork: 'Проекты', navHandbook: 'Handbook', navContact: 'Контакты', availability: 'Открыт к предложениям Senior Android Developer',
    role: 'Senior Android Developer',
    summary: 'Создаю надёжные мобильные продукты и веду сложные функции от технического решения до production - с вниманием к понятной архитектуре, отзывчивому UI и наблюдаемому поведению системы.',
    cvAction: 'Запросить CV', proofLabel: 'Профессиональный профиль', years: 'лет в Android-разработке',
    ownership: 'ответственность за функции от требований до выпуска', graphics: 'карты, рендеринг и интерфейсы с прямым взаимодействием',
    selectedWork: 'Избранные проекты', workTitle: 'Проекты, которые работают, движутся и реагируют',
    workIntro: 'Сфокусированные проекты, которые показывают продуктовое мышление, глубокое знание Android и ответственное техническое исполнение.',
    parcelMediaLabel: 'Открыть Parcel On Map на GitHub', parcelKicker: 'Прототип визуализации маршрута',
    parcelDescription: 'Путь посылки воспроизводится как анимированный маршрут вместо статичного списка статусов. Я собрал multi-module Compose-приложение, поведение камеры карты и lifecycle-safe состояние анимации, подключил реальный источник данных и сфокусированные тесты.',
    filamentMediaLabel: 'Посмотреть демо Reach Out and Touch Screen', filamentKicker: 'Интерактивный 3D-эксперимент',
    filamentDescription: 'Android-сцена, где касания превращаются в пересекающиеся волны на 3D-модели Луны в реальном времени. Я напрямую интегрировал Filament с Compose, реализовал ray casting, интерференцию волн на GPU, multitouch-вращение и явное управление жизненным циклом ресурсов рендера.',
    holocronMediaLabel: 'Открыть Holocron of Balance на GitHub', holocronKicker: 'Offline-first архив знаний',
    holocronDescription: 'Связанный архив превращает удалённые данные Star Wars в исследуемый граф на Android и Desktop. Я спроектировал общую KMP-архитектуру, типизированное хранение в SQLDelight и database-first cache-on-read поток данных.',
    viewSource: 'Исходный код', watchDemo: 'Смотреть демо', handbookTitle: 'Инженерные знания, сохранённые с пользой',
    handbookDescription: 'Двуязычный структурированный справочник по Android-разработке: Kotlin, Java, Compose, Coroutines & Flow, архитектура, тестирование, сети и производительность. Я поддерживаю его как практическую базу знаний, а не набор разрозненных заметок.',
    openHandbook: 'Открыть handbook', viewRepository: 'Открыть репозиторий', sideProject: 'Дополнительный проект',
    betweenImageLabel: 'Дождливый пейзаж из Between Stops',
    betweenDescription: 'Атмосферная сюжетная игра, которую создаёт небольшая междисциплинарная команда. Как единственный инженер я разрабатываю переиспользуемые мини-игры, системы анимаций, сохранение прогресса и готовые к выпуску Unity-сцены.',
    playItch: 'Играть на itch.io', contact: 'Контакты', contactTitle: 'Давайте создадим что-то понятное, полезное и надёжное.', backTop: 'Наверх ↑'
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
  localStorage.setItem('portfolio-language', language);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeMeta.setAttribute('content', theme === 'dark' ? '#0b1016' : '#f3f6f4');
  localStorage.setItem('portfolio-theme', theme);
}

languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

const initialLanguage = localStorage.getItem('portfolio-language') || (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en');
const initialTheme = localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyLanguage(initialLanguage);
applyTheme(initialTheme);
document.querySelector('#year').textContent = new Date().getFullYear();
