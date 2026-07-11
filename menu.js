(function () {
  document.body.insertAdjacentHTML("afterbegin", `
    <style>
      .global-top-menu {
        background: #3f3f3f;
        color: white;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 28px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        position: sticky;
        top: 0;
        z-index: 999999;
      }

      .global-top-menu a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        margin-right: 24px;
        white-space: nowrap;
      }

      .global-top-menu a:hover {
        opacity: 0.75;
      }

      .global-top-menu-title {
        font-size: 18px;
        font-weight: 700;
        margin-right: 30px;
        white-space: nowrap;
      }

      .global-top-menu-links {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      @media (max-width: 700px) {
        .global-top-menu {
          overflow-x: auto;
          justify-content: flex-start;
          padding: 12px;
        }

        .global-top-menu-title {
          margin-right: 18px;
        }

        .global-top-menu a {
          margin-right: 16px;
          font-size: 13px;
        }
      }
    </style>

    <nav class="global-top-menu">
      <div class="global-top-menu-title">Онлайн профессии</div>

      <div class="global-top-menu-links">
        <a href="index.html">Главная</a>
        <a href="site.html">Свой сайт за 30 минут</a>
        <a href="crypto.html">Криптовалюта</a>
        <a href="eco.html">Экономия</a>
      </div>
    </nav>
  `);
})();
