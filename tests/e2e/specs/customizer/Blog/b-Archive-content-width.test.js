import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( ' Blog Archive content width settings in the customizer', () => {
	it( 'Blog Archive default width should apply correctly', async () => {
        const contentwidth = {
            'blog-width': 'default',
        };
        await setCustomize( contentwidth );
    
        await page.goto( createURL( '/author/admin' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.ast-container');
        await expect( {
            selector: '.ast-container',
            property: 'max-width',
        } ).cssValueToBe(`${contentwidth[ 'blog-width' ] }`);    
           
    })
    it( 'Blog Archive custom width should apply correctly', async () => {
        const contentwidth = {
            'blog-max-width': '1100'
        };
        await setCustomize( contentwidth );

        await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.ast-container');
        await expect( {
            selector: '.ast-container',
            property: 'max-width',
        } ).cssValueToBe(`${contentwidth[ 'blog-max-width' ] }`);   
       
    });
})
