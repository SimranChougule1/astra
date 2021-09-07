import {
	createURL,
	createNewPost,
	publishPost,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';

describe( 'post title size in the customizer', () => {
    it( 'page title size should apply corectly', async () => {
        const postTitle = {
            'font-size-entry-title': {
                desktop: 22,
                tablet: 20,
                mobile: 18,
                'desktop-unit': 'px',
                'tablet-unit': 'px',
                'mobile-unit': 'px',
            },
        };

        await setCustomize( postTitle );
        await createNewPost( { postType: 'post', title: 'hello world' } );
		await publishPost();
		await page.goto( createURL( '/hello-world/' ), {
			waitUntil: 'networkidle0',

        await page.waitForSelector( '.ast-single-post .entry-title, .page-title' );

        await expect( {
            selector: '.site-header .site-description',
            property: 'font-size',
        } ).cssValueToBe(
            `${ siteTagline[ 'font-size-site-tagline' ].desktop }${ siteTagline[ 'font-size-site-tagline' ][ 'desktop-unit' ] }`,
        );
    } );
} );
