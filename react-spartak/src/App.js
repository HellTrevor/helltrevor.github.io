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
              <div className="title_benefit even_title_benefit">Статистика</div>
              <div className="description_benefit even_description_benefit">
                Следите за своими успехами, воплощайте желания в
                действительность. Контроллируйте результат и совершенствуйтесь
              </div>
            </div>
            <div className="image_benefit img_1_benefits"></div>
          </div>
        </div>
      </div>
      <div className="benefits grey">
        <div className="container">
          <div className="benefit">
            <div className="image_benefit img_2_benefits"></div>
            <div className="text_benefit">
              <div className="title_benefit odd_title_benefit">Достижения</div>
              <div className="description_benefit odd_description_benefit">
                Получайте отличительный знаки за свои старания и труд. Покажите
                всем, чего Вы достигли
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="benefit">
            <div className="text_benefit">
              <div className="title_benefit even_title_benefit">
                Разнообразие
              </div>
              <div className="description_benefit even_description_benefit">
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
            <div className="arrow arrow_left"></div>
            <div className="article">
              <div className="image_article image_article_1"></div>
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
                <div className="see_more">Подробнее</div>
              </div>
            </div>
            <div className="article">
              <div className="image_article image_article_2"></div>
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
                <div className="see_more">Подробнее</div>
              </div>
            </div>
            <div className="article">
              <div className="image_article image_article_3"></div>
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
                <div className="see_more">Подробнее</div>
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
                <a class="info_footer">+38(0**) ***-**-**</a>
              </div>
              <div className="info_footer_block">
                <a class="info_footer">igor.artemov.retry@gmail.com</a>
              </div>
            </div>
            <div className="footer_block">
              <div class="title_footer">Поддержка</div>
              <div className="info_footer_block">
                <a class="info_footer">Связаться с нами</a>
              </div>
            </div>
            <div className="footer_block">
              <div class="title_footer">Соц. сети</div>
              <div class="socials_footer">
                <div className="social_icon_footer social_img_1"></div>
                <div className="social_icon_footer social_img_2"></div>
                <div className="social_icon_footer social_img_3"></div>
                <div className="social_icon_footer social_img_4"></div>
              </div>
            </div>
          </div>
          <div className="footer_block_end">
            <div className="privacy_policy">Политика конфиденциальности</div>
            <div className="footer_logo">Spartak</div>
          </div>
        </div>
      </div>
      {/* /FOOTER */}
    </div>
  );
}
export default App;
