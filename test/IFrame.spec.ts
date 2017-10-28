import { browser } from 'protractor';
import { IFramePage } from '../src/page';

fdescribe('Given a page with Iframes' , () => {
  const iframe: IFramePage = new IFramePage();
  
  describe('open browser', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');  
    });
    
    it('should get the title', async () => {
      expect(await iframe.getTitle()).toBe('Sample Iframe page');  
    });

    describe('modify the height', () => {
      beforeAll(async () => {
        await iframe.modifyIframeHeight(600);
      });
        
      it('should get the new height', async () => {
        expect(await iframe.getIframeHeight()).toBe(600);  
      });

      describe('switch to Iframe 1', () => {
        beforeAll(async () => {
          await iframe.switchIframe1();  
        });
        
        it('should get the title of the Iframe', async () => {
          expect(await iframe.getTitle()).toBe('Practice Automation Form');  
        });
  
        describe('switch to main context', () => {
          beforeAll(async () => {
            await iframe.switchMain();  
          });
          
          it('should get the title of the main context again', async () => {
            expect(await iframe.getTitle()).toBe('Sample Iframe page');  
          });
        }); 
      });  
    });
  });
});
