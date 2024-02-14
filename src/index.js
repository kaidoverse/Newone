import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const rootInstance = createRoot(root);
rootInstance.render(<App />);
