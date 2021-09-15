import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';

describe( 'Site Title Typography settings and color settings in the customizer', () => {
	it( 'site title typography and color should apply corectly', async () => {
		const sitetitleTypography = {
            'body-font-family': 'Great Vibes',

			'body-text-transform': 'lowercase',
			'font-size-site-title': {
				desktop: 72,
                'desktop-unit': 'px',
            },
        };
        await setCustomize( sitetitleTypography );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await expect( {
			selector: '.site-title a',
			property: 'font-size',
		} ).cssValueToBe(`${ sitetitleTypography[ 'font-size-site-title' ].desktop }${ sitetitleTypography[ 'font-size-site-title' ][ 'desktop-unit' ] }`,
        );
	} );
} );

