import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from "C:/laragon/www/Astra/wp-content/themes/astra/tests/e2e/utils/set-customize";
describe( 'Site Title hover color settings in the customizer', () => {
	it( 'site title hover color should apply corectly', async () => {
		const sitetitleHoverColor = {
            'header-color-h-site-title': 'rgb(24, 129, 221)',
            
        };

        await setCustomize( sitetitleHoverColor);

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-site-identity .site-title a:hover' );
		
        await expect( {
			selector: '.ast-site-identity .site-title a:hover ',
			property: 'color',
		} ).cssValueToBe(`${ sitetitleHoverColor[ 'header-color-h-site-title' ] }`,
		);
	} );
} );
