import { browser } from 'protractor';
import { IFramePage } from '../src/page';

fdescribe('Javascript Code Execution' , () => {
  const iframe: IFramePage = new IFramePage();
  
  describe('Open Browser', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');  
    });
    
    describe('Modify the Height of the IFrame', () => {
      beforeAll(async () => {
        await iframe.modifyIframeHeight(600);
      });
        
      it('should get the new height', async () => {
        expect(await iframe.getIframeHeight())
          .toBe(600);  
      });
    });
  });
});
