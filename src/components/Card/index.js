import React from 'react'

import './Card.scss'

const Card = ({ data }) => {
    const {
        htmlTitle,
        link,
        // displayLink,
        htmlSnippet,
    } = data
    return (
        <div className='card'>
            <a href={link} target='_blank'>
                <h2 dangerouslySetInnerHTML={{ __html: htmlTitle }} />
            </a>
            <p dangerouslySetInnerHTML={{ __html: htmlSnippet.split('<br>').join(' ') }} />
        </div>
    )
}

export default Card