import { SqliteAppPage } from './app.po';

describe('sqlite-app App', () => {
  let page: SqliteAppPage;

  beforeEach(() => {
    page = new SqliteAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
