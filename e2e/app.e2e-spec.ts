import { OrdusionTESTPage } from './app.po';

describe('ordusion-test App', () => {
  let page: OrdusionTESTPage;

  beforeEach(() => {
    page = new OrdusionTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
