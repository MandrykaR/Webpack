import calcExpression, { sum, mult } from './calculator/index'
import fetchUser from './profile/gateway'
import { printProfile } from './profile/index'
import './polyfills/array-flat'
import './polyfills/array-flatMap'

const calcResult = calcExpression('1 + 2')
const sumResult = sum(1, 2)
const multResult = mult(1, 2)
const userDataPromise = fetchUser('facebook')
printProfile({ name: 'Tom', from: 'The World' })
