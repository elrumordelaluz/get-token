'use strict'

module.exports = function ({headers, query, cookies}) {
  if (
    headers.authorization &&
		headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return headers.authorization.split(' ')[1]
  }

  if (query && query.token) {
    return query.token
  }

  if (cookies && cookies.token) {
    return cookies.token
  }

  return null
}
