import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe(' Below footer column and layout setting in customizer', () => {
    it( 'column and layout should apply correctly', async () => {
		const column = {
            'hbb-footer-column':'2',
            'hbb-footer-layout':{
                'desktop': '2-equal',
            }
        };
        await setCustomize( column );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.evaluate( () => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForSelector( '.ast-builder-grid-row-2-equal .ast-builder-grid-row' );
        await expect( {
            selector: '.ast-builder-grid-row-2-equal .ast-builder-grid-row',
            property: 'grid-template-columns',
        } ).cssValueToBe(`${column['hbb-footer-layout'].desktop}`,
        );
    });
    
    it( 'column and layout should apply correctly', async () => {
		const column = {
            'hbb-footer-column':'2',
            'hbb-footer-layout':{
                'tablet': '2-equal',    
            }
        };
        await setCustomize( column );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.evaluate( () => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForSelector( '.ast-builder-grid-row-container.ast-builder-grid-row-tablet-2-equal .ast-builder-grid-row' );
        await expect( {
            selector: '.ast-builder-grid-row-container.ast-builder-grid-row-tablet-2-equal .ast-builder-grid-row',
            property: 'grid-template-columns',
        } ).cssValueToBe(`${ column [ 'hbb-footer-column'].tablet}`,
        );
    });

    it( 'column and layout should apply correctly', async () => {
		const column = {
            'hbb-footer-column':'2',
            'hbb-footer-layout':{
                'mobile': 'full',    
            }
        };
        await setCustomize( column );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.evaluate( () => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForSelector( '.ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row' );
        await expect( {
            selector: '.ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row',
            property: 'grid-template-columns',
        } ).cssValueToBe(`${ column [ 'hbb-footer-column'].mobile}`,

        );
    });
})





