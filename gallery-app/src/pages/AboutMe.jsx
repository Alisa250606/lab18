import React from "react";
import "./AboutMe.css";
import alisaPhoto from "../images/alisa.jpg"; // імпорт фото з папки images

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>Привіт! 👋</h1>
      <img
        src={alisaPhoto}
        alt="Аліса Даєва"
        className="profile-photo"
      />
      <p>
        Мене звати <strong>Аліса Даєва</strong>, мені 18 років. Я студентка 2
        курсу НУБіП України, факультету інформаційних технологій, спеціальність
        «Комп’ютерні науки».
      </p>
      <p>
        Пройшла курси та отримала сертифікат Microsoft 365, що підтверджує мої
        навички роботи з офісними програмами та хмарними сервісами.
      </p>

      <h2>Мої проєкти</h2>

      <h3>HTML + CSS</h3>
      <ul>
        <li>
          <a
            href="https://github.com/Alisa250606/LAba1"
            target="_blank"
            rel="noreferrer"
          >
            LAba1
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Alisa250606/Laba2"
            target="_blank"
            rel="noreferrer"
          >
            Laba2
          </a>
        </li>
      </ul>

      <h3>JavaScript</h3>
      <ul>
        <li>
          <a
            href="https://github.com/Alisa250606/js-array"
            target="_blank"
            rel="noreferrer"
          >
            js-array
          </a>
        </li>
      </ul>

      <h3>React</h3>
      <ul>
        <li>
          <a
            href="https://github.com/Alisa250606/-react-second-lab"
            target="_blank"
            rel="noreferrer"
          >
            React Second Lab
          </a>
        </li>
      </ul>

      <h2>Контакти</h2>
      <p>📧 Email: kn23-a.daieva@nubip.edu.ua</p>
      <p>
        🔗 GitHub:{" "}
        <a
          href="https://github.com/Alisa250606"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Alisa250606
        </a>
      </p>
    </div>
  );
};

export default AboutMe;
