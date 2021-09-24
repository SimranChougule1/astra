import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( 'Blog Archive option under the customizer', () => {
	it( 'Blog Archive post content options should apply correctly', async () => {
        const postcontent ={
            'blog-post-content':{
                'Excert': false,
                'Full-content':true,
            }
        };
    await setCustomize( postcontent );
    await createNewPost( {
        postType: 'post',
        title: 'blog-page',
        content:'blog post created',
    } );
    await publishPost();

    await page.goto( createURL( '2021/09' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector('.ast-separate-container .ast-article-post  ');
    await expect( {
        selector: '.ast-separate-container .ast-article-post  ',
        property: '',
    } ).cssValueToBe(``); 
        //`${ blogmeta[ 'blog-meta' ] }` );
});
})