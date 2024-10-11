import { Fragment, useState } from 'react';

import './stylesheets/main.css';
import './stylesheets/themes.css';
import './stylesheets/fonts.css';
import Top from './components/top/Top';
import Side from './components/side/Side';
import Content from './components/content/Content';
import Bottom from './components/bottom/Bottom';

export default function App() {
    const [isSideHovered, setSideHovered] = useState(false)

    console.log(isSideHovered)

    return (
        <Fragment>
            <Top />
            <div className="page">
                <Side setSideHovered={setSideHovered}/>
                <Content isSideHovered={isSideHovered}/>
            </div>
            <Bottom />
        </Fragment>
    )
}