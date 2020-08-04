import React from 'react';
import './styles.css';
import whatAppIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeachItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Felipe Panegalli</strong>
          <span>Informática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        voluptatum deleniti cumque asperiores mollitia quas quia dolores.
        <br />
        <br />
        Voluptatum sed omnis assumenda fugiat doloremque magni aut iusto, nulla,
        quam harum molestiae.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
