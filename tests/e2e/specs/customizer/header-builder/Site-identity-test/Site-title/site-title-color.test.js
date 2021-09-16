import { setCustomize } from ' ../../../../../utils/set-customize';
import { createURL } from '@wordpress/e2e-test-utils';

describe( 'Site Title color settings in the customizer', () => {
	it( 'site title color should apply correctly', async () => {
		const sitetitleColor = {
            'header-color-site-title': 'rgb(226, 21, 21)',
        };
		await setCustomize( sitetitleColor);

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.ast-site-identity .site-title a' );

        await expect( {
			selector: '.ast-site-identity .site-title a ',
			property: 'color',

		} ).cssValueToBe(
			`${ sitetitleColor[ 'header-color-site-title' ] }`,
		);
	} );
} );