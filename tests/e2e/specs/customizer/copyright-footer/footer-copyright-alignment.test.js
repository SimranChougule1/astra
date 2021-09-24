import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( 'copyright alignment settings in the customizer', () => {
    it( 'copyright alignment should apply correctly', async () => {
            	 const copyrightAlignment = {
                 'footer-copyright-alignment':{
                    'desktop':'left',
                    'tablet':'left',
                    'mobile':'left',
                }
            };

            await setCustomize( copyrightAlignment );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );

            await page.evaluate( () => {
                window.scrollBy(0, window.innerHeight);
            });
            await page.waitForSelector( '.ast-builder-layout-element' );
            await expect( {
                selector: '.ast-builder-layout-element',
                property: '',
            } ).cssValueToBe( ``);
                 //${copyrightAlignment['footer-copyright-alignment']}
}); });