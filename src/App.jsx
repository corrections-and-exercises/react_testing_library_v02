import {useState} from 'react';

function App() {
  const [showHeadline, setShowHeadline] = useState(false);

  return (
    <div className='container'>
      <button onClick={() => setShowHeadline(!showHeadline)}>
        Show Headline
      </button>
      {showHeadline && <h1>Hello World</h1>}
    </div>
  );
}

export default App;
