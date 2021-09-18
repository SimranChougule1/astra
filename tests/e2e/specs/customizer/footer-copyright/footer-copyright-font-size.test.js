import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe( 'copyright font size settings in the customizer', () => {
    it( 'copyright font size should apply correctly', async () => {
        const copyrightfontsize = {

            'font-size-section-footer-copyright':'40px',
        };

        await setCustomize( copyrightfontsize );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'font-size',
        } ).cssValueToBe(`${ copyrightfontsize [ 'font-size-section-footer-copyright' ] }`,);

    });
})