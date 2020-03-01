import React from 'react'
import { Card } from 'components'

import './SearchResults.scss'

const SearchResults = ({ items }) => (
    <ul className='search-results'>
        {items.map((item, key) => (
            <li key={key}>
                <Card data={item} />
            </li>
        ))}
    </ul>
)

export default SearchResults