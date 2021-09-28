import { setBrowserViewport } from '@wordpress/e2e-test-utils';
import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe(' Copyright Margin setting in customizer', () => {
    it( 'Copyright margin style should apply correctly', async () => {
		const copyrightmargin= {
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

        await page.evaluate( () => {
            window.scrollBy(0, window.innerHeight);
        });

        await page.waitForSelector( '.ast-footer-copyright' );


        //for Desktop
        await setBrowserViewport( 'large' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].desktop }${ copyrightmargin [ 'section-footer-copyright-margin' ]['desktop-unit'] }`,);

        await setBrowserViewport( 'large' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].desktop }${ copyrightmargin [ 'section-footer-copyright-margin' ]['desktop-unit'] }`,);

        await setBrowserViewport( 'large' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].desktop }${ copyrightmargin [ 'section-footer-copyright-margin' ]['desktop-unit'] }`,);

        await setBrowserViewport( 'large' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].desktop }${ copyrightmargin [ 'section-footer-copyright-margin' ]['desktop-unit'] }`,);


        //for Tablet
        await setBrowserViewport( 'medium' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].tablet }${ copyrightmargin [ 'section-footer-copyright-margin' ]['tablet-unit'] }`,);

        await setBrowserViewport( 'medium' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].tablet }${ copyrightmargin [ 'section-footer-copyright-margin' ]['tablet-unit'] }`,);

        await setBrowserViewport( 'medium' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].tablet }${ copyrightmargin [ 'section-footer-copyright-margin' ]['tablet-unit'] }`,);

        await setBrowserViewport( 'medium' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].tablet }${ copyrightmargin [ 'section-footer-copyright-margin' ]['tablet-unit'] }`,);

        //for Mobile
        await setBrowserViewport( 'small' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].mobile }${ copyrightmargin [ 'section-footer-copyright-margin' ]['mobile-unit'] }`,);

        await setBrowserViewport( 'small' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-right',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].mobile }${ copyrightmargin [ 'section-footer-copyright-margin' ]['mobile-unit'] }`,);
        
        await setBrowserViewport( 'small' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-bottom',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].mobile }${ copyrightmargin [ 'section-footer-copyright-margin' ]['mobile-unit'] }`,);

        await setBrowserViewport( 'small' );
        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-left',
		} ).cssValueToBe(`${ copyrightmargin [ 'section-footer-copyright-margin' ].mobile }${ copyrightmargin [ 'section-footer-copyright-margin' ]['mobile-unit'] }`,);
	} );
})



