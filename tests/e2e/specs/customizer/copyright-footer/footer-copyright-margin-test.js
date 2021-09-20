import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe(' Copyright Margin setting in customizer', () => {
    it( 'top menu margin style should apply correctly', async () => {
		const  copyrightmargin= {
            'section-footer-copyright-margin': '60px',
        };
        await setCustomize(  copyrightmargin );

        await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-footer-copyright' );

        await expect( {
			selector: '.ast-footer-copyright',
			property: 'margin-top',
		} ).cssValueToBe(
			`${  copyrightmargin[ 'section-footer-copyright-margin' ]}`,
		);
	} );
} );

/*it( 'top menu margin style should apply correctly', async () => {
    const  copyrightmargin= {
        'section-footer-copyright-margin': '60px',
    };
    await setCustomize(  copyrightmargin );

    await page.goto( createURL( 'sample' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector( '.ast-footer-copyright' );

    await expect( {
        selector: '.ast-footer-copyright',
        property: 'margin-bottom',
    } ).cssValueToBe(
        `${  copyrightmargin[ 'section-footer-copyright-margin' ]}`,
    );
} );*/

it( 'top menu margin style should apply correctly', async () => {
    const  copyrightmargin= {
        'section-footer-copyright-margin': '60px',
    };
    await setCustomize(  copyrightmargin );

    await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector( '.ast-footer-copyright' );

    await expect( {
        selector: '.ast-footer-copyright',
        property: 'margin-right',
    } ).cssValueToBe(
        `${  copyrightmargin[ 'section-footer-copyright-margin' ]}`,
    );
} );
it( 'top menu margin style should apply correctly', async () => {
    const  copyrightmargin= {
        'section-footer-copyright-margin': '60px',
    };
    await setCustomize(  copyrightmargin );

    await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector( '.ast-footer-copyright' );

    await expect( {
        selector: '.ast-footer-copyright',
        property: 'margin-left',
    } ).cssValueToBe(
        `${  copyrightmargin[ 'section-footer-copyright-margin' ]}`,
    );
});