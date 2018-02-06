import React from 'react';


const Title = ({disabled, name}) => (<h1>Hello {name}</h1>)

export default ({ name }) => <Title disabled={true} name={name}></Title>;
