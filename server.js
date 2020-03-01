import 'babel-polyfill'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import AppComponent from './src/App'
import HTML from 'helpers/renderer'
import serialize from 'serialize-javascript'
import webConfig from 'config'
import routes from 'routes'
import { google } from 'googleapis'

const app = express()

app.use(
  cors({
    origin: `${webConfig.siteURL}`,
    credentials: true,
  })
)
app.use(cookieParser())
app.use('/', express.static('build/public'))

app.use('/api/search/:query', async (req, res, next) => {
  const q = req.params.query
  try {
    const customsearch = google.customsearch('v1')
    const { data } = await customsearch.cse.list({
      q,
      cx: webConfig.customEngineId,
      auth: webConfig.googleApiKey,
    })
    console.log(data)
    res.status(200)
    return res.json({ data })
  }
  catch(e) {
    throw new Error('Google Search Error:', e)
  }
})

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.loadData
    ? activeRoute.loadData(activeRoute)
    : Promise.resolve(null)

  promise.then(data => {

    const context = data ? { data } : {}

    const App = (
      <StaticRouter location={req.url} context={context}>
        <AppComponent />
      </StaticRouter>
    )
    
    const content = renderToString(App)
    const helmet = Helmet.renderStatic()

    const initialState = serialize(context)
    const html = <HTML content={content} state={initialState} helmet={helmet} />
    
    // res.status(200)
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
    res.end()
  })
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})