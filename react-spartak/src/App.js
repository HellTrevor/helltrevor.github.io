function App() {
  return (
    <div className="wrapper">
      {/* HEADER */}
      <div className="header">
        <div className="container">
          <div className="row space-between">
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
              <div className="search_text">Поиск</div>
              <div className="search_background"></div>
            </div>
          </div>
          <div className="header_line"></div>
        </div>
      </div>
      {/* /HEADER */}

      {/* INTRO */}
      <div className="section_intro">
        <div className="container">
          <div className="intro_text">Начни с зарядки</div>
          <div className="intro_text">Заверши тренировкой</div>
        </div>
      </div>
      {/* /INTRO */}

      {/* BENEFITS */}
      <div className="section_benefits">
        <div className="container">
          <div className="benefit row space-between">
            <div className="benefit_text">
              <div className="benefit_title even_title_benefit">Статистика</div>
              <div className="benefit_description even_description_benefit">
                Следите за своими успехами, воплощайте желания в
                действительность. Контроллируйте результат и совершенствуйтесь
              </div>
            </div>
            <div className="image_benefit img_1_benefits"></div>
          </div>

          <div className="benefit row space-between">
            <div className="image_benefit img_2_benefits"></div>
            <div className="benefit_text">
              <div className="benefit_title odd_title_benefit">Достижения</div>
              <div className="benefit_description odd_description_benefit">
                Получайте отличительный знаки за свои старания и труд. Покажите
                всем, чего Вы достигли
              </div>
            </div>
          </div>

          <div className="benefit row space-between">
            <div className="benefit_text">
              <div className="benefit_title even_title_benefit">
                Разнообразие
              </div>
              <div className="benefit_description even_description_benefit">
                Сформируйте личный режим тренировок. Занимайтесь, становитесь
                сильнее и выносливее
              </div>
            </div>
            <div className="image_benefit img_3_benefits"></div>
          </div>
        </div>
      </div>
      {/* /BENEFITS */}

      {/* ARTICLES */}
      <div className="articles">
        <div className="container">
          <div className="text_article_section">
            <div className="title_article_section">Статьи</div>
            <div className="description_article_section">
              Пользуйтесь полезными рекомендациями, смотрите развивающие вашу
              спортивную жизнь видео-уроки и читайте статьи об улучшении своих
              возможностей от лучших бодибилдеров и спортсменов. Занимайтесь
              спортом, будьте крепкими и здоровыми!
            </div>
          </div>
          <div className="articles_block">
            <div className="arrow"></div>
            <div className="article">
              <a className="image_article" href="#">
                <div className="image_article_1"></div>
              </a>
              <div className="title_article_block">
                <a className="title_article" href="#">
                  Виды наборных гантелей. Упражнения с гантелями
                </a>
              </div>
              <div className="description_block description_block_1">
                <div className="description_article">
                  Физические нагрузки на все группы мышц можно получить не
                  только в тренажерном зале, но и в домашних условиях. Для этого
                  нет необходимости в большом количестве тренажеров, будет
                  достаточно все лишь разборных гантелей, у которых вы
                  самостоятельно сможете регулировать...
                </div>
                <div className="block_see_more">
                  <a className="see_more" href="#">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className="article">
              <a className="image_article" href="#">
                <div className="image_article_2"></div>
              </a>
              <div className="title_article_block">
                <a className="title_article" href="#">
                  Как правильно отжиматься от пола?
                </a>
              </div>
              <div className="description_block description_block_2">
                <div className="description_article">
                  Если вы хотите научиться отжиматься максимально правильно, вы
                  должны включить в программу своих тренировок упражнение
                  планка. Планка на вытянутых руках развивает статические мышцы
                  корпуса...
                </div>
                <div className="block_see_more">
                  <a className="see_more" href="#">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className="article">
              <a className="image_article" href="#">
                <div className="image_article_3"></div>
              </a>
              <div className="title_article_block">
                <a className="title_article" href="#">
                  Современные тренажеры и виброплатформы для дома
                </a>
              </div>
              <div className="description_block description_block_3">
                <div className="description_article">
                  Тренажеры просты в обращении и избавляют от большого
                  количества проблем: слабый иммунитет, лишний вес, вялые мышцы,
                  болезни позвоночника - вы же не хотите с этим столкнуться в
                  реальной жизни?
                </div>
                <div className="block_see_more">
                  <a className="see_more" href="#">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className="arrow arrow_2"></div>
          </div>
        </div>
      </div>
      {/* /ARTICLES */}

      {/* FOOTER */}
      <div class="footer">
        <div class="container">
          <div className="footer_nav">
            <div className="footer_block">
              <div class="title_footer">Контакты</div>
              <div className="info_footer_block">
                <a class="info_footer" href="tel:+38(0**) ***-**-**">
                  +38(0**) ***-**-**
                </a>
              </div>
              <div className="info_footer_block">
                <a
                  class="info_footer"
                  href="mailto:igor.artemov.retry@gmail.com"
                >
                  igor.artemov.retry@gmail.com
                </a>
              </div>
            </div>
            <div className="footer_block">
              <div class="title_footer">Поддержка</div>
              <div className="info_footer_block">
                <a class="info_footer" href="#">
                  Связаться с нами
                </a>
              </div>
            </div>
            <div className="footer_block">
              <div class="title_footer">Соц. сети</div>
              <div class="socials_footer">
                <a className="social_icon_footer social_img_1" href="#"></a>
                <a className="social_icon_footer social_img_2" href="#"></a>
                <a className="social_icon_footer social_img_3" href="#"></a>
                <a className="social_icon_footer social_img_4" href="#"></a>
              </div>
            </div>
          </div>
          <div className="footer_block_end">
            <div className="privacy_policy">
              <a className="footer_link" href="#">
                Политика конфиденциальности
              </a>
            </div>
            <div className="footer_logo">
              <a className="footer_link link_logo" href="#">
                Spartak
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /FOOTER */}
    </div>
  );
}
export default App;
