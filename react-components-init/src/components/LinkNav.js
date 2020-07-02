import React from 'react';

function LinkNav(props){
    return(
    <li><a href={props.href}>{props.nome}</a></li>
    );
}

export default LinkNav;