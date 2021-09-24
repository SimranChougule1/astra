import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( ' Blog Archive content width settings in the customizer', () => {
	it( 'Blog Archive default width should apply correctly', async () => {
        const contentwidth = {
            'blog-width': 'default',
        };
        await setCustomize( contentwidth );
        await createNewPost( {
            postType: 'post',
            title: 'blog-page',
            content:'blog post created',
        } );
        await publishPost();
    
        await page.goto( createURL( '2021/09' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.ast-container');
        await expect( {
            selector: '.ast-container',
            property: ' ',
        } ).cssValueToBe(``); 
           
    });
})

it( 'Blog Archive custom width should apply correctly', async () => {
    const contentwidth = {
        'blog-max-width': '1200',
    };
    await setCustomize( contentwidth );
    await createNewPost( {
        postType: 'post',
        title: 'blog-page',
        content:'blog post created',
    } );
    await publishPost();

    await page.goto( createURL( '2021/09' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector('.ast-container');
    await expect( {
        selector: '.ast-container',
        property: 'max-width',
    } ).cssValueToBe(``); 
    //${contentwidth[ 'blog-max-width' ] }
       
});

