'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const { it, expect } = require('@jest/globals');
const mockRequest = supertest(server); // supertest takes in the server and makes a mock server for testing

// The test block
describe('API Server', () => {


  it('Should respond with a 404 error route', () => {
    return mockRequest.get('/test500')
      .then(results => {
        expect(results.status).toBe(404);
      });
    
  });

  it('Should 404 on an incorrect Method', () => {
    return mockRequest.post('/person?=CodeKingTJ')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });

  it('Should return a 500 error on no name', () => {
    return mockRequest.get('/person?=')
      .then(results => {
        expect(results.status).toBe(500);
      });
  });

  it('Status 200 with a succesful name query', () => {
    return mockRequest.get('/person?name=CodeKingTJ')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
});




// Start with testing routes
// 1- Ztatus code
// Shape of output
// errors and things that shouldnt happen
