const app = require('../app')
const request = require('supertest')
let server;

describe('API Request', () => {
  test('should be 200', async done => {
    const response = await request(app)
    .get('/api')
    expect(response.body).toEqual([{user: 'fake', password: 'fake'}])
    done();
  })
})

beforeAll(async (done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await server.close();
});