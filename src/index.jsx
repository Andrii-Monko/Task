import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.getElementById('root');
createRoot(element).render(
    <div>
        <App />
    </div>
)