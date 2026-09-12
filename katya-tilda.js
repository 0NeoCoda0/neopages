/* ==========================================================================
   КОНВЕЙЕР КАТИ — ИНТЕРАКТИВНЫЙ ФРОНТЕНД-ДВИЖОК ДЛЯ TILDA (D4-05)
   Шоурум авторской керамики Кати Ланчиковой.
   Автоматически подключаемый JS через GitHub Pages CDN.
   Включает: Sticky Header, Hero Cover, Curated Drop с Hover Swap (3:4),
   Quick View Modal (Bottom Sheet на мобайле), Checkout Drawer в 2 шага,
   интерактивный B2B-калькулятор тиражей и сквозную навигацию.
   ========================================================================== */

(function() {
  'use strict';

  console.log('[Конвейер Кати] Инициализация адаптивного движка витрины D4-05.');

  // Данные актуальной коллекции первого дропа
  var PRODUCTS = [
    {
      id: 'VZ-042',
      category: 'vases',
      categoryName: 'Интерьерные вазы',
      title: 'Ваза «Амфора»',
      price: 5400,
      badge: 'В наличии (1 шт)',
      badgeType: 'new',
      img1: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Лаконичная интерьерная форма с мягкими потеками натуральной глазури. Прекрасно смотрится соло, а также с сухоцветами или ветвями эвкалипта.',
      height: '24 см',
      diameter: '14 см',
      weight: '820 г',
      material: 'Шамотная глина, обжиг при 1250°C'
    },
    {
      id: 'CD-018',
      category: 'candles',
      categoryName: 'Интерьерный декор',
      title: 'Подсвечник «Капля»',
      price: 2800,
      badge: 'Штучный экземпляр',
      badgeType: 'highlight',
      img1: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Скульптурный держатель для конической свечи. Игра теней на матовой поверхности создает медитативную атмосферу уюта в полумраке.',
      height: '9 см',
      diameter: '11 см',
      weight: '380 г',
      material: 'Высокотемпературный полуфарфор'
    },
    {
      id: 'TY-005',
      category: 'toys',
      categoryName: 'Ёлочные игрушки',
      title: 'Сет «Зимняя сказка» (3 шт)',
      price: 3900,
      badge: 'В наличии (2 сета)',
      badgeType: 'new',
      img1: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Подарочный набор из трёх штучных подвесок на ёлку (Звезда, Птица, Домик). Тонкая роспись цветными ангобами, золотой люстр и льняной шнурок.',
      height: '7–9 см',
      diameter: 'Толщина 6 мм',
      weight: '160 г (сет)',
      material: 'Белая глина, глазурь, золотой люстр, крафт-бокс'
    },
    {
      id: 'VZ-089',
      category: 'vases',
      categoryName: 'Интерьерные вазы',
      title: 'Ваза «Песчаная дюна»',
      price: 6200,
      badge: 'В наличии (1 шт)',
      badgeType: 'new',
      img1: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Монументальная ваза с выразительной фактурой песчаника. Вылеплена вручную в технике пласта с последующей ручной доводкой силуэта.',
      height: '28 см',
      diameter: '16 см',
      weight: '1 150 г',
      material: 'Шамотная глина, матовая авторская глазурь'
    },
    {
      id: 'CP-012',
      category: 'dishes',
      categoryName: 'Посуда ручной работы',
      title: 'Чайная пара «Утро»',
      price: 3400,
      badge: 'Под заказ (10 дней)',
      badgeType: 'preorder',
      img1: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Чашка с удобным эргономичным хватом и органичное блюдце с живым неровным краем. Идеально сохраняет температуру чая или кофе.',
      height: 'Чашка 250 мл',
      diameter: 'Блюдце 14 см',
      weight: '440 г',
      material: 'Полуфарфор, 100% безопасная пищевая глазурь'
    },
    {
      id: 'CD-031',
      category: 'candles',
      categoryName: 'Скульптурный декор',
      title: 'Подсвечник «Ветка»',
      price: 3100,
      badge: 'В наличии (1 шт)',
      badgeType: 'new',
      img1: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop',
      img2: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
      ],
      desc: 'Причудливая биоморфная форма подсвечника, напоминающая изогнутую ветвь старого дерева после дождя. Устойчивое широкое основание.',
      height: '15 см',
      diameter: 'Длина 18 см',
      weight: '620 г',
      material: 'Шамот, восстановительный обжиг 1250°C'
    }
  ];

  // Состояние корзины
  var cart = [];
  try {
    var savedCart = localStorage.getItem('katya_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('katya_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartCounter();
  }

  function updateCartCounter() {
    var count = cart.reduce(function(acc, item) { return acc + item.qty; }, 0);
    var badges = document.querySelectorAll('.katya-cart-count-badge');
    badges.forEach(function(badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  function addToCart(productId, qty) {
    qty = qty || 1;
    var product = PRODUCTS.find(function(p) { return p.id === productId; });
    if (!product) return;

    var existing = cart.find(function(item) { return item.id === productId; });
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img1,
        qty: qty
      });
    }
    saveCart();
    showToast('«' + product.title + '» добавлено в корзину');
    renderCartDrawerContent();
  }

  function showToast(msg) {
    var toast = document.getElementById('katya-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'katya-toast';
      toast.className = 'katya-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('katya-toast-show');
    setTimeout(function() {
      toast.classList.remove('katya-toast-show');
    }, 3000);
  }

  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    removeArtCenterBlock();
    injectLeftSidebarNav();
    injectStickyHeader();
    injectQuickViewModal();
    injectCartDrawer();

    // Проверяем текущий путь:
    var path = window.location.pathname;
    var hash = window.location.hash;
    var isB2B = path.includes('corporate') || path.includes('b2b') || hash === '#b2b' || path.includes('239981309');

    if (isB2B) {
      mountB2BLanding();
    } else if (path === '/' || path === '' || path === '/index.html' || path.includes('cleverly-clumsy-panda')) {
      mountFullShowroomLanding();
    }
    updateCartCounter();
  }

  function removeArtCenterBlock() {
    var badBlocks = document.querySelectorAll('#rec3834581901, [data-record-type="1016"], #katya-custom-showcase-block');
    badBlocks.forEach(function(el) {
      el.remove();
    });
  }

  /**
   * Сквозной Sticky Header (Lucy McCall / Hallmark Style)
   */
  function injectStickyHeader() {
    if (document.getElementById('katya-sticky-header')) return;

    var header = document.createElement('header');
    header.id = 'katya-sticky-header';
    header.className = 'katya-sticky-header';
    header.innerHTML = `
      <div class="katya-header-container">
        <div class="katya-header-left">
          <button type="button" class="katya-header-burger-minimal" id="katya-header-menu-trigger" aria-label="Открыть меню">
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
          </button>
          <nav class="katya-header-nav-desktop" aria-label="Основное меню">
            <a href="/" class="katya-header-nav-link active">Главная</a>
            <a href="/shop" class="katya-header-nav-link">Коллекция</a>
            <a href="/about" class="katya-header-nav-link">О мастере</a>
            <a href="/corporate" class="katya-header-nav-link">B2B</a>
            <a href="/contacts" class="katya-header-nav-link">Контакты</a>
          </nav>
        </div>

        <a href="/" class="katya-header-logo">КАТЯ ЛАНЧИКОВА</a>

        <div class="katya-header-right">
          <a href="/shop" class="katya-header-shop-text-link">Магазин</a>
          <button type="button" class="katya-header-cart-btn-minimal" id="katya-header-cart-trigger" aria-label="Корзина">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span class="katya-cart-count-badge">0</span>
          </button>
        </div>
      </div>
    `;

    document.body.prepend(header);

    // События клика
    var menuBtn = document.getElementById('katya-header-menu-trigger');
    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        var wrapper = document.getElementById('katya-sidebar-wrapper');
        if (wrapper) {
          wrapper.classList.add('katya-active');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    var cartBtn = document.getElementById('katya-header-cart-trigger');
    if (cartBtn) {
      cartBtn.addEventListener('click', openCartDrawer);
    }
  }

  /**
   * Левая навигационная панель (Lucy McCall editorial drawer)
   */
  function injectLeftSidebarNav() {
    if (document.getElementById('katya-sidebar-wrapper')) return;

    var sidebarWrapper = document.createElement('div');
    sidebarWrapper.id = 'katya-sidebar-wrapper';
    sidebarWrapper.className = 'katya-sidebar-wrapper';

    sidebarWrapper.innerHTML = `
      <div class="katya-sidebar-overlay" id="katya-sidebar-overlay"></div>
      <aside class="katya-sidebar-panel" aria-label="Боковая навигация">
        <div class="katya-sidebar-header">
          <a href="/" class="katya-sidebar-brand">КАТЯ ЛАНЧИКОВА</a>
          <button type="button" class="katya-sidebar-close" id="katya-sidebar-close" aria-label="Закрыть меню">✕</button>
        </div>

        <nav class="katya-sidebar-nav">
          <ul class="katya-nav-list">
            <li class="katya-nav-item">
              <a href="/" class="katya-nav-link">
                <span class="katya-nav-num">01</span>
                <span class="katya-nav-title">Главная</span>
              </a>
            </li>
            <li class="katya-nav-item katya-has-sub">
              <a href="/shop" class="katya-nav-link">
                <span class="katya-nav-num">02</span>
                <span class="katya-nav-title">Магазин керамики</span>
              </a>
              <ul class="katya-sub-nav">
                <li><a href="/shop#vases" class="katya-sub-link">Вазы и сосуды</a></li>
                <li><a href="/shop#candles" class="katya-sub-link">Подсвечники</a></li>
                <li><a href="/shop#toys" class="katya-sub-link">Ёлочные украшения</a></li>
              </ul>
            </li>
            <li class="katya-nav-item">
              <a href="/corporate" class="katya-nav-link">
                <span class="katya-nav-num">03</span>
                <span class="katya-nav-title">Корпоративные тиражи</span>
                <span class="katya-badge-pill">B2B</span>
              </a>
            </li>
            <li class="katya-nav-item">
              <a href="/archive" class="katya-nav-link">
                <span class="katya-nav-num">04</span>
                <span class="katya-nav-title">Архив работ</span>
              </a>
            </li>
            <li class="katya-nav-item">
              <a href="/about" class="katya-nav-link">
                <span class="katya-nav-num">05</span>
                <span class="katya-nav-title">О мастере и технике</span>
              </a>
            </li>
            <li class="katya-nav-item">
              <a href="/contacts" class="katya-nav-link">
                <span class="katya-nav-num">06</span>
                <span class="katya-nav-title">Контакты</span>
              </a>
            </li>
            <li class="katya-nav-item">
              <a href="/faq" class="katya-nav-link">
                <span class="katya-nav-num">07</span>
                <span class="katya-nav-title">Вопросы и доставка</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="katya-sidebar-footer">
          <div class="katya-shipping-note">
            <b>Бережная отправка:</b> СДЭК и Почта по РФ. Гарантия сохранности каждого изделия.
          </div>
          <div class="katya-social-links">
            <a href="https://t.me/katya_ceramics" target="_blank" rel="noopener">Telegram</a>
            <span>—</span>
            <a href="mailto:info@katyaceramics.ru">info@katyaceramics.ru</a>
          </div>
        </div>
      </aside>
    `;

    document.body.appendChild(sidebarWrapper);

    function closeSidebar() {
      sidebarWrapper.classList.remove('katya-active');
      document.body.style.overflow = '';
    }

    document.getElementById('katya-sidebar-close').addEventListener('click', closeSidebar);
    document.getElementById('katya-sidebar-overlay').addEventListener('click', closeSidebar);
  }

  /**
   * Монтирование полного Шоурума на Главной странице (Showroom Hub)
   */
  function mountFullShowroomLanding() {
    var target = document.getElementById('allrecords') || document.querySelector('.t-records') || document.body;
    if (!target) return;

    var container = document.getElementById('katya-showroom-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'katya-showroom-root';
      container.className = 'katya-showroom-root';
      target.appendChild(container);
    }

    container.innerHTML = `
      <!-- 1. HERO BLOCK -->
      <section class="katya-hero-section">
        <div class="katya-hero-overlay"></div>
        <div class="katya-hero-content">
          <div class="katya-hero-badge">Авторская керамика ручной работы</div>
          <h1 class="katya-hero-title">Сказка внутри каждого предмета</h1>
          <p class="katya-hero-lead">
            Живые формы, рожденные из шамотной глины, воды и огня.<br/>
            Высокотемпературный обжиг при 1250°C. Вещи, хранящие тепло человеческих рук.
          </p>
          <div class="katya-hero-actions">
            <a href="#curated-drop" class="katya-hero-link-primary">Смотреть коллекцию ↓</a>
            <a href="/about" class="katya-hero-link-secondary">История мастера →</a>
          </div>
        </div>
        <div class="katya-hero-scroll-hint">
          <span>Листайте вниз</span>
          <div class="katya-scroll-line"></div>
        </div>
      </section>

      <!-- 2. CURATED DROP (КАТАЛОГ 3:4 С HOVER SWAP) -->
      <section class="katya-drop-section" id="curated-drop">
        <div class="katya-container">
          <div class="katya-section-header katya-header-craft">
            <h2 class="katya-title-craft">Коллекция: Тепло земли</h2>
            <p class="katya-subtitle-craft">
              Штучные изделия ручной лепки из шамота и полуфарфора. Высокотемпературный обжиг.
            </p>

            <!-- Легкие текстовые фильтры (Cord Studio & Lucy McCall style) -->
            <nav class="katya-filter-links" aria-label="Фильтрация коллекции">
              <button type="button" class="katya-filter-link active" data-cat="all">Все предметы</button>
              <button type="button" class="katya-filter-link" data-cat="vases">Вазы</button>
              <button type="button" class="katya-filter-link" data-cat="candles">Подсвечники</button>
              <button type="button" class="katya-filter-link" data-cat="toys">Ёлочные игрушки</button>
            </nav>
          </div>

          <!-- Сетка товаров -->
          <div class="katya-products-grid" id="katya-products-grid">
            ${renderProductCardsHtml(PRODUCTS)}
          </div>

          <div class="katya-catalog-footer-action">
            <a href="/shop" class="katya-btn katya-btn-accent">Перейти в полный каталог магазина →</a>
          </div>
        </div>
      </section>

      <!-- 3. СТОРИТЕЛЛИНГ / СТУДИЯ (SLOW CRAFT) -->
      <section class="katya-story-section">
        <div class="katya-container katya-story-grid">
          <div class="katya-story-visual">
            <div class="katya-story-img-wrap">
              <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop" alt="Катя Ланчикова в мастерской" class="katya-story-img"/>
              <div class="katya-story-tag">Мастерская • Москва</div>
            </div>
          </div>
          <div class="katya-story-text">
            <span class="katya-badge katya-badge-light">ФИЛОСОФИЯ SLOW CRAFT</span>
            <h2 class="katya-story-quote">«В мире спешки я выбираю медленный диалог с глиной»</h2>
            <p class="katya-story-p">
              Каждый предмет студии формуется исключительно вручную — без конвейерных гипсовых форм и шаблонной штамповки. Мы сушим изделия неделями и закаляем их в печи при температуре 1250°C.
            </p>
            <div class="katya-story-facts">
              <div class="katya-fact-item">
                <span class="katya-fact-val">1250°C</span>
                <span class="katya-fact-lbl">Плотность камня, водонепроницаемость</span>
              </div>
              <div class="katya-fact-item">
                <span class="katya-fact-val">100% Eco</span>
                <span class="katya-fact-lbl">Безопасные пищевые глазури без свинца</span>
              </div>
              <div class="katya-fact-item">
                <span class="katya-fact-val">Штучность</span>
                <span class="katya-fact-lbl">Уникальный тактильный характер</span>
              </div>
            </div>
            <a href="/about" class="katya-btn katya-btn-primary">Узнать больше об авторе →</a>
          </div>
        </div>
      </section>

      <!-- 4. ГАРАНТИИ БЕРЕЖНОЙ ДОСТАВКИ (СВЕЖИЙ ВЕКТОРНЫЙ ДИЗАЙН) -->
      <section class="katya-guarantees-section">
        <div class="katya-container">
          <div class="katya-guarantees-grid">
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                </svg>
              </div>
              <h4 class="katya-g-title">Тройная крафт-защита</h4>
              <p class="katya-g-desc">Сотовая эко-бумага, индивидуальный брендированный бокс и усиленный транспортировочный короб.</p>
            </div>
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h4 class="katya-g-title">100% страховка боя</h4>
              <p class="katya-g-desc">Если изделие повредится при доставке, мы бесплатно повторим работу или вернем деньги в день обращения.</p>
            </div>
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="16" height="13" x="1" y="6" rx="2"/>
                  <path d="M16 8h4l3 3v5h-7V8z"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h4 class="katya-g-title">Бережная отправка по РФ</h4>
              <p class="katya-g-desc">СДЭК до двери/ПВЗ и Почта 1 класса за 2–4 дня. Персональный трек-номер прямо в Telegram.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. FOOTER -->
      <footer class="katya-footer">
        <div class="katya-container katya-footer-container">
          <div class="katya-footer-col">
            <span class="katya-footer-brand">КАТЯ ЛАНЧИКОВА</span>
            <p class="katya-footer-desc">Студия авторской интерьерной керамики ручной работы. Сказка внутри каждого предмета.</p>
          </div>
          <div class="katya-footer-col">
            <h5 class="katya-footer-heading">Навигация</h5>
            <ul class="katya-footer-links">
              <li><a href="/shop">Магазин керамики</a></li>
              <li><a href="/corporate">Корпоративные подарки</a></li>
              <li><a href="/archive">Архив работ</a></li>
              <li><a href="/about">О мастере</a></li>
            </ul>
          </div>
          <div class="katya-footer-col">
            <h5 class="katya-footer-heading">Помощь и связь</h5>
            <ul class="katya-footer-links">
              <li><a href="/faq">Правила ухода и FAQ</a></li>
              <li><a href="/contacts">Контакты мастерской</a></li>
              <li><a href="https://t.me/katya_ceramics" target="_blank" rel="noopener">Telegram-канал</a></li>
            </ul>
          </div>
        </div>
        <div class="katya-footer-bottom">
          <div class="katya-container">
            <span>© 2026 Студия Кати Ланчиковой. Все права защищены.</span>
          </div>
        </div>
      </footer>
    `;

    bindCatalogEvents();
  }

  /**
   * Монтирование выделенной страницы B2B / Корпоративные заказы (/corporate)
   */
  function mountB2BLanding() {
    var target = document.getElementById('allrecords') || document.querySelector('.t-records') || document.body;
    if (!target) return;

    var container = document.getElementById('katya-b2b-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'katya-b2b-root';
      container.className = 'katya-b2b-root';
      target.appendChild(container);
    }

    container.innerHTML = `
      <!-- 1. B2B HERO SECTION -->
      <section class="katya-hero-section katya-b2b-hero" style="min-height: 520px; padding: 120px 24px 60px 24px;">
        <div class="katya-hero-overlay"></div>
        <div class="katya-hero-content">
          <div class="katya-hero-badge">КОРПОРАТИВНЫЕ ЗАКАЗЫ И ТИРАЖИ</div>
          <h1 class="katya-hero-title">Подарки со смыслом для брендов и команд</h1>
          <p class="katya-hero-lead">
            Ёлочные игрушки, подсвечники, чашки и вазы ручной работы с тиснением вашего логотипа прямо на глине.<br/>
            Тиражи от 20 до 500+ шт. Официальный договор, безналичный расчет и ЭДО (Диадок).
          </p>
          <div class="katya-hero-actions">
            <a href="#b2b-calculator" class="katya-hero-link-primary">Рассчитать стоимость партии ↓</a>
            <a href="https://t.me/katya_ceramics" target="_blank" rel="noopener" class="katya-hero-link-secondary">Написать в Telegram →</a>
          </div>
        </div>
      </section>

      <!-- 2. ИНТЕРАКТИВНЫЙ B2B-КАЛЬКУЛЯТОР ДЛЯ КОМПАНИЙ -->
      <section class="katya-b2b-calc-section" id="b2b-calculator">
        <div class="katya-container">
          <div class="katya-b2b-card">
            <div class="katya-b2b-badge">ОНЛАЙН-КАЛЬКУЛЯТОР ТИРАЖА</div>
            <h2 class="katya-title katya-b2b-title">Конструктор корпоративной сметы</h2>
            <p class="katya-subtitle">
              Выберите тип изделия и укажите тираж, чтобы мгновенно увидеть базовую оптовую скидку и ориентировочный бюджет:
            </p>

            <div class="katya-calc-wrapper">
              <!-- Тип изделия -->
              <div class="katya-calc-row">
                <label class="katya-calc-label">1. Выберите тип подарка:</label>
                <div class="katya-calc-options" id="katya-calc-items">
                  <button type="button" class="katya-calc-chip katya-chip-active" data-item="toys" data-base="750">Ёлочные игрушки (от 750 ₽)</button>
                  <button type="button" class="katya-calc-chip" data-item="candles" data-base="1400">Сеты подсвечников (от 1 400 ₽)</button>
                  <button type="button" class="katya-calc-chip" data-item="cups" data-base="1100">Чайные чашки (от 1 100 ₽)</button>
                  <button type="button" class="katya-calc-chip" data-item="vases" data-base="4500">Интерьерные вазы (от 4 500 ₽)</button>
                </div>
              </div>

              <!-- Тираж (Range Slider) -->
              <div class="katya-calc-row">
                <div class="katya-slider-head">
                  <label class="katya-calc-label" for="b2b-qty-slider">2. Тираж партии:</label>
                  <div class="katya-slider-val-wrap">
                    <span class="katya-discount-badge" id="b2b-discount-badge">-15% ОПТ</span>
                    <span class="katya-slider-value" id="b2b-qty-display">100 шт.</span>
                  </div>
                </div>
                <input type="range" id="b2b-qty-slider" class="katya-range-input" min="20" max="500" step="10" value="100"/>
                <div class="katya-slider-ticks">
                  <span id="tick-20">20 шт (0%)</span>
                  <span id="tick-50">50 шт (-10%)</span>
                  <span id="tick-100" class="katya-tick-active">100 шт (-15%)</span>
                  <span id="tick-250">250+ шт (-25%)</span>
                </div>
              </div>

              <!-- Опции брендирования -->
              <div class="katya-calc-row">
                <label class="katya-calc-label">3. Дополнительные опции:</label>
                <div class="katya-calc-checkboxes">
                  <label class="katya-chk-label">
                    <input type="checkbox" id="chk-logo" checked/>
                    <span>Тиснение штампа логотипа компании на глине (+120 ₽/шт)</span>
                  </label>
                  <label class="katya-chk-label">
                    <input type="checkbox" id="chk-box" checked/>
                    <span>Индивидуальный крафт-бокс с наполнителем (+180 ₽/шт)</span>
                  </label>
                </div>
              </div>

              <!-- Табло сметы -->
              <div class="katya-calc-summary">
                <div class="katya-summary-col">
                  <span class="katya-sm-lbl">Цена за 1 изделие:</span>
                  <span class="katya-sm-val" id="b2b-price-per-item">937 ₽</span>
                  <div class="katya-economy-note" id="b2b-economy-note">Экономия: 16 500 ₽</div>
                </div>
                <div class="katya-summary-col">
                  <span class="katya-sm-lbl">Ориентировочный бюджет:</span>
                  <span class="katya-sm-val katya-sm-accent" id="b2b-total-budget">93 750 ₽</span>
                </div>
                <div class="katya-summary-col">
                  <span class="katya-sm-lbl">Срок производства:</span>
                  <span class="katya-sm-val">14–18 рабочих дней</span>
                </div>
              </div>

              <div class="katya-calc-action">
                <a href="https://t.me/katya_ceramics" target="_blank" rel="noopener" class="katya-btn katya-btn-accent">Запросить пилотный образец и КП в Telegram →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. ЭТАПЫ РАБОТЫ С БИЗНЕСОМ -->
      <section class="katya-story-section">
        <div class="katya-container">
          <div class="katya-section-header katya-header-craft">
            <h2 class="katya-title-craft">Как мы работаем с компаниями</h2>
            <p class="katya-subtitle-craft">Прозрачный процесс от первого эскиза до бережной доставки в офис:</p>
          </div>

          <div class="katya-guarantees-grid">
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <span style="font-family: var(--katya-font-serif); font-size: 20px; font-weight: 700;">01</span>
              </div>
              <h4 class="katya-g-title">Концепт и форма</h4>
              <p class="katya-g-desc">Подбираем предмет из коллекции или создаем форму под специфику вашего бренда и бюджет.</p>
            </div>
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <span style="font-family: var(--katya-font-serif); font-size: 20px; font-weight: 700;">02</span>
              </div>
              <h4 class="katya-g-title">Пилотный образец</h4>
              <p class="katya-g-desc">Изготавливаем клише логотипа, лепим и обжигаем 1 экземпляр для живого утверждения в руках.</p>
            </div>
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <span style="font-family: var(--katya-font-serif); font-size: 20px; font-weight: 700;">03</span>
              </div>
              <h4 class="katya-g-title">Ручная формовка</h4>
              <p class="katya-g-desc">Бережная ручная лепка всей партии, естественная сушка и высокотемпературный обжиг 1250°C.</p>
            </div>
            <div class="katya-guarantee-card">
              <div class="katya-g-icon">
                <span style="font-family: var(--katya-font-serif); font-size: 20px; font-weight: 700;">04</span>
              </div>
              <h4 class="katya-g-title">Упаковка и ЭДО</h4>
              <p class="katya-g-desc">Индивидуальные крафт-коробки, маркировка, закрывающие документы (УПД) и доставка курьером.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. ГАРАНТИИ И ДОГОВОР -->
      <section class="katya-guarantees-section">
        <div class="katya-container">
          <div class="katya-guarantees-grid">
            <div class="katya-guarantee-card">
              <h4 class="katya-g-title">Безналичный расчет и ЭДО</h4>
              <p class="katya-g-desc">Работаем по официальному договору, счету и обмениваемся закрывающими актами через Диадок.</p>
            </div>
            <div class="katya-guarantee-card">
              <h4 class="katya-g-title">100% страховка партии</h4>
              <p class="katya-g-desc">Каждое изделие бережно упаковано в эко-бумагу. Бесплатная замена при форс-мажоре при доставке.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. FOOTER -->
      <footer class="katya-footer">
        <div class="katya-container katya-footer-container">
          <div class="katya-footer-brand">
            <div class="katya-footer-logo">КАТЯ ЛАНЧИКОВА</div>
            <p class="katya-footer-desc">Авторская керамика ручной работы. Студия в Москве.</p>
          </div>
          <div class="katya-footer-links">
            <h5 class="katya-footer-title">Навигация</h5>
            <ul>
              <li><a href="/">Главная витрина</a></li>
              <li><a href="/shop">Магазин</a></li>
              <li><a href="/about">О мастере</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div class="katya-footer-bottom">
          <div class="katya-container">
            <span>© 2026 Студия Кати Ланчиковой. Корпоративный отдел B2B.</span>
          </div>
        </div>
      </footer>
    `;

    bindB2BCalculatorEvents();
  }

  /**
   * Генерация HTML карточек товаров (100% галерейный стиль Lucy McCall / Cord Studio)
   */
  function renderProductCardsHtml(items) {
    return items.map(function(item) {
      var shortMaterial = item.material ? item.material.split(',')[0].trim() : 'Керамика';
      var specText = item.height ? (item.height + ' · ' + shortMaterial) : shortMaterial;
      var isRare = item.badge && (item.badge.includes('1 шт') || item.badge.toLowerCase().includes('штучн') || item.badgeType === 'highlight');
      var rareNotice = isRare ? `<span class="katya-product-rare-notice">${item.badge}</span>` : '';

      return `
        <article class="katya-product-card" data-category="${item.category}" data-id="${item.id}" data-open-quickview="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
          <div class="katya-product-media">
            <img src="${item.img1}" alt="${item.title}" class="katya-img-primary" loading="lazy"/>
            <img src="${item.img2}" alt="${item.title} — текстура" class="katya-img-secondary" loading="lazy"/>
            
            <div class="katya-media-action-hint">
              <span>Быстрый просмотр</span>
            </div>
          </div>

          <div class="katya-product-info">
            <h3 class="katya-product-title">${item.title}</h3>
            <div class="katya-product-spec">${specText}</div>
            <div class="katya-product-price-row">
              <span class="katya-product-price">${item.price.toLocaleString('ru-RU')} ₽</span>
              ${rareNotice}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /**
   * Привязка событий каталога
   */
  function bindCatalogEvents() {
    // Текстовые фильтры (Cord Studio & Lucy McCall)
    var tabs = document.querySelectorAll('.katya-filter-link, .katya-filter-tab');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active', 'katya-tab-active'); });
        tab.classList.add('active');

        var cat = tab.getAttribute('data-cat');
        var cards = document.querySelectorAll('.katya-product-card');
        cards.forEach(function(card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Делегирование кликов по карточкам: клик открывает Quick View
    var grid = document.getElementById('katya-products-grid');
    if (grid) {
      grid.addEventListener('click', function(e) {
        var card = e.target.closest('[data-open-quickview]');
        if (card) {
          var id = card.getAttribute('data-open-quickview');
          openQuickViewModal(id);
        }
      });
      grid.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          var card = e.target.closest('[data-open-quickview]');
          if (card) {
            e.preventDefault();
            var id = card.getAttribute('data-open-quickview');
            openQuickViewModal(id);
          }
        }
      });
    }
  }

  /**
   * Интерактивный B2B-калькулятор
   */
  function bindB2BCalculatorEvents() {
    var chips = document.querySelectorAll('#katya-calc-items .katya-calc-chip');
    var slider = document.getElementById('b2b-qty-slider');
    var display = document.getElementById('b2b-qty-display');
    var chkLogo = document.getElementById('chk-logo');
    var chkBox = document.getElementById('chk-box');
    var pricePerItem = document.getElementById('b2b-price-per-item');
    var totalBudget = document.getElementById('b2b-total-budget');

    var currentBase = 750;

    chips.forEach(function(chip) {
      chip.addEventListener('click', function() {
        chips.forEach(function(c) { c.classList.remove('katya-chip-active'); });
        chip.classList.add('katya-chip-active');
        currentBase = parseInt(chip.getAttribute('data-base'), 10);
        calculate();
      });
    });

    if (slider) {
      slider.addEventListener('input', calculate);
    }
    if (chkLogo) chkLogo.addEventListener('change', calculate);
    if (chkBox) chkBox.addEventListener('change', calculate);

    var discountBadge = document.getElementById('b2b-discount-badge');
    var economyNote = document.getElementById('b2b-economy-note');

    function calculate() {
      var qty = parseInt(slider.value, 10);
      display.textContent = qty + ' шт.';

      // Оптовая скидка
      var discount = 0;
      var badgeText = '';
      if (qty >= 250) {
        discount = 0.25;
        badgeText = '-25% ПАРТНЕР';
      } else if (qty >= 100) {
        discount = 0.15;
        badgeText = '-15% ОПТ';
      } else if (qty >= 50) {
        discount = 0.10;
        badgeText = '-10% БАЗА';
      }

      if (discountBadge) {
        if (discount > 0) {
          discountBadge.textContent = badgeText;
          discountBadge.style.display = 'inline-flex';
        } else {
          discountBadge.style.display = 'none';
        }
      }

      // Обновление активного тика
      ['tick-20', 'tick-50', 'tick-100', 'tick-250'].forEach(function(tId) {
        var el = document.getElementById(tId);
        if (el) el.classList.remove('katya-tick-active');
      });
      if (qty >= 250) {
        var el250 = document.getElementById('tick-250');
        if (el250) el250.classList.add('katya-tick-active');
      } else if (qty >= 100) {
        var el100 = document.getElementById('tick-100');
        if (el100) el100.classList.add('katya-tick-active');
      } else if (qty >= 50) {
        var el50 = document.getElementById('tick-50');
        if (el50) el50.classList.add('katya-tick-active');
      } else {
        var el20 = document.getElementById('tick-20');
        if (el20) el20.classList.add('katya-tick-active');
      }

      var discountedBase = currentBase * (1 - discount);
      var extra = 0;
      if (chkLogo && chkLogo.checked) extra += 120;
      if (chkBox && chkBox.checked) extra += 180;

      var finalPerItem = Math.round(discountedBase + extra);
      var total = finalPerItem * qty;

      var withoutDiscountTotal = Math.round((currentBase + extra) * qty);
      var economy = withoutDiscountTotal - total;

      pricePerItem.textContent = finalPerItem.toLocaleString('ru-RU') + ' ₽';
      totalBudget.textContent = total.toLocaleString('ru-RU') + ' ₽';

      if (economyNote) {
        if (economy > 0) {
          economyNote.textContent = 'Экономия: ' + economy.toLocaleString('ru-RU') + ' ₽';
          economyNote.style.display = 'block';
        } else {
          economyNote.style.display = 'none';
        }
      }
    }

    calculate();
  }

  /**
   * Модальное окно быстрого просмотра (Quick View Modal / Bottom Sheet)
   */
  function injectQuickViewModal() {
    if (document.getElementById('katya-quickview-modal')) return;

    var modal = document.createElement('div');
    modal.id = 'katya-quickview-modal';
    modal.className = 'katya-modal-wrapper';
    modal.innerHTML = `
      <div class="katya-modal-overlay" id="katya-qv-overlay"></div>
      <div class="katya-modal-card">
        <div class="katya-sheet-handle"></div>
        <button type="button" class="katya-modal-close" id="katya-qv-close" aria-label="Закрыть окно">✕</button>
        <div class="katya-modal-body" id="katya-qv-body"></div>
      </div>
    `;

    document.body.appendChild(modal);

    function closeModal() {
      modal.classList.remove('katya-modal-active');
      document.body.style.overflow = '';
    }

    document.getElementById('katya-qv-close').addEventListener('click', closeModal);
    document.getElementById('katya-qv-overlay').addEventListener('click', closeModal);
  }

  function openQuickViewModal(productId) {
    var product = PRODUCTS.find(function(p) { return p.id === productId; });
    if (!product) return;

    var body = document.getElementById('katya-qv-body');
    if (!body) return;

    body.innerHTML = `
      <div class="katya-qv-layout">
        <div class="katya-qv-gallery">
          <div class="katya-qv-main-img-wrap">
            <img src="${product.img1}" id="katya-qv-main-img" alt="${product.title}" class="katya-qv-main-img"/>
          </div>
          <div class="katya-qv-thumbs">
            ${product.gallery.map(function(src, i) {
              return `<button type="button" class="katya-qv-thumb-btn ${i === 0 ? 'katya-thumb-active' : ''}" data-src="${src}"><img src="${src}" alt="Ракурс ${i+1}"/></button>`;
            }).join('')}
          </div>
        </div>

        <div class="katya-qv-details">
          <span class="katya-product-category">${product.categoryName} • Артикул: ${product.id}</span>
          <h2 class="katya-qv-title">${product.title}</h2>
          <div class="katya-qv-price-badge">
            <span class="katya-qv-price">${product.price.toLocaleString('ru-RU')} ₽</span>
            <span class="katya-product-badge katya-badge-${product.badgeType}">${product.badge}</span>
          </div>

          <p class="katya-qv-desc">${product.desc}</p>

          <div class="katya-qv-specs">
            <div class="katya-spec-row"><span>Высота:</span><b>${product.height}</b></div>
            <div class="katya-spec-row"><span>Диаметр:</span><b>${product.diameter}</b></div>
            <div class="katya-spec-row"><span>Вес:</span><b>${product.weight}</b></div>
            <div class="katya-spec-row"><span>Материалы:</span><b>${product.material}</b></div>
          </div>

          <div class="katya-qv-actions">
            <div class="katya-qty-picker">
              <button type="button" id="qv-qty-minus">−</button>
              <span id="qv-qty-val">1</span>
              <button type="button" id="qv-qty-plus">+</button>
            </div>
            <button type="button" class="katya-btn katya-btn-primary katya-qv-add-btn" id="qv-submit-add">Добавить в корзину</button>
          </div>

          <div class="katya-qv-telegram-quick">
            <a href="https://t.me/katya_ceramics?text=${encodeURIComponent('Здравствуйте, Катя! Хочу заказать изделие ' + product.title + ' (' + product.id + ')')}" target="_blank" rel="noopener" class="katya-btn-telegram-quick">
              Написать мастеру в Telegram
            </a>
          </div>

          <div class="katya-qv-shipping-info">
            Бережная отправка СДЭК и Почтой по всей РФ. 100% гарантия целостности посылки.
          </div>
        </div>
      </div>
    `;

    // Переключение миниатюр
    var thumbs = body.querySelectorAll('.katya-qv-thumb-btn');
    var mainImg = document.getElementById('katya-qv-main-img');
    thumbs.forEach(function(th) {
      th.addEventListener('click', function() {
        thumbs.forEach(function(t) { t.classList.remove('katya-thumb-active'); });
        th.classList.add('katya-thumb-active');
        mainImg.src = th.getAttribute('data-src');
      });
    });

    // Селектор количества
    var currentQty = 1;
    var qtyVal = document.getElementById('qv-qty-val');
    document.getElementById('qv-qty-minus').addEventListener('click', function() {
      if (currentQty > 1) {
        currentQty--;
        qtyVal.textContent = currentQty;
      }
    });
    document.getElementById('qv-qty-plus').addEventListener('click', function() {
      currentQty++;
      qtyVal.textContent = currentQty;
    });

    document.getElementById('qv-submit-add').addEventListener('click', function() {
      addToCart(product.id, currentQty);
      var modal = document.getElementById('katya-quickview-modal');
      if (modal) modal.classList.remove('katya-modal-active');
      document.body.style.overflow = '';
      openCartDrawer();
    });

    var modal = document.getElementById('katya-quickview-modal');
    modal.classList.add('katya-modal-active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Корзина и чекаут в 2 шага (Checkout Drawer)
   */
  function injectCartDrawer() {
    if (document.getElementById('katya-cart-drawer')) return;

    var drawer = document.createElement('div');
    drawer.id = 'katya-cart-drawer';
    drawer.className = 'katya-drawer-wrapper';
    drawer.innerHTML = `
      <div class="katya-drawer-overlay" id="katya-cart-overlay"></div>
      <aside class="katya-drawer-panel">
        <div class="katya-drawer-header">
          <h3 class="katya-drawer-title">КОРЗИНА</h3>
          <button type="button" class="katya-drawer-close" id="katya-cart-close" aria-label="Закрыть корзину">✕</button>
        </div>
        <div class="katya-drawer-body" id="katya-cart-body"></div>
      </aside>
    `;

    document.body.appendChild(drawer);

    function closeCart() {
      drawer.classList.remove('katya-drawer-active');
      document.body.style.overflow = '';
    }

    document.getElementById('katya-cart-close').addEventListener('click', closeCart);
    document.getElementById('katya-cart-overlay').addEventListener('click', closeCart);
  }

  function openCartDrawer() {
    renderCartDrawerContent();
    var drawer = document.getElementById('katya-cart-drawer');
    if (drawer) {
      drawer.classList.add('katya-drawer-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function renderCartDrawerContent() {
    var body = document.getElementById('katya-cart-body');
    if (!body) return;

    if (cart.length === 0) {
      body.innerHTML = `
        <div class="katya-cart-empty">
          <div class="katya-empty-rule"></div>
          <h4 class="katya-empty-title">Корзина пуста</h4>
          <p class="katya-empty-desc">В вашей корзине пока нет предметов. Выберите изделие ручной работы из актуального каталога.</p>
          <a href="/shop" class="katya-btn katya-btn-primary" id="katya-empty-to-shop">Перейти в каталог</a>
        </div>
      `;
      var toShopBtn = document.getElementById('katya-empty-to-shop');
      if (toShopBtn) {
        toShopBtn.addEventListener('click', function(e) {
          var drawer = document.getElementById('katya-cart-drawer');
          if (drawer) drawer.classList.remove('katya-drawer-active');
          document.body.style.overflow = '';
        });
      }
      return;
    }

    var itemsTotal = cart.reduce(function(acc, item) { return acc + item.price * item.qty; }, 0);
    var deliveryCost = 350;

    body.innerHTML = `
      <div class="katya-cart-content">
        <div class="katya-cart-scroll-area">
          <!-- Список товаров -->
          <div class="katya-cart-items-list">
            ${cart.map(function(item) {
              return `
                <div class="katya-cart-item-row" data-id="${item.id}">
                  <img src="${item.img}" alt="${item.title}" class="katya-cart-thumb"/>
                  <div class="katya-cart-item-info">
                    <h4 class="katya-cart-item-title">${item.title}</h4>
                    <span class="katya-cart-item-price">${item.price.toLocaleString('ru-RU')} ₽</span>
                    <div class="katya-cart-item-qty-ctrl">
                      <button type="button" class="katya-qty-btn-minus" data-id="${item.id}" aria-label="Уменьшить">−</button>
                      <span class="katya-qty-number">${item.qty}</span>
                      <button type="button" class="katya-qty-btn-plus" data-id="${item.id}" aria-label="Увеличить">+</button>
                    </div>
                  </div>
                  <button type="button" class="katya-cart-item-remove" data-remove="${item.id}" aria-label="Удалить позицию">✕</button>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Шаг 1: Выбор способа доставки (Minimalist Tiles) -->
          <div class="katya-cart-step-box">
            <span class="katya-step-label">Шаг 1 из 2</span>
            <h4 class="katya-step-title">Способ получения</h4>
            <div class="katya-delivery-options">
              <label class="katya-delivery-card active">
                <div class="katya-delivery-card-left">
                  <input type="radio" name="cart-delivery" value="350" checked/>
                  <div class="katya-delivery-text-wrap">
                    <span class="katya-delivery-name">СДЭК до пункта выдачи (ПВЗ)</span>
                    <span class="katya-delivery-meta">2–4 рабочих дня по России</span>
                  </div>
                </div>
                <span class="katya-delivery-price">350 ₽</span>
              </label>

              <label class="katya-delivery-card">
                <div class="katya-delivery-card-left">
                  <input type="radio" name="cart-delivery" value="550"/>
                  <div class="katya-delivery-text-wrap">
                    <span class="katya-delivery-name">Курьерская доставка СДЭК</span>
                    <span class="katya-delivery-meta">До двери лично в руки</span>
                  </div>
                </div>
                <span class="katya-delivery-price">550 ₽</span>
              </label>

              <label class="katya-delivery-card">
                <div class="katya-delivery-card-left">
                  <input type="radio" name="cart-delivery" value="420"/>
                  <div class="katya-delivery-text-wrap">
                    <span class="katya-delivery-name">Почта России (1 класс)</span>
                    <span class="katya-delivery-meta">Авиа-отправка в отдаленные регионы</span>
                  </div>
                </div>
                <span class="katya-delivery-price">420 ₽</span>
              </label>

              <label class="katya-delivery-card">
                <div class="katya-delivery-card-left">
                  <input type="radio" name="cart-delivery" value="0"/>
                  <div class="katya-delivery-text-wrap">
                    <span class="katya-delivery-name">Самовывоз из мастерской</span>
                    <span class="katya-delivery-meta">Москва, по предварительной договоренности</span>
                  </div>
                </div>
                <span class="katya-delivery-price">Бесплатно</span>
              </label>
            </div>
          </div>

          <!-- Шаг 2: Данные получателя (Refined Editorial Inputs) -->
          <div class="katya-cart-step-box">
            <span class="katya-step-label">Шаг 2 из 2</span>
            <h4 class="katya-step-title">Контактные данные</h4>
            <div class="katya-checkout-fields">
              <div class="katya-field-group">
                <label for="order-name" class="katya-field-label">Ваше имя *</label>
                <input type="text" id="order-name" class="katya-input" placeholder="Иван Петров" autocomplete="name" autocorrect="off" required/>
              </div>
              <div class="katya-field-group">
                <label for="order-phone" class="katya-field-label">Телефон или Telegram *</label>
                <input type="tel" id="order-phone" class="katya-input" placeholder="+7 999 000-00-00 или @username" autocomplete="tel" inputmode="tel" required/>
              </div>
              <div class="katya-field-group">
                <label for="order-address" class="katya-field-label">Город и адрес ПВЗ СДЭК *</label>
                <input type="text" id="order-address" class="katya-input" placeholder="г. Москва, ул. Ленина, д. 5, ПВЗ MSK12" autocomplete="street-address" required/>
              </div>
              <div class="katya-field-group">
                <label for="order-notes" class="katya-field-label">Пожелания к заказу</label>
                <textarea id="order-notes" class="katya-input katya-textarea" rows="2" placeholder="Подарочная упаковка, открытка или особые пожелания"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Footer (Прижатый низ с итогом и кнопкой) -->
        <div class="katya-drawer-footer">
          <div class="katya-total-row">
            <span>Изделия (${cart.reduce(function(a,b){return a+b.qty;},0)} шт):</span>
            <span id="cart-subtotal">${itemsTotal.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div class="katya-total-row">
            <span>Доставка:</span>
            <span id="cart-delivery-display">350 ₽</span>
          </div>
          <div class="katya-total-row katya-total-final">
            <span>ИТОГО К ОПЛАТЕ:</span>
            <span id="cart-final-total">${(itemsTotal + deliveryCost).toLocaleString('ru-RU')} ₽</span>
          </div>

          <button type="button" class="katya-btn katya-btn-primary katya-submit-order-btn" id="katya-submit-order">
            Оформить заказ
          </button>

          <p class="katya-order-microcopy">
            Оплата после подтверждения. Мастер свяжется с вами в Telegram или WhatsApp для подтверждения деталей.
          </p>
        </div>
      </div>
    `;

    // Обработчики изменения доставки
    var deliveryRadios = body.querySelectorAll('input[name="cart-delivery"]');
    deliveryRadios.forEach(function(radio) {
      radio.addEventListener('change', function() {
        deliveryCost = parseInt(radio.value, 10);
        document.getElementById('cart-delivery-display').textContent = deliveryCost > 0 ? deliveryCost + ' ₽' : 'Бесплатно';
        document.getElementById('cart-final-total').textContent = (itemsTotal + deliveryCost).toLocaleString('ru-RU') + ' ₽';
        
        // Подсветка активной карточки доставки
        body.querySelectorAll('.katya-delivery-card').forEach(function(card) {
          card.classList.remove('active');
        });
        var parentCard = radio.closest('.katya-delivery-card');
        if (parentCard) parentCard.classList.add('active');
      });
    });

    // Плюс/минус/удаление
    body.addEventListener('click', function(e) {
      var btnMinus = e.target.closest('.katya-qty-btn-minus');
      if (btnMinus) {
        var id = btnMinus.getAttribute('data-id');
        var item = cart.find(function(x) { return x.id === id; });
        if (item) {
          if (item.qty > 1) item.qty--;
          else cart = cart.filter(function(x) { return x.id !== id; });
          saveCart();
          renderCartDrawerContent();
        }
        return;
      }

      var btnPlus = e.target.closest('.katya-qty-btn-plus');
      if (btnPlus) {
        var idPlus = btnPlus.getAttribute('data-id');
        var itemPlus = cart.find(function(x) { return x.id === idPlus; });
        if (itemPlus) {
          itemPlus.qty++;
          saveCart();
          renderCartDrawerContent();
        }
        return;
      }

      var btnRemove = e.target.closest('.katya-cart-item-remove');
      if (btnRemove) {
        var idRem = btnRemove.getAttribute('data-remove');
        cart = cart.filter(function(x) { return x.id !== idRem; });
        saveCart();
        renderCartDrawerContent();
        return;
      }

      var submitOrder = e.target.closest('#katya-submit-order');
      if (submitOrder) {
        submitUserOrder(itemsTotal, deliveryCost);
      }
    });
  }

  function submitUserOrder(itemsTotal, deliveryCost) {
    var name = (document.getElementById('order-name') || {}).value || '';
    var phone = (document.getElementById('order-phone') || {}).value || '';
    var address = (document.getElementById('order-address') || {}).value || '';
    var notes = (document.getElementById('order-notes') || {}).value || '';

    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert('Пожалуйста, заполните обязательные поля (Имя, Телефон/Telegram и Адрес доставки).');
      return;
    }

    var orderData = {
      inquiry_id: 'ORD-' + Date.now(),
      created_at: new Date().toISOString(),
      type: 'retail_order',
      customer: { name: name, phone: phone },
      items: cart,
      delivery: { address: address, cost: deliveryCost },
      total_amount: itemsTotal + deliveryCost,
      notes: notes
    };

    console.log('[Конвейер Кати] Новый заказ сформирован:', orderData);

    // Очистка корзины и подтверждение
    cart = [];
    saveCart();

    var body = document.getElementById('katya-cart-body');
    if (body) {
      body.innerHTML = `
        <div class="katya-cart-success">
          <div class="katya-empty-rule"></div>
          <h3 class="katya-success-title">Спасибо за заказ, ${name}</h3>
          <p class="katya-success-desc">
            Ваша заявка № <b>${orderData.inquiry_id}</b> принята.<br/>
            Катя проверит наличие изделий и свяжется с вами по указанному контакту <b>${phone}</b> в течение 15 минут для согласования доставки.
          </p>
          <a href="/" class="katya-btn katya-btn-primary" id="katya-back-home">Вернуться в витрину</a>
        </div>
      `;
      var backBtn = document.getElementById('katya-back-home');
      if (backBtn) {
        backBtn.addEventListener('click', function() {
          var drawer = document.getElementById('katya-cart-drawer');
          if (drawer) drawer.classList.remove('katya-drawer-active');
          document.body.style.overflow = '';
        });
      }
    }
  }

})();
