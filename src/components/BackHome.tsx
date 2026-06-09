import { useNavigate } from 'react-router-dom';

export default function BackHome() {
  const navigate = useNavigate();
  return (
    <button className="back-link" onClick={() => navigate('/')}>
      ← Back to Desktop
    </button>
  );
}