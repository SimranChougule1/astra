import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';

describe( 'Site Tagline color settings in the customizer', () => {
	it( 'site tagline color should apply corectly', async () => {
		const siteTaglinecolor = {
            'display-site-tagline-responsive': {
				desktop: true,
            },
            'font-size-site-tagline': {
				desktop: 22,
                'desktop-unit': 'px',
            },
            'header-color-site-tagline': 'rgb(116, 16, 217)',
        };

        await setCustomize( siteTaglinecolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
			selector: '.ast-site-identity .site-description ',
			property: 'color',
		} ).cssValueToBe( `${ siteTaglinecolor[ 'header-color-site-tagline' ] }` );
	} );
} );
