/**
 * Created by superman on 17/3/15.
 * Modified by fi3work on 18/1/22.
 */

let express = require('express')
let request = require('superagent')

let app = express()
let HOST = 'http://api.douban.com/v2'
app.set('port', (process.env.PORT || 8081))

/**
 * CORS support.
 */

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next()
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET')
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if (req.method === 'OPTIONS') return res.send(200)
  next()
})

let requestList =
  [
    '/movie/:type',
    '/movie/subject/:id',
    '/movie/subject/:id/reviews',
    '/movie/subject/:id/comments',
    '/movie/celebrity/:id'
  ]

requestList.forEach(requestItem => {
  app.get(requestItem, function (req, res) {
    let sreq = request.get(HOST + req.originalUrl)
    sreq.pipe(res)
    sreq.on('end', function (error, res) {
      console.log(`>>> fetch ${requestItem} succeed`)
    })
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})