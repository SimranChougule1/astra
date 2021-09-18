import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from "../../../utils/set-customize";
/*describe( 'primary menu font settings in the customizer', () => {
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
} );*/


describe( 'Default Position of the Sidebar for pages under the Customizer', () => {
it( 'Position of Sidebar for page as LEFT should apply correctly', async () => {
const pageSidebar = {
'single-page-sidebar-layout': 'left-sidebar',
};
await setCustomize( pageSidebar );
				await createNewPost( {
                    postType: 'page',
                    title: 'Test-page',
                });
                await publishPost();
                await page.goto( createURL( 'Test-page' ), {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector( '.ast-separate-container.ast-left-sidebar #secondary' );
                await expect( {
                    selector: '.ast-separate-container.ast-left-sidebar #secondary',
                    property: '',
                }).cssValueToBe( `` );  
        });

        it( 'Position of Sidebar for pages as RIGHT should apply correctly', async () => {
            const pageSidebar = {
            'single-page-sidebar-layout': 'right-sidebar',
            };
                await setCustomize( pageSidebar );
                await page.goto( createURL( 'Test-page' ), {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary' );
                await expect( {
                    selector: '.ast-separate-container.ast-right-sidebar #secondary',
                    property: '',
                }).cssValueToBe( `` );  
        });

        it( 'Position of Sidebar for pages as NO-Sidebar should apply correctly', async () => {
            const pageSidebar = {
            'single-page-sidebar-layout': 'no-sidebar',
            };
                await setCustomize( pageSidebar );
                await page.goto( createURL( 'Test-page' ), {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector( '.ast-no-sidebar' );
                await expect( {
                    selector: '.ast-no-sidebar',
                    property: '',
                }).cssValueToBe( `` );  
        });

        it( 'Default Position of Sidebar for pages as LEFT should apply correctly', async () => {
            const pageSidebar = {
            'single-page-sidebar-layout': 'default',
            'site-sidebar-layout': 'left-sidebar'
            };
                await setCustomize( pageSidebar );
                await page.goto( createURL( '/' ), {
                    waitUntil: 'networkidle0',
                });
                await page.goto( createURL( 'Test-page' ), {
                    waitUntil: 'networkidle0',
                });
                await page.waitForSelector( '.ast-separate-container.ast-left-sidebar #secondary' );
                await expect( {
                    selector: '.ast-separate-container.ast-left-sidebar #secondary',
                    property: '',
                }).cssValueToBe( `` );  
        });
    });
