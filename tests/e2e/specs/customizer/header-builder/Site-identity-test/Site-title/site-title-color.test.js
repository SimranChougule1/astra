import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Site Title color settings in the customizer', () => {
	it( 'site title color should apply corectly', async () => {
		const sitetitleColor = {
            'header-color-site-title': 'rgb(226, 21, 21)',
            'font-size-site-title': {
				desktop: 72,
                'desktop-unit': 'px',
				
            },
        };

        await setCustomize( sitetitleColor);

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
			selector: '.ast-site-identity .site-title a ',
			property: 'color',
		} ).cssValueToBe(
			`${ sitetitleColor[ 'header-color-site-title' ] }`,
		);
	} );
} );