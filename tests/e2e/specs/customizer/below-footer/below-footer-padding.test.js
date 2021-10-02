import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe(' Below footer padding setting in customizer', () => {
    it( 'padding should apply correctly', async () => {
		const belowfooterpadding = {
            'section-below-footer-builder-padding':{
                'desktop':{
                    'top':'50',
                    'right':'50',
                    'bottom':'50',
                    'left':'50',
                },
                /*'tablet':{
                    'top':'50',
                    'right':'50',
                    'bottom':'50',
                    'left':'50',
                },
                'mobile':{
                    'top':'50',
                    'right':'50',
                    'bottom':'50',
                    'left':'50',
                },*/
                'desktop-unit': 'px',
                // 'tablet-unit': 'px',
                // 'mobile-unit]':'px' ,
            }
        };
        await setCustomize( belowfooterpadding );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );
        await page.evaluate( () => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder"]' );

        
        await expect( {
            selector: '.site-below-footer-wrap[data-section="section-below-footer-builder"]',
            property: '',
        } ).cssValueToBe( `` );
         
    });
})