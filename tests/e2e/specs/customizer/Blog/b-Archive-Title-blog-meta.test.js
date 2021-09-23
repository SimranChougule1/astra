import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';

describe( 'Blog Archive option under the customizer', () => {
	it( 'Blog Archive post structure meta options should apply correctly', async () => {
        const blogmeta ={
            'blog-post-structure': 'title-meta' 
		};
		//await setCustomize(blogmeta);
        await createNewPost( {
			postType: 'post',
			title: 'sample-page',

		} );
		await publishPost();

        await page.goto( createURL( '2021/09' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-separate-container .ast-article-post ');
		await expect( {
			selector: '.ast-separate-container .ast-article-post ',
			property: '',
		} ).cssValueToBe(``); 
            
	});
})
