import { jsx as _jsx } from "react/jsx-runtime";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { RecipeProvider } from './context/RecipeContext';
function App() {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: '/', element: _jsx(RecipeProvider, { children: _jsx(Home, {}) }) }) }) }));
}
export default App;
