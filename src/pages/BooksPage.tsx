import BackHome from '../components/BackHome';

const books = [
  { title: 'Crime and Punishment', author: 'Dostoevsky', status: '📖 reading' },
  { title: 'The Pragmatic Programmer', author: 'Thomas & Hunt', status: '⟳ rereading' },
  { title: 'Blood Meridian', author: 'Cormac McCarthy', status: '✓ finished' },
  { title: 'Designing Data-Intensive Apps', author: 'Kleppmann', status: '📖 reading' },
];

export default function BooksPage() {
  return (
    <div className="desktop">
      <div className="window">
        <div className="title-bar"><span className="title-bar-text">bookshelf.exe</span><div><button>_</button><button>□</button><button>✕</button></div></div>
        <div className="window-content">
          <BackHome />
          <h1>Reading list</h1>
          {books.map(book => (
            <div key={book.title} style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '10px', color: '#555' }}>{book.status}</div>
              <div><strong>{book.title}</strong> – {book.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="taskbar"><button className="start-button" onClick={() => window.location.href='/'}>Start</button><span>Books</span></div>
    </div>
  );
}