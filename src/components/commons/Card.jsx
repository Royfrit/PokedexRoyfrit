import React from 'react'
import { Card } from 'antd';

const CardPoke = (props) => <Card {...props}>{props.children}</Card>

export default CardPoke