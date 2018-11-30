import * as supertest from 'supertest'
import app from './app'

describe('App', () => {
  it('should content is json', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  );

  it('should message is hello world!', () =>
    supertest(app)
      .get('/')
      .expect({"message":"Hello World!"})
      .expect(200)
  )
})
