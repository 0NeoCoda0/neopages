/* ==========================================================================
   КОНВЕЙЕР КАТИ — КАСТОМНЫЕ СКРИПТЫ ДЛЯ TILDA
   Автоматически подключаемый JS-файл через GitHub Pages CDN.
   Служит для инжекции блоков, интерактивности, аналитики и перехвата лидов.
   ========================================================================== */

(function() {
  'use strict';

  console.log('[Конвейер Кати] Скрипт внешнего управления успешно загружен (GitHub Pages CDN).');

  // Запуск инжекции блоков и обработчиков
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    injectShowcaseBlock();
    initFormHandlers();
  }

  /**
   * Создает и вставляет авторский блок студии под верхним блоком (Hero/Cover)
   */
  function injectShowcaseBlock() {
    var blockId = 'katya-custom-showcase-block';
    
    // Проверка на дубликат
    if (document.getElementById(blockId)) {
      return;
    }

    // Ищем верхний блок (по ID rec2112149101 или первый t-rec в контейнере)
    var topBlock = document.getElementById('rec2112149101') || document.querySelector('.t-records > .t-rec');
    if (!topBlock) {
      console.warn('[Конвейер Кати] Верхний блок не найден для вставки.');
      return;
    }

    // Создаем контейнер блока
    var section = document.createElement('div');
    section.id = blockId;
    section.className = 'katya-showcase-section r t-rec';

    section.innerHTML = `
      <div class="katya-container">
        <div class="katya-badge">
          <span class="katya-badge-dot"></span>
          ✦ СТУДИЯ КАТИ ЛАНЧИКОВОЙ · SLOW CRAFT ✦
        </div>

        <h2 class="katya-title">Рукотворная магия в каждом прикосновении</h2>
        
        <p class="katya-subtitle">
          Мы создаем посуду и предметы интерьера, в которых живет тепло человеческих рук.
          Неидеальные органические формы, тактильная шероховатость глины и игра высокотемпературных глазурей.
        </p>

        <div class="katya-grid">
          <div class="katya-card">
            <div class="katya-card-icon">🏺</div>
            <h3 class="katya-card-title">100% Ручная работа</h3>
            <p class="katya-card-text">Каждое изделие формуется на гончарном круге или вручную из пласта. Никакой фабричной штамповки — только живая пластика.</p>
          </div>

          <div class="katya-card">
            <div class="katya-card-icon">🌿</div>
            <h3 class="katya-card-title">Экологичные материалы</h3>
            <p class="katya-card-text">Натуральная каменная глина и безопасные пищевые глазури. Высокий обжиг 1250°C гарантирует прочность и долговечность.</p>
          </div>

          <div class="katya-card">
            <div class="katya-card-icon">✨</div>
            <h3 class="katya-card-title">Лимитированные дропы</h3>
            <p class="katya-card-text">Изделия выпускаются штучными сезонными коллекциями или создаются под заказ с учетом ваших цветовых пожеланий.</p>
          </div>
        </div>

        <div class="katya-action-bar">
          <button type="button" class="katya-primary-btn" id="katya-btn-explore">
            Узнать об открытии дропа ↓
          </button>
          <div class="katya-live-status">
            <span class="katya-status-dot"></span>
            Блок успешно подключен через внешний файл GitHub Pages
          </div>
        </div>
      </div>
    `;

    // Вставляем блок сразу под верхний cover
    topBlock.insertAdjacentElement('afterend', section);
    console.log('[Конвейер Кати] Новый авторский блок успешно создан и вставлен под верхний блок!');

    // Навешиваем плавный скролл по клику на кнопку
    var exploreBtn = document.getElementById('katya-btn-explore');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', function() {
        var timerBlock = document.getElementById('rec3834581901');
        if (timerBlock) {
          timerBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // Отслеживание успешной отправки форм Тильды
  function initFormHandlers() {
    document.addEventListener('tildaform:aftersuccess', function(e) {
      var form = e.target;
      console.log('[Конвейер Кати] Входящая заявка перехвачена:', form);
    });
  }
})();
