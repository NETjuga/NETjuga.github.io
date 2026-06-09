import BackHome from '../components/BackHome';

const hobbies = [
  '🥊 Muay Thai – training 4x/week',
  '🎧 Producing house & techno music',
  '🏃 Running – 10km+ to reset',
  '⚡ Electrical projects (radars, LiDAR, robotics)',
  '📚 Reading – 2 books/month (Dostoevsky, AI design)',
];

export default function UpToPage() {
  return (
    <div className="desktop">
      <div className="window">
        <div className="title-bar"><span className="title-bar-text">what_i_am_up_to.exe</span><div><button>_</button><button>□</button><button>✕</button></div></div>
        <div className="window-content">
          <BackHome />
          <h1>Outside the code</h1>
          <ul className="skill-list">
            {hobbies.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </div>
      <div className="taskbar"><button className="start-button" onClick={() => window.location.href='/'}>Start</button><span>Up To</span></div>
    </div>
  );
}