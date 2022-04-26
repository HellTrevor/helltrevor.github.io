function App() {
  return (
    <div className="wrapper">
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <div className="header_wrapper row">
            <div className="logo">Spartak</div>
            <div className="language_box">Рус</div>
            <div className="nav">
              <ul>
                <li>
                  <a href="#">Вход</a>
                </li>
                <li>
                  <a href="#">Поддержка</a>
                </li>
                <li>
                  <a href="#">Статьи</a>
                </li>
              </ul>
            </div>
            <div className="theme"></div>
            <div className="search row">
              <div className="search_icon"></div>
              <p className="search_text">Поиск</p>
            </div>
          </div>
          <div className="header_line"></div>
        </div>
      </header>
      {/* /HEADER */}

      {/* INTRO */}
      <section className="intro">
        <div className="container">
          <h1 className="intro_text">Начни с зарядки</h1>
          <h1 className="intro_text">Заверши тренировкой</h1>
        </div>
      </section>
      {/* /INTRO */}

      {/* BENEFITS */}
      <section className="benefits">
        <div className="container row space-between">
          <div className="benefit_text">
            <h3 className="benefit_title">Статистика</h3>
            <p>
              Следите за своими успехами, воплощайте желания в действительность.
              Контроллируйте результат и совершенствуйтесь
            </p>
          </div>
          <div className="benefit_img img_1"></div>
        </div>

        <div className="container row space-between">
          <div className="benefit_text">
            <h3 className="benefit_title">Достижения</h3>
            <p>
              Получайте отличительный знаки за свои старания и труд. Покажите
              всем, чего Вы достигли
            </p>
          </div>
          <div className="benefit_img img_2"></div>
        </div>

        <div className="container row space-between">
          <div className="benefit_text">
            <h3 className="benefit_title">Разнообразие</h3>
            <p>
              Сформируйте личный режим тренировок. Занимайтесь, становитесь
              сильнее и выносливее
            </p>
          </div>
          <div className="benefit_img img_3"></div>
        </div>
      </section>
      {/* /BENEFITS */}

      {/* ARTICLES */}
      <section className="articles">
        <div className="container">
          <h3 className="articles_title">Статьи</h3>
          <p className="articles_desc">
            Пользуйтесь полезными рекомендациями, смотрите развивающие вашу
            спортивную жизнь видео-уроки и читайте статьи об улучшении своих
            возможностей от лучших бодибилдеров и спортсменов. Занимайтесь
            спортом, будьте крепкими и здоровыми!
          </p>

          <div className="slider">
            <div className="arrow"></div>

            <div className="article">
              <a className="article_img img_1" href="#"></a>
              <h4 className="article_title">
                <a href="#">Виды наборных гантелей. Упражнения с гантелями</a>
              </h4>
              <div className="article_desc">
                <p>
                  Физические нагрузки на все группы мышц можно получить не
                  только в тренажерном зале, но и в домашних условиях. Для этого
                  нет необходимости в большом количестве тренажеров, будет
                  достаточно все лишь разборных гантелей, у которых вы
                  самостоятельно сможете регулировать...
                </p>
                <div className="see_more">
                  <a href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="article">
              <a className="article_img img_2" href="#"></a>
              <h4 className="article_title">
                <a href="#">Как правильно отжиматься от пола?</a>
              </h4>
              <div className="article_desc">
                <p>
                  Если вы хотите научиться отжиматься максимально правильно, вы
                  должны включить в программу своих тренировок упражнение
                  планка. Планка на вытянутых руках развивает статические мышцы
                  корпуса...
                </p>
                <div className="see_more">
                  <a href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="article">
              <a className="article_img img_3" href="#"></a>
              <h4 className="article_title">
                <a href="#">Современные тренажеры и виброплатформы для дома</a>
              </h4>
              <div className="article_desc">
                <p>
                  Тренажеры просты в обращении и избавляют от большого
                  количества проблем: слабый иммунитет, лишний вес, вялые мышцы,
                  болезни позвоночника - вы же не хотите с этим столкнуться в
                  реальной жизни?
                </p>
                <div className="see_more">
                  <a href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="arrow"></div>
          </div>
        </div>
      </section>
      {/* /ARTICLES */}

      {/* FOOTER */}
      <footer class="footer">
        <div class="container row space-between">
          <div className="footer_nav_wrapper">
            <div className="footer_nav">
              <h4 class="footer_title">Контакты</h4>
              <ul>
                <li className="footer_text">
                  <a href="tel:+38(0**) ***-**-**">+38(0**) ***-**-**</a>
                </li>
                <li className="footer_text">
                  <a href="mailto:igor.artemov.retry@gmail.com">
                    igor.artemov.retry@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer_nav">
              <h4 class="footer_title">Поддержка</h4>
              <ul>
                <li className="footer_text">
                  <a href="#">Связаться с нами</a>
                </li>
              </ul>
            </div>

            <div className="footer_nav">
              <h4 class="footer_title">Контакты</h4>
              <ul className="row">
                <li className="footer_social_icon social_img_1">
                  <a href="#"></a>
                </li>
                <li className="footer_social_icon social_img_2">
                  <a href="#"></a>
                </li>
                <li className="footer_social_icon social_img_3">
                  <a href="#"></a>
                </li>
                <li className="footer_social_icon social_img_4">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_privacy_policy">
            <div className="privacy_policy">
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer_logo">
              <a className="logo" href="#">
                Spartak
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* /FOOTER */}
    </div>
  );
}
export default App;
