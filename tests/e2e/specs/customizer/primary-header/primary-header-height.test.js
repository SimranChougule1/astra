import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe('Primary header height setting in customizer', () => {
    it( 'Height should apply correctly', async () => {
		const primaryheaderHeight = {
            'hb-header-height': {
                desktop: 90,
				tablet: 90,
				mobile: 50,
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
            }
            
        };
        await setCustomize( primaryheaderHeight );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-primary-header-bar .site-primary-header-wrap' ); 
        await expect( {
            selector: '.ast-primary-header-bar .site-primary-header-wrap',
            property: 'min-height',
        } ).cssValueToBe(`${ primaryheaderHeight [ 'hb-header-height' ].desktop }${ primaryheaderHeight[ 'hb-header-height' ][ 'desktop-unit' ] }`,
		);

        await expect( {
            selector: '.ast-primary-header-bar .site-primary-header-wrap',
            property: 'min-height',
        } ).cssValueToBe(`${ primaryheaderHeight[ 'hb-header-height' ].tablet }${ primaryheaderHeight[ 'hb-header-height' ][ 'tablet-unit' ] }`,
		);
    });
})


