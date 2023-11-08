import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './stylesheets/main.css';
import './stylesheets/themes.css';
import './stylesheets/fonts.css';
import Top from './components/top/Top';
import Side from './components/side/Side';
import Bottom from './components/bottom/Bottom';
import Content from './components/content/Content';

export default function App() {
    return (
        <Router>
            <Top />
            <div className="page">
                <Side />
                <div className="content">
                    <Content />
                    <Bottom />
                </div>
            </div>
        </Router>
    )
}
