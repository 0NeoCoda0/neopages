/**
 * КОНВЕЙЕР КАТИ — ЧИСТЫЙ СБОРЩИК TILDA (V2 CLEAN DEPLOY)
 * Полная изоляция от старого кода.
 * Монтирует шапку, плакатный Hero, монолитную плиту-трансформер и арт-футер.
 */

(function() {
  'use strict';

  console.log('[Конвейер Кати] Инициализация чистого шоурума v2...');

  function mountShowroom() {
    var target = document.getElementById('allrecords') || document.querySelector('.t-records') || document.body;
    if (!target) return;

    var container = document.getElementById('katya-showroom-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'katya-showroom-root';
      target.appendChild(container);
    }

    container.innerHTML = '<!-- Сквозная верхняя строка бренда -->\n  <header class="brand-bar">\n    <a href="/" class="brand-logo" aria-label="Катя Ланчикова главная">\n      <span class="brand-name">КАТЯ ЛАНЧИКОВА</span>\n      <span class="brand-tag">МОСКВА · СТУДИЯ КЕРАМИКИ</span>\n    </a>\n    <nav class="brand-nav" aria-label="Быстрый переход">\n      <a href="/shop" class="nav-link">Витрина</a>\n      <a href="/calculator" class="nav-link">Калькулятор B2B</a>\n      <a href="#contacts" class="nav-link">Контакты</a>\n    </nav>\n  </header>\n\n  <main>\n    <!-- ЭКРАН 1: МОНУМЕНТАЛЬНЫЙ ПЛАКАТНЫЙ МАНИФЕСТ С ФОТО-ЯКОРЕМ (В ДУХЕ LUCY MCCALL & CORD) -->\n    <section class="section-hero" id="hero" aria-label="Манифест">\n      <div class="hero-container">\n        <div class="hero-topline">\n          <span class="meta-label">★ СТУДИЯ АВТОРСКОЙ КЕРАМИКИ · МОСКВА ★</span>\n          <span class="meta-status">1250°C ВЫСОКИЙ ОБЖИГ · ДРОП №14 ДОСТУПЕН</span>\n        </div>\n\n        <div class="hero-main-composition">\n          <div class="hero-typography">\n            <h1 class="poster-title">\n              <span class="title-row title-row-main">СКАЗКА</span>\n              <span class="title-row title-row-sub">\n                <span class="accent-word">ВНУТРИ</span>\n                <span class="title-meta-note">КАЖДОГО<br>ПРЕДМЕТА</span>\n              </span>\n            </h1>\n            <p class="hero-statement">\n              Штучная керамика ручной лепки. Живой край, биоморфные формы и тактильные глазури. Ни одного одинакового предмета.\n            </p>\n          </div>\n\n          <div class="hero-visual-anchor">\n            <div class="hero-photo-wrapper">\n              <img src="https://0neocoda0.github.io/neopages/hero_ceramic.jpg" alt="Авторская керамика Кати Ланчиковой в интерьере" class="hero-art-photo">\n              <span class="photo-art-badge">ШТУЧНЫЙ ОБЪЕКТ · СЕРИЯ 2026</span>\n            </div>\n          </div>\n        </div>\n\n        <div class="hero-bottomline">\n          <span class="hero-geo-tag">МОСКВА · СТУДИЯ КАТИ ЛАНЧИКОВОЙ</span>\n          <a href="#portal" class="scroll-link" aria-label="Перейти к выбору">\n            <span class="scroll-text">СМОТРЕТЬ НАПРАВЛЕНИЯ</span>\n            <span class="scroll-glyph" aria-hidden="true">↓</span>\n          </a>\n        </div>\n      </div>\n    </section>\n\n    <!-- ЭКРАН 2: МОНОЛИТНАЯ ПЛИТА-ТРАНСФОРМЕР (ВИТРИНА / ТИРАЖИ) -->\n    <section class="section-transformer" id="portal" aria-label="Интерактивная развилка">\n      <div class="transformer-wrapper">\n        \n        <!-- Тонкий музейный переключатель в стиле Cord Studio & Lucy McCall -->\n        <div class="transformer-switch-bar">\n          <span class="switch-title">АРХИТЕКТУРА НАПРАВЛЕНИЙ</span>\n          <div class="switch-actions">\n            <button type="button" class="switch-nav-item is-active" id="btnModeB2c" data-mode="b2c">\n              — 01 / ВИТРИНА ДЛЯ ДОМА —\n            </button>\n            <button type="button" class="switch-nav-item" id="btnModeB2b" data-mode="b2b">\n              — 02 / ТИРАЖИ ДЛЯ БИЗНЕСА —\n            </button>\n          </div>\n        </div>\n\n        <!-- Сама монолитная плита -->\n        <div class="monolith-slab" id="monolithSlab" data-state="b2c">\n\n          <!-- СТОРОНА 1: ВИТРИНА / B2C (АКТИВНА ПО УМОЛЧАНИЮ) -->\n          <article class="slab-layer layer-b2c" id="layerB2c">\n            <div class="layer-content">\n              <div class="layer-header">\n                <span class="layer-badge">★ ШТУЧНЫЕ АРТЕФАКТЫ</span>\n                <span class="layer-count">ДРОП №14 · 12 ПРЕДМЕТОВ В НАЛИЧИИ</span>\n              </div>\n\n              <div class="layer-hero-text">\n                <h2 class="slab-title">ВИТРИНА</h2>\n                <p class="slab-lead">\n                  Штучные чашки, вазы и объекты для дома. Каждый предмет вылеплен вручную, хранит след пальцев и тепло высокотемпературного обжига.\n                </p>\n              </div>\n\n              <div class="layer-footer">\n                <a href="/shop" class="btn-cta btn-cta-primary">\n                  <span>Смотреть наличие</span>\n                  <span class="btn-arrow" aria-hidden="true">→</span>\n                </a>\n\n                <!-- Кнопка-стрелка перехода ко второму предложению -->\n                <button type="button" class="trigger-switch" id="triggerToB2b" aria-label="Показать предложение для бизнеса">\n                  <span class="trigger-label">Нужна посуда для ресторана или тираж со смыслом?</span>\n                  <span class="trigger-action">ДЛЯ БИЗНЕСА И РЕСТОРАНОВ [ → ]</span>\n                </button>\n              </div>\n            </div>\n\n            <div class="layer-visual" aria-hidden="true">\n              <div class="photo-frame">\n                <img src="https://0neocoda0.github.io/neopages/ceramic_cup.jpg" alt="Авторская керамическая чашка Кати Ланчиковой" class="ceramic-photo">\n                <div class="photo-caption">[ АВТОРСКИЙ ШАМОТ · РУЧНАЯ ЛЕПКА ]</div>\n              </div>\n            </div>\n          </article>\n\n          <!-- СТОРОНА 2: ТИРАЖИ / B2B (СКРЫТА ДО НАЖАТИЯ СТРЕЛКИ) -->\n          <article class="slab-layer layer-b2b" id="layerB2b">\n            <div class="layer-content">\n              <div class="layer-header">\n                <span class="layer-badge layer-badge-dark">★ B2B & RESTAURANTS</span>\n                <span class="layer-count">ПАРТИИ ОТ 20 ДО 1000 ШТ</span>\n              </div>\n\n              <div class="layer-hero-text">\n                <h2 class="slab-title slab-title-light">ТИРАЖИ</h2>\n                <p class="slab-lead slab-lead-light">\n                  Авторская посуда для ресторанов высокой кухни, отелей и корпоративные подарки. Индивидуальная форма, тестирование глазури и фирменное клеймение.\n                </p>\n              </div>\n\n              <div class="layer-footer">\n                <a href="/calculator" class="btn-cta btn-cta-secondary">\n                  <span>Рассчитать партию в калькуляторе</span>\n                  <span class="btn-arrow" aria-hidden="true">→</span>\n                </a>\n\n                <!-- Кнопка-стрелка возврата к первому предложению -->\n                <button type="button" class="trigger-switch trigger-switch-light" id="triggerToB2c" aria-label="Вернуться к штучной керамике">\n                  <span class="trigger-label">Ищете штучный предмет в коллекцию?</span>\n                  <span class="trigger-action">[ ← ] ВИТРИНА ДЛЯ ДОМА</span>\n                </button>\n              </div>\n            </div>\n\n            <div class="layer-visual" aria-hidden="true">\n              <div class="photo-frame">\n                <img src="https://0neocoda0.github.io/neopages/ceramic_b2b.jpg" alt="Керамическая посуда для ресторанов ручной работы" class="ceramic-photo">\n                <div class="photo-caption">[ СЕТ ПОСУДЫ ДЛЯ ЗАВЕДЕНИЙ ]</div>\n              </div>\n            </div>\n          </article>\n\n        </div>\n\n      </div>\n    </section>\n\n    <!-- ЭКРАН 3: ЛАКОНИЧНЫЙ АРТ-ФУТЕР -->\n    <footer class="section-footer" id="contacts" aria-label="Контакты">\n      <div class="footer-container">\n        <div class="footer-headline">\n          <span class="footer-big-text">СВЯЗАТЬСЯ СО СТУДИЕЙ</span>\n        </div>\n\n        <div class="footer-details">\n          <div class="detail-block">\n            <span class="detail-label">МАСТЕРСКАЯ</span>\n            <p class="detail-val">Москва, арт-кластер · Посещение по записи</p>\n          </div>\n\n          <div class="detail-block">\n            <span class="detail-label">ПРЯМАЯ СВЯЗЬ</span>\n            <p class="detail-val">\n              <a href="https://t.me/lanchikateceramic" target="_blank" rel="noopener" class="footer-link">Telegram: @lanchikateceramic</a><br>\n              <a href="mailto:studio@lanchikova.ru" class="footer-link">studio@lanchikova.ru</a>\n            </p>\n          </div>\n\n          <div class="detail-block">\n            <span class="detail-label">НАПРАВЛЕНИЯ</span>\n            <p class="detail-val">\n              <a href="/shop" class="footer-link">Розничный каталог</a> · \n              <a href="/calculator" class="footer-link">Калькулятор партий</a> · \n              <a href="/corporate" class="footer-link">B2B сотрудничество</a>\n            </p>\n          </div>\n        </div>\n\n        <div class="footer-copyright">\n          <span>© 2026 КАТЯ ЛАНЧИКОВА. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>\n          <span class="mono-sign">SLOW CRAFT & ART POTTERY</span>\n        </div>\n      </div>\n    </footer>\n  </main>';

    initTransformer();
  }

  function initTransformer() {
    var slab = document.getElementById('monolithSlab');
    var btnModeB2c = document.getElementById('btnModeB2c');
    var btnModeB2b = document.getElementById('btnModeB2b');
    var triggerToB2b = document.getElementById('triggerToB2b');
    var triggerToB2c = document.getElementById('triggerToB2c');

    if (!slab) return;

    function setMode(mode) {
      slab.setAttribute('data-state', mode);
      if (mode === 'b2c') {
        if (btnModeB2c) btnModeB2c.classList.add('is-active');
        if (btnModeB2b) btnModeB2b.classList.remove('is-active');
      } else {
        if (btnModeB2b) btnModeB2b.classList.add('is-active');
        if (btnModeB2c) btnModeB2c.classList.remove('is-active');
      }
    }

    if (btnModeB2c) btnModeB2c.addEventListener('click', function() { setMode('b2c'); });
    if (btnModeB2b) btnModeB2b.addEventListener('click', function() { setMode('b2b'); });
    if (triggerToB2b) triggerToB2b.addEventListener('click', function() { setMode('b2b'); });
    if (triggerToB2c) triggerToB2c.addEventListener('click', function() { setMode('b2c'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountShowroom);
  } else {
    mountShowroom();
  }
})();
