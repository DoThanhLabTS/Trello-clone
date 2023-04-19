import React from 'react'
import './BoardContent.scss'
import Column from 'Components/Column/Column'

function  BoardContent() {
    return (
    <div className='BoardContent'>
      <Column />
      <Column />
    </div>    
    )
}

export default BoardContent