import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const rootInstance = createRoot(root);
rootInstance.render(<App />);
