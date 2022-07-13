import { initE2eFixture } from './common/e2eFixture';

const PATH = '/api/v0';

describe(`HelloController (${PATH})`, () => {
  const fixture = initE2eFixture();

  it('GET /', () => {
    return fixture.req
      .get(PATH)
      .expect(200)
      .expect({ message: 'Hello world!' });
  });
});
