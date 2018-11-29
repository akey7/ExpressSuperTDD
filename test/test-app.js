process.env.NODE_ENV = 'test'

const request = require('supertest')
const expecte = require('chai').expect
const app = require('../app')
const knex = require('../knex')
