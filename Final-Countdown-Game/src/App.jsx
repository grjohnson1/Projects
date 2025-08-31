import Learning from './components/Learning.jsx';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tought" targetTime={1} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
      <Learning />
    </>
  );
}

export default App;
