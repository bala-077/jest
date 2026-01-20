const request = require('supertest');
const { app, server } = require('../index');

describe('GET /', () => {
    it('should return 200 status and correct message', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello from the server');
    })
});

afterAll(() => {
    server.close();
})