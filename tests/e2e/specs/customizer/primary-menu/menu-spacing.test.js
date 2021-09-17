import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe(' Menu Spacing for top', () => {
    it( 'top menu spacing style should apply correctly', async () => {
		const primarymenuspacing= {
            'header-menu1-menu-spacing': '50px',
            
        };
        await setCustomize( primarymenuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
        
        await expect( {
			selector: '.ast-builder-menu-1 .menu-item > .menu-link',
			property: 'padding-top',
		} ).cssValueToBe(
			`${ primarymenuspacing[ 'header-menu1-menu-spacing' ]}`,
		);
	} );
} );

describe(' Menu Spacing for right', () => {
    it( 'right menu spacing style should apply correctly', async () => {
		const primarymenuspacing= {
            'header-menu1-menu-spacing': '80px',
            
        };
        await setCustomize( primarymenuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
        
        await expect( {
			selector: '.ast-builder-menu-1 .menu-item > .menu-link',
			property: 'padding-right',
		} ).cssValueToBe(
			`${ primarymenuspacing[ 'header-menu1-menu-spacing' ]}`,
		);
	} );
} );

describe(' Menu Spacing for bottom', () => {
    it( 'bottom menu spacing style should apply correctly', async () => {
		const primarymenuspacing= {
            'header-menu1-menu-spacing': '60px',
            
        };
        await setCustomize( primarymenuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
        
        await expect( {
			selector: '.ast-builder-menu-1 .menu-item > .menu-link',
			property: 'padding-bottom',
		} ).cssValueToBe(
			`${ primarymenuspacing[ 'header-menu1-menu-spacing' ]}`,
		);
	} );
} );

describe(' Menu Spacing for left', () => {
    it( 'left menu spacing style should apply correctly', async () => {
		const primarymenuspacing= {
            'header-menu1-menu-spacing': '50px',
            
        };
        await setCustomize( primarymenuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
        
        await expect( {
			selector: '.ast-builder-menu-1 .menu-item > .menu-link ',
			property: 'padding-left',
		} ).cssValueToBe(
			`${ primarymenuspacing[ 'header-menu1-menu-spacing' ]}`,
		);
	} );
} );



