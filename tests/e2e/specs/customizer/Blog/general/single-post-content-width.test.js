import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( ' Single post content width settings in the customizer', () => {
	it( 'Single post default width should apply correctly', async () => {
        const contentwidth = {
            'blog-single-width': 'default',
        };
        await setCustomize( contentwidth );
        await createNewPost( {
            postType: 'post',
            title: 'sample-page',
        } );
        await publishPost();

        await page.goto( createURL( 'sample-page' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.site-content .ast-container');
        await expect( {
            selector: '.site-content .ast-container',
            property: ' ',
        } ).cssValueToBe(``); 

    });
})

it( 'Blog Archive custom width should apply correctly', async () => {
    const contentwidth = {
        'blog-single-max-width': '1200',
    };
    await setCustomize( contentwidth );
    await createNewPost( {
        postType: 'post',
        title: 'sample-page',
    } );
    await publishPost();

    await page.goto( createURL( 'sample-page' ), {
        waitUntil: 'networkidle0',
    } );
    await page.waitForSelector('.single-post .site-content > .ast-container');
    await expect( {
        selector: '.single-post .site-content > .ast-container',
        property: '',
    } ).cssValueToBe(``); 
    

});