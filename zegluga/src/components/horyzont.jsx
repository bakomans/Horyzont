import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const StyledHoryzont = styled.div`
  text-align: left;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;
 

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    color: #006699;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }

  li {
    margin-bottom: 10px;
    font-size: 18px;
  }

  li strong {
    color: #006699;
  }

  a {
    color: #006699;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #004466;
  }
`;

function Horyzont() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <StyledHoryzont>
      <h2 data-aos="fade-up">Jesteśmy Stowarzyszeniem Żeglarzy z Rudy Śląskiej</h2>
      <p data-aos="fade-up">Zapraszamy na pokład naszego wspaniałego światka żeglarstwa, gdzie pasja i przygoda spotykają się każdego dnia! Nasza załoga serdecznie witają wszystkich, dla których świat żagli to więcej niż hobby - to styl życia.</p>
      <p data-aos="fade-up">Przeżywaj niesamowite chwile podczas organizowanych przez nas obozów żeglarskich, gdzie przyjaźń i nauka splatają się w jedno. Wybierz się z nami na magiczne rejsy mazurskie, podczas których odkryjesz piękno polskich jezior i zapierające dech w piersiach krajobrazy.</p>
      <p data-aos="fade-up">Marzysz o własnej przygodzie na wodach? Czarteruj z nami jacht i poczuj wolność w pełni! Nasze doświadczone załogi zapewnią Ci bezpieczną i niezapomnianą podróż.</p>
      
      <p data-aos="fade-up">Nasz zarząd to zespół pasjonatów, gotowych służyć radą i pomocą. Poznaj naszych kapitanów:</p>
      <ul data-aos="fade-up">
        <li><strong>Komandor</strong> : Andrzej Wiśniewski, tel. <a href="tel:601409657">601 409 657</a></li>
        <li><strong>Vice komandor</strong> : Krzysztof Poremba, tel. <a href="tel:607074125">607 074 125</a></li>
        <li><strong>Sekretarz</strong> : Andrzej Jasinowski, tel. <a href="tel:508259016">508 259 016</a></li>
        <li><strong>Skarbnik</strong> : Dariusz Kwiatkowski, tel. <a href="tel:505568856">505 568 856</a></li>
        <li><strong>Członek</strong> : Dariusz Ciach, tel. <a href="tel:602197974">602 197 974</a></li>
      </ul>
      <p data-aos="fade-up">Dołącz do naszej załogi już dziś i odkryj fascynujący świat żeglarstwa!</p>
      <p data-aos="fade-up">Nasze dane:</p>
      <p data-aos="fade-up">Stowarzyszenie Żeglarzy HORYZONT</p>
      <p data-aos="fade-up">ul. Owocowa 24, 41-703 Ruda Śląska</p>
      <p data-aos="fade-up">KRS 230929, NIP 6411469049, REGON 270662111</p>
      <p data-aos="fade-up">Tel. <a href="tel:508259016">508 259 016</a></p>
      <p data-aos="fade-up">E-mail: <a href="mailto:horyzont@wb.pl">horyzont@wb.pl</a></p>
      <p data-aos="fade-up">Nasz numer konta: ING 19 1050 1331 1000 0022 9192 1316</p>
    </StyledHoryzont>
  );
}

export default Horyzont;
