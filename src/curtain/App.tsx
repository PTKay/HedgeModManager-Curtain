import { Fragment } from 'react';

import './stylesheets/main.css';
import './stylesheets/themes.css';
import './stylesheets/fonts.css';
import Top from './components/top/Top';
import Side from './components/side/Side';
import Content from './components/content/Content';


export default function App() {
    return (
        <Fragment>
            <Top />
            <div className="page">
                <Side />
                <Content />
            </div>
        </Fragment>
    )
}
