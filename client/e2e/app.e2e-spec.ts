import { TradetrackerPage } from './app.po';

describe('tradetracker App', () => {
  let page: TradetrackerPage;

  beforeEach(() => {
    page = new TradetrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
