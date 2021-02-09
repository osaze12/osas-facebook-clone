import React from 'react';
import './Side.css'
import LeftSideTop from './LeftSideTop';
import LeftSideCenter from './LeftSideCenter';
import LeftSideButtom from './LeftSideButtom';

function Side() {
    return (
        <div className="side-container">
            <div className="side">
                <LeftSideTop />
                <LeftSideCenter />
                <LeftSideButtom />
            </div>
        </div>
    )
}

export default Side
