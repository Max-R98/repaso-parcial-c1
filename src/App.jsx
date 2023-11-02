import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [game, setGame] = useState({
    title: '',
    platform: ''
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    const titleIsValid = game.title.length >= 3 && !game.title.startsWith(' ');
    const platformIsValid = game.platform.length >= 6;
  
    if (titleIsValid && platformIsValid) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      {!show && (
        <form onSubmit={handleSumbit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label>Título</label>
          <input
            type="text"
            value={game.title}
            onChange={(event) => setGame({ ...game, title: event.target.value })}
          />
          <label>Plataforma</label>
          <input
            type="text"
            value={game.platform}
            onChange={(event) => setGame({ ...game, platform: event.target.value })}
          />
          <button>Enviar</button>
        </form>
      )}
      {show && <Card title={game.title} platform={game.platform} />}
      {error && <h5 style={{ color: 'red' }}>Verifique bien los datos antes de enviar</h5>}
    </div>
  );
}

export default App;
