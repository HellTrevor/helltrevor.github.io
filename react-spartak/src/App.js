function App() {
  return (
    <div class="wrapper">
      {/* HEADER */}
      <div class="header">
        <div class="container">
          <div class="header_logo">Spartak</div>
          <div class="language_box">Рус</div>
          <div class="header_menu">
            <a href="#" class="link margin-right">
              Вход
            </a>
            <a href="#" class="link margin-right">
              Поддержка
            </a>
            <a href="#" class="link">
              Статьи
            </a>
          </div>
          <div class="theme"></div>
          <div class="search">
            <div class="search_icon"></div>
            <div class="search_background"></div>
            Поиск
          </div>
        </div>
        <div class="header_line"></div>
      </div>
      {/* /HEADER */}
      {/* INTRO */}
      <div class="intro">
        <div class="container">
          <div class="intro_text">Начни с зарядки</div>
          <div class="intro_text_end">Заверши тренировкой</div>
        </div>
      </div>
      {/* /INTRO */}
      {/* BENEFITS */}
      <div class="benefits">
        <div class="container">
          <div class="benefit">
            <div class="text_benefit">
              <div class="title_benefit">Статистика</div>
              <div class="description_benefit">
                Следите за своими успехами, воплощайте желания в
                действительность. Контроллируйте результат и совершенствуйтесь
              </div>
            </div>
            <div class="image_benefit"></div>
          </div>
        </div>
      </div>
      {/* /BENEFITS */}
    </div>
  );
}
export default App;
