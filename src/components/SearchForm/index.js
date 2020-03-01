import React, { Component } from 'react'
import axios from 'axios'
import {
    ActivityIndicator,
    Button,
    SearchResults,
} from 'components'

import './SearchForm.scss'

class SearchForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            searchResults: null,
            loading: false,
            focused: true,
        }
    }
    
    componentDidMount = () => {
        this.input = this.refs.input
        this.input.onblur = this.onBlur
        this.input.onfocus = this.onFocus
    }
    
    onChange = e => {
        e.preventDefault()
        const { value } = e.target
        this.setState({ searchTerm: value })
    }
    
    onClick = e => {
        e.preventDefault()
        this.initSearch()
        this.setState({ loading: true, searchResults: null })
    }
    
    initSearch = async () => {
        const { searchTerm } = this.state
        const query = searchTerm.split(' ').join('+')
        const { data } = await axios.request(`/api/search/${query}`)
        const searchResults = data.data.items || []
        this.setState({ searchResults, searchTerm: '', loading: false })
        this.input
    }
    
    onFocus = e => {
        e.preventDefault()
        this.setState({ focused: true })
    }

    onBlur = e => {
        e.preventDefault()
        this.setState({ focused: false })
    }

    render() {
        const { loading, focused, searchTerm, searchResults } = this.state
        return (
            <div id='search-module'>
                <form
                    id='search-form'
                    onSubmit={this.onClick}
                >
                    <div className='search-field'>
                        <input
                            ref='input'
                            type='text'
                            id='search-field'
                            value={searchTerm}
                            placeholder={focused ? '' : 'Search anything...'}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            autoFocus={true}
                        />
                    </div>
                    <Button
                        type='submit'
                        disabled={loading || !searchTerm.length}
                    >
                        Search
                    </Button>
                </form>
                {loading && <ActivityIndicator />}
                {searchResults
                    ? searchResults.length
                    ? <SearchResults items={searchResults} />
                    : <div className='empty'>No results.</div>
                    : null
                }
            </div>
        )
    }
}

export default SearchForm