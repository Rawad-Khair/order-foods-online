import React from 'react'
import Style from 'styled-components'

const MessageButton = props => {
  return (
    <Btn onClick={props.onclick}>
      {props.title}
    </Btn>
  )
}

export default MessageButton

const Btn = Style.span`
    display: inline-block;
    margin: 15px;
    width: 80px;
    height: 60px;
    background-image: url('images/icons/envelope.png');
    background-size: cover;
    background-color: #eeeff7;
    border-radius: 5px;
    line-height: 6;
    text-align: center;
    cursor: pointer;
    font-size: .9em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none
`
