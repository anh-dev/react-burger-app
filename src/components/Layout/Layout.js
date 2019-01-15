import React from 'react';
import Auxlr from '../../hoc/Auxlr.jx';

const layout = (props) => (
    <Auxlr>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxlr>
);

export default layout;