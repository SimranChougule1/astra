import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Enable post eccerpt option under the customizer', () => {
	it( 'Enable post excerpt options should apply correctly', async () => {
        const enablepostexcerpt ={
            'enable-related-posts-excerpt': 'true',
            'related-posts-excerpt-count': '25',
        };
    await setCustomize( enablepostexcerpt );
    await createNewPost( {
        postType: 'post',
        title: 'sample-post',
        excerpt: 'Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu',
        
    } );
    await publishPost();

    await createNewPost( {
        postType: 'post',
        title: 'test-post',
        
    } );
    await publishPost();

    await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
    } );


    await page.evaluate( () => {
        window.scrollBy(0, window.innerHeight);
    });

    await page.waitForSelector(' .ast-separate-container .ast-article-post ');
    await expect( {
        selector: '.ast-separate-container .ast-article-post ',
        property: '',
    } ).cssValueToBe(``); 

    await expect( {
        selector: '.ast-separate-container .ast-article-post ',
        property: '',
    } ).cssValueToBe(``);
})
});
