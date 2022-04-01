function App() {
  return (
    <div className="wrapper">
      {/* HEADER */}
      <div className="header">
        <div className="container">
          <div className="header_block">
            <div className="header_logo">Spartak</div>
            <div className="language_box">Рус</div>
            <div className="header_menu">
              <a href="#" className="link margin-right">
                Вход
              </a>
              <a href="#" className="link margin-right">
                Поддержка
              </a>
              <a href="#" className="link">
                Статьи
              </a>
            </div>
            <div className="theme"></div>
            <div className="search">
              <div className="search_icon"></div>
              <div className="search_background"></div>
              Поиск
            </div>
          </div>
          <div className="header_line"></div>
        </div>
      </div>
      {/* /HEADER */}
      {/* INTRO */}
      <div className="intro">
        <div className="container">
          <div className="intro_text">Начни с зарядки</div>
          <div className="intro_text_end">Заверши тренировкой</div>
        </div>
      </div>
      {/* /INTRO */}
      {/* BENEFITS */}
      <div className="benefits">
        <div className="container">
          <div className="benefit">
            <div className="text_benefit">
              <div className="title_benefit">Статистика</div>
              <div className="description_benefit">
                Следите за своими успехами, воплощайте желания в
                действительность. Контроллируйте результат и совершенствуйтесь
              </div>
            </div>
            <div className="image_benefit"></div>
          </div>
        </div>
      </div>
      {/* /BENEFITS */}
    </div>
  );
}
export default App;
