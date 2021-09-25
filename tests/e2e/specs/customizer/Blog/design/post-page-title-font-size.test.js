import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Post/Page title font size option under the customizer', () => {
	it( 'Post/Page title font size options should apply correctly', async () => {
        const titlefontsize={
            'font-size-entry-title':{
                'desktop': '70',
				'tablet': '',
				'mobile': '',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
            }
        };
        await setCustomize(titlefontsize );
        await createNewPost( {
            postType: 'post',
            title: 'sample-post',
                
        } );
        await publishPost();
        
        await createNewPost( {
            postType: 'post',
            title: 'test-post',
                
        } );
        await publishPost();
        
        await page.goto( createURL( 'test-post' ), {
            waitUntil: 'networkidle0',
        } );

        await page.waitForSelector(' .ast-single-post .entry-title ');
        await expect( {
            selector: '.ast-single-post .entry-title',
            property: 'font-size',
        } ).cssValueToBe(`${ titlefontsize[ 'font-size-entry-title' ].desktop }${ titlefontsize[ 'font-size-entry-title' ][ 'desktop-unit' ] }`,
		);

    })
});
        
        