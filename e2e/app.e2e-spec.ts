import { ValidateJsonPage } from './app.po';

describe('validate-json App', () => {
  let page: ValidateJsonPage;

  beforeEach(() => {
    page = new ValidateJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
