import { ProjectIpponPage } from './app.po';

describe('project-ippon App', () => {
  let page: ProjectIpponPage;

  beforeEach(() => {
    page = new ProjectIpponPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
