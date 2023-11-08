import { Fragment } from 'react';

import './stylesheets/main.css';
import './stylesheets/themes.css';
import './stylesheets/fonts.css';
import Top from './components/top/Top';
import Side from './components/side/Side';
import Bottom from './components/bottom/Bottom';
import Content from './components/mods/Content';


export default function App() {
    return (
        <Fragment>
            <Top />
            <div className="page">
                <Side />
                <div className="content">
                    <Content />
                    <Bottom />
                </div>
            </div>
        </Fragment>
    )
}
