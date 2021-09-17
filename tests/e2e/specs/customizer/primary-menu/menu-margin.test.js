import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";

describe(' Menu Margin for top', () => {
    it( 'top menu margin style should apply correctly', async () => {
		const primarymenuMargin= {
            'section-hb-menu-1-margin': '60px',
        };
        await setCustomize( primarymenuMargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .main-header-menu' );

        await expect( {
			selector: '.ast-builder-menu-1 .main-header-menu',
			property: 'margin-top',
		} ).cssValueToBe(
			`${ primarymenuMargin[ 'section-hb-menu-1-margin' ]}`,
		);
	} );
} );


describe(' Menu Margin for right', () => {
    it( 'right menu margin style should apply correctly', async () => {
		const primarymenuMargin= {
            'section-hb-menu-1-margin': '60px',
        };
        await setCustomize( primarymenuMargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .main-header-menu' );

        await expect( {
			selector: '.ast-builder-menu-1 .main-header-menu',
			property: 'margin-right',
		} ).cssValueToBe(
			`${ primarymenuMargin[ 'section-hb-menu-1-margin' ]}`,
		);
	} );
} );


describe(' Menu Margin for bottom', () => {
    it( 'bottom menu margin style should apply correctly', async () => {
		const primarymenuMargin= {
            'section-hb-menu-1-margin': '60px',
        };
        await setCustomize( primarymenuMargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .main-header-menu' );

        await expect( {
			selector: '.ast-builder-menu-1 .main-header-menu',
			property: 'margin-bottom',
		} ).cssValueToBe(
			`${ primarymenuMargin[ 'section-hb-menu-1-margin' ]}`,
		);
	} );
} );


describe(' Menu Margin for left', () => {
    it( 'left menu margin style should apply correctly', async () => {
		const primarymenuMargin= {
            'section-hb-menu-1-margin': '60px',
        };
        await setCustomize( primarymenuMargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-builder-menu-1 .main-header-menu' );

        await expect( {
			selector: '.ast-builder-menu-1 .main-header-menu',
			property: 'margin-left',
		} ).cssValueToBe(
			`${ primarymenuMargin[ 'section-hb-menu-1-margin' ]}`,
		);
	} );
} );
