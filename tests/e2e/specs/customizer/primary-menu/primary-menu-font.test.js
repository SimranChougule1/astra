import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from "../../../utils/set-customize";
describe( 'primary menu font settings in the customizer', () => {
	it( 'font setting should apply correctly', async () => {
        const primarymenuFont = {
                'header-menu1-font-family': 'Fruktur',
    			'header-menu1-text-transform': 'uppercase',
                'header-menu1-font-weight': '600',
				'header-menu1-font-size': {
					desktop: 72,
					tablet: '42',
					mobile: '32',
					'desktop-unit': 'px',
					'tablet-unit': 'px',
					'mobile-unit': 'px',
				},
            
        };
        await setCustomize( primarymenuFont );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        

        await page.waitForSelector( '.ast-builder-menu-1' );
        await expect( {
			selector: '.ast-builder-menu-1',
			property: 'font-family',
		} ).cssValueToBe(
			`${primarymenuFont [ 'header-menu1-font-family'] }`,
		);


        await page.waitForSelector( '.ast-builder-menu-1' );
		await expect( {
			selector: '.ast-builder-menu-1',
			property: 'text-transform',
		} ).cssValueToBe(
			`${primarymenuFont [ 'header-menu1-text-transform'] }`,
		);
	
       
		await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
        await expect( {
			selector: '.ast-builder-menu-1 .menu-item > .menu-link',
			property: 'font-size',
		} ).cssValueToBe(
			`${ primarymenuFont[ 'header-menu1-font-size' ].desktop }${ primarymenuFont[ 'header-menu1-font-size' ][ 'desktop-unit' ] }`,
		);

        await page.waitForSelector( '.ast-builder-menu-1' );
        await expect( {
			selector: '.ast-builder-menu-1',
			property: 'font-weight',
		} ).cssValueToBe(
			`${primarymenuFont [ 'header-menu1-font-weight'] }`,
		);
       
	} );
} );
