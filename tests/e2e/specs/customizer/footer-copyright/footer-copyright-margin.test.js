import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe( 'copyright top margin settings in the customizer', () => {
    it( 'copyright top margin should apply correctly', async () => {
        const copyrightmargin = {

            'section-footer-copyright-margin':'60px',          
        };

        await setCustomize( copyrightmargin );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'margin-top',
        } ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ] }`,);
    });
})

describe( 'copyright right margin settings in the customizer', () => {
    it( 'copyright right margin should apply correctly', async () => {
        const copyrightmargin = {

            'section-footer-copyright-margin':'60px',          
        };

        await setCustomize( copyrightmargin );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'margin-right',
        } ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ] }`,);
    });
})

describe( 'copyright bottom margin settings in the customizer', () => {
    it( 'copyright bottom margin should apply correctly', async () => {
        const copyrightmargin = {

            'section-footer-copyright-margin':'80px',          
        };

        await setCustomize( copyrightmargin );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'margin-bottom',
        } ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ] }`,);
    });
})

describe( 'copyright left margin settings in the customizer', () => {
    it( 'copyright left margin should apply correctly', async () => {
        const copyrightmargin = {

            'section-footer-copyright-margin':'60px',          
        };

        await setCustomize( copyrightmargin );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'margin-left',
        } ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ] }`,);
    });
})