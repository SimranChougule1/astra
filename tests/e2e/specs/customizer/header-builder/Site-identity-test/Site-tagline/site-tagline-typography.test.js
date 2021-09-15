import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';

describe( 'Site Tagline Typography settings and color settings in the customizer', () => {
	it( 'site tagline typography and color should apply corectly', async () => {
		const sitetaglineTypography = {
            'display-site-tagline-responsive': {
				desktop: true,
            },
            'font-size-site-tagline': {
				desktop: 72,
                'desktop-unit': 'px',
            },
            'body-font-family': 'Great Vibes',
			'body-text-transform': 'lowercase',
			
        };
        await setCustomize( sitetaglineTypography );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await expect( {
			selector: '.site-header .site-description ',
			property: 'font-size',
		} ).cssValueToBe(`${ sitetaglineTypography[ 'font-size-site-tagline' ].desktop }${ sitetaglineTypography[ 'font-size-site-tagline' ][ 'desktop-unit' ] }`,
        );
	} );
} );

