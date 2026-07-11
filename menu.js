(function () {
  const menu = document.createElement("div");

  menu.innerHTML = `
    <style>
      .global-top-menu {
        position: sticky;
        top: 0;
        z-index: 999999;
        background: #3f3f3f;
        color: #fff;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 28px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        box-shadow: 0 1px 3px rgba(0,0,0,.18);
      }

      .global-top-menu__brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: 700;
        white-space: nowrap;
      }

      .global-top-menu__logo {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #2783DE;
        font-size: 17px;
      }

      .global-top-menu__links {
        display: flex;
        align-items: center;
        gap: 28px;
        margin-left: 24px;
      }

      .global-top-menu__links a {
        color: #fff !important;
        text-decoration: none !important;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
      }

      .global-top-menu__links a:hover {
        opacity: .75;
      }

      @media (max-width: 720px) {
        .global-top-menu {
          height: auto;
          min-height: 48px;
          padding: 10px 14px;
          align-items: flex-start;
          gap: 12px;
          flex-direction: column;
        }

        .global-top-menu__links {
          width: 100%;
          margin-left: 0;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 2px;
        }

        .global-top-menu__links a {
          font-size: 13px;
        }
      }
    </style>

    <nav class="global-top-menu">
      <a class="global-top-menu__brand" href="index.html">
        <span class="global-top-menu__logo">💼</span>
        <span>Онлайн профессии</span>
      </a>

      <div class="global-top-menu__links">
        <a href="index.html">Главная</a>
        <a href="site.html">Свой сайт за 30 минут</a>
        <a href="crypto.html">Криптовалюта</a>
        <a href="eco.html">Экономия</a>
      </div>
    </nav>
  `;

  document.body.prepend(menu);
})();
