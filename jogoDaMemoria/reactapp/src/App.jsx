import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem-vindo à minha landing page!</h1>
      </header>
      <section className="banner">
        <img src="banner.jpg" alt="Banner" />
        <button>Comprar agora</button>
      </section>
      <section className="form">
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </section>
      <footer>
        <p>Contato: meuemail@meudominio.com</p>
      </footer>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  console.log('Formulário enviado!');
}

export default App;
