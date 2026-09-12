/* ==========================================================================
   КОНВЕЙЕР КАТИ — КАСТОМНЫЕ СКРИПТЫ ДЛЯ TILDA
   Автоматически подключаемый JS-файл через GitHub Pages CDN.
   Служит для инжекции блоков, навигационного сайдбара, аналитики и лидов.
   ========================================================================== */

(function() {
  'use strict';

  console.log('[Конвейер Кати] Скрипт внешнего управления успешно загружен (GitHub Pages CDN).');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    removeArtCenterBlock();
    injectLeftSidebarNav();
    injectShowcaseBlock();
    initFormHandlers();
  }

  /**
   * Удаление старого шаблонного блока T1016 (арт-центр, таймер)
   */
  function removeArtCenterBlock() {
    var badBlocks = document.querySelectorAll('#rec3834581901, [data-record-type="1016"]');
    badBlocks.forEach(function(el) {
      el.remove();
    });
  }

  /**
   * 1. Внедрение левой панели категорий (The Magic Shop style)
   */
  function injectLeftSidebarNav() {
    if (document.getElementById('katya-sidebar-wrapper')) {
      return;
    }

    // Создаем плавающую кнопку-триггер меню слева
    var triggerBtn = document.createElement('button');
    triggerBtn.id = 'katya-sidebar-trigger';
    triggerBtn.className = 'katya-sidebar-trigger-btn';
    triggerBtn.setAttribute('aria-label', 'Открыть меню');
    triggerBtn.innerHTML = `
      <span class="katya-burger-icon">
        <span></span>
        <span></span>
      </span>
      <span class="katya-burger-text">МЕНЮ</span>
    `;

    // Создаем выдвижной сайдбар слева
    var sidebarWrapper = document.createElement('div');
    sidebarWrapper.id = 'katya-sidebar-wrapper';
    sidebarWrapper.className = 'katya-sidebar-wrapper';

    sidebarWrapper.innerHTML = `
      <div class="katya-sidebar-overlay" id="katya-sidebar-overlay"></div>
      <aside class="katya-sidebar-panel" aria-label="Боковая навигация">
        <div class="katya-sidebar-header">
          <a href="/" class="katya-sidebar-brand" style="text-decoration:none; color:inherit;">✦ КАТЯ ЛАНЧИКОВА ✦</a>
          <button type="button" class="katya-sidebar-close" id="katya-sidebar-close" aria-label="Закрыть меню">✕</button>
        </div>

        <nav class="katya-sidebar-nav">
          <ul class="katya-nav-list">
            <!-- 0. Главная -->
            <li class="katya-nav-item">
              <a href="/" class="katya-nav-link" data-target="home">
                <span class="katya-nav-num">00</span>
                <span class="katya-nav-title">Главная</span>
              </a>
            </li>

            <!-- 1. Магазин с подразделами -->
            <li class="katya-nav-item katya-has-sub">
              <a href="/shop" class="katya-nav-link" data-target="shop">
                <span class="katya-nav-num">01</span>
                <span class="katya-nav-title">Магазин</span>
              </a>
              <ul class="katya-sub-nav">
                <li><a href="/shop#vases" class="katya-sub-link">🏺 Вазы</a></li>
                <li><a href="/shop#candles" class="katya-sub-link">🕯️ Подсвечники</a></li>
                <li><a href="/shop#toys" class="katya-sub-link">🎄 Керамические ёлочные игрушки</a></li>
              </ul>
            </li>

            <!-- 2. Корпоративные заказы (между магазином и архивом) -->
            <li class="katya-nav-item">
              <a href="/corporate" class="katya-nav-link" data-target="corporate">
                <span class="katya-nav-num">02</span>
                <span class="katya-nav-title">Корпоративные заказы</span>
                <span class="katya-badge-pill">B2B</span>
              </a>
            </li>

            <!-- 3. Архив -->
            <li class="katya-nav-item">
              <a href="/archive" class="katya-nav-link" data-target="archive">
                <span class="katya-nav-num">03</span>
                <span class="katya-nav-title">Архив</span>
              </a>
            </li>

            <!-- 4. Обо мне -->
            <li class="katya-nav-item">
              <a href="/about" class="katya-nav-link" data-target="about">
                <span class="katya-nav-num">04</span>
                <span class="katya-nav-title">Обо мне</span>
              </a>
            </li>

            <!-- 5. Контакты -->
            <li class="katya-nav-item">
              <a href="/contacts" class="katya-nav-link" data-target="contacts">
                <span class="katya-nav-num">05</span>
                <span class="katya-nav-title">Контакты</span>
              </a>
            </li>

            <!-- 6. Частые вопросы -->
            <li class="katya-nav-item">
              <a href="/faq" class="katya-nav-link" data-target="faq">
                <span class="katya-nav-num">06</span>
                <span class="katya-nav-title">Ответы на вопросы</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="katya-sidebar-footer">
          <div class="katya-shipping-note">
            📦 <b>Доставка:</b> расчет при оформлении заказа и в B2B-смете. Гарантия целостности по РФ.
          </div>
          <div class="katya-social-links">
            <a href="https://t.me/" target="_blank" rel="noopener">Telegram</a>
            <span>·</span>
            <a href="https://wa.me/" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </aside>
    `;

    document.body.appendChild(triggerBtn);
    document.body.appendChild(sidebarWrapper);

    // События открытия/закрытия
    function openSidebar() {
      sidebarWrapper.classList.add('katya-active');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebarWrapper.classList.remove('katya-active');
      document.body.style.overflow = '';
    }

    triggerBtn.addEventListener('click', openSidebar);
    document.getElementById('katya-sidebar-close').addEventListener('click', closeSidebar);
    document.getElementById('katya-sidebar-overlay').addEventListener('click', closeSidebar);

    // Закрытие при клике на ссылку внутри сайдбара
    var links = sidebarWrapper.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        closeSidebar();
        var targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          var targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  /**
   * 2. Создает авторский навигационный блок-хаб на Главной странице,
   * дублирующий все 6 разделов со ссылками на отдельные страницы.
   */
  function injectShowcaseBlock() {
    var blockId = 'katya-custom-showcase-block';
    if (document.getElementById(blockId)) {
      return;
    }

    var container = document.getElementById('allrecords') || document.querySelector('.t-records') || document.body;
    if (!container) {
      return;
    }

    var section = document.createElement('div');
    section.id = blockId;
    section.className = 'katya-showcase-section r t-rec';

    section.innerHTML = `
      <div class="katya-container">
        <div class="katya-badge">
          <span class="katya-badge-dot"></span>
          ✦ СТУДИЯ КАТИ ЛАНЧИКОВОЙ · НАВИГАЦИЯ ШОУРУМА ✦
        </div>

        <h2 class="katya-title">Рукотворная магия в каждом прикосновении</h2>
        
        <p class="katya-subtitle">
          Мы создаем керамику, в которой живет тепло человеческих рук.
          Используйте левое меню или переходите в нужный раздел прямо с главной страницы:
        </p>

        <!-- Навигационная сетка из 6 разделов (в точности дублирует сайдбар) -->
        <div class="katya-hub-grid">
          
          <!-- 1. Магазин -->
          <div class="katya-hub-card" id="katya-sec-shop">
            <div class="katya-hub-header">
              <span class="katya-hub-num">01</span>
              <span class="katya-hub-tag">Каталог</span>
            </div>
            <h3 class="katya-hub-title">Магазин</h3>
            <p class="katya-hub-desc">Авторские коллекции в наличии и под заказ: интерьерные вазы, скульптурные подсвечники и праздничные ёлочные игрушки.</p>
            <div class="katya-hub-sublinks">
              <span>🏺 Вазы</span> · <span>🕯️ Подсвечники</span> · <span>🎄 Ёлочные игрушки</span>
            </div>
            <a href="/shop" class="katya-hub-action">Смотреть изделия →</a>
          </div>

          <!-- 2. Корпоративные заказы (между магазином и архивом) -->
          <div class="katya-hub-card katya-card-highlight" id="katya-sec-corporate">
            <div class="katya-hub-header">
              <span class="katya-hub-num">02</span>
              <span class="katya-badge-pill">B2B</span>
            </div>
            <h3 class="katya-hub-title">Корпоративные заказы</h3>
            <p class="katya-hub-desc">Подарки со смыслом для партнеров и коллег с вашим логотипом. Тиражи от 20 до 500+ шт., интерактивный расчет сметы и договор.</p>
            <div class="katya-hub-sublinks">
              <span>⚡ Калькулятор сметы</span> · <span>📦 Доставка по РФ</span>
            </div>
            <a href="/corporate" class="katya-hub-action katya-action-olive">Рассчитать стоимость партии →</a>
          </div>

          <!-- 3. Архив -->
          <div class="katya-hub-card" id="katya-sec-archive">
            <div class="katya-hub-header">
              <span class="katya-hub-num">03</span>
              <span class="katya-hub-tag">Галерея</span>
            </div>
            <h3 class="katya-hub-title">Архив работ</h3>
            <p class="katya-hub-desc">Коллекция уникальных штучных и проданных работ мастерской. Вдохновение для индивидуальных заказов.</p>
            <a href="/archive" class="katya-hub-action">Исследовать архив →</a>
          </div>

          <!-- 4. Обо мне -->
          <div class="katya-hub-card" id="katya-sec-about">
            <div class="katya-hub-header">
              <span class="katya-hub-num">04</span>
              <span class="katya-hub-tag">Мастер</span>
            </div>
            <h3 class="katya-hub-title">Обо мне</h3>
            <p class="katya-hub-desc">История Кати Ланчиковой, философия slow craft, почему глина и как устроен процесс обжига при 1250°C.</p>
            <a href="/about" class="katya-hub-action">История мастерской →</a>
          </div>

          <!-- 5. Контакты -->
          <div class="katya-hub-card" id="katya-sec-contacts">
            <div class="katya-hub-header">
              <span class="katya-hub-num">05</span>
              <span class="katya-hub-tag">Диалог</span>
            </div>
            <h3 class="katya-hub-title">Контакты</h3>
            <p class="katya-hub-desc">Прямая связь с Катей в Telegram и WhatsApp, визит в мастерскую и персональные консультации.</p>
            <a href="/contacts" class="katya-hub-action">Связаться с Катей →</a>
          </div>

          <!-- 6. Частые вопросы (FAQ) -->
          <div class="katya-hub-card" id="katya-sec-faq">
            <div class="katya-hub-header">
              <span class="katya-hub-num">06</span>
              <span class="katya-hub-tag">Помощь</span>
            </div>
            <h3 class="katya-hub-title">Частые вопросы</h3>
            <p class="katya-hub-desc">Как ухаживать за керамикой, можно ли мыть в посудомойке, гарантия сохранности при доставке по почте.</p>
            <a href="/faq" class="katya-hub-action">Ответы и уход →</a>
          </div>

        </div>

        <div class="katya-shipping-bar">
          <span>📦</span>
          <span><b>Правило доставки:</b> условия и расчет доставки интегрированы в чекаут оформления заказа и в форму B2B-сметы.</span>
        </div>
      </div>
    `;

    container.appendChild(section);
    console.log('[Конвейер Кати] Навигационный хаб и боковая панель успешно внедрены!');
  }

  function initFormHandlers() {
    document.addEventListener('tildaform:aftersuccess', function(e) {
      var form = e.target;
      console.log('[Конвейер Кати] Входящая заявка перехвачена:', form);
    });
  }
})();
