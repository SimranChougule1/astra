import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe(' Copyright Margin setting in customizer', () => {
    it( 'top menu margin style should apply correctly', async () => {
		const  copyrightmargin= {
            'section-footer-copyright-margin': {
                'desktop': {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50,
                },
                'tablet': {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50, 
                },
                'mobile': {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50, 
                },
                'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
            },
        };
        await setCustomize(  copyrightmargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
			selector: '.ast-footer-copyright',
			property: '',
		} ).cssValueToBe(``,
			//`${  copyrightmargin[ 'section-footer-copyright-margin' ]}`,
		);
	} );
} );