import test from 'ava'
import getToken from '.'

test('query', t => {
  t.is(getToken({headers: {}, query: {token: 'hola'}}), 'hola')
})
