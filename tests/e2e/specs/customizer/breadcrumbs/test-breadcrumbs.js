import {createURL, createNewPost, publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
import { setBrowserViewport } from '../../../utils/set-browser-viewport';
describe( 'breadcrumb Typography settings in the customizer', () => {
    it( 'breadcrumb typography should apply correctly', async () => {
        const breadcrumbTypography = {
            'breadcrumb-position': 'astra_header_primary_container_after',
            'breadcrumb-font-family': 'Pacifico, handwriting',
            'breadcrumb-font-weight': '800',
            'breadcrumb-text-transform': 'lowercase',
            'breadcrumb-font-size': {
                desktop: 50,
                tablet: 22,
                mobile: 18,
                'desktop-unit': 'px',
                'tablet-unit': 'px',
                'mobile-unit': 'px',
            },
            'breadcrumb-line-height': '70px',
            'breadcrumb-active-color-responsive': {
                desktop: 'rgb(255, 77, 0)',
                tablet: 'rgb(0, 11, 255)',
                mobile: 'rgb(7, 140, 0)',
            },
            'breadcrumb-bg-color': {
                desktop: 'rgb(128, 45, 45)',
                tablet: 'rgb(220, 198, 198)',
                mobile: 'rgb(60, 110, 110)',
            },
            'breadcrumb-seperator-color': {
                desktop: 'rgb(34, 5, 5)',
                tablet: 'rgb(22, 19, 18)',
                mobile: 'rgb(6, 11, 110)',
            },
        };
        await setCustomize( breadcrumbTypography );
        await createNewPost( { postType: 'post', title: 'test post' } );
        await publishPost();
        await page.goto( createURL( '/test-post/' ), {
            waitUntil: 'networkidle0',
        });		
        await page.goto( createURL( '/category/uncategorized' ), {
            waitUntil: 'networkidle0',
        } );

        await page.waitForSelector( '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li' );

//to test breadcrumb font size on desktop
        await expect( {
            selector: '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li ',
            property: 'font-size',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-font-size' ].desktop }${ breadcrumbTypography[ 'breadcrumb-font-size' ][ 'desktop-unit' ] }`,
        );

//to test breadcrumb font size on tablet
        await setBrowserViewport( 'medium' );
        await expect( {
            selector: '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li ',
            property: 'font-size',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-font-size' ].tablet }${ breadcrumbTypography[ 'breadcrumb-font-size' ][ 'tablet-unit' ] }`,
        );

//to test breadcrumb font size on mobile
        await setBrowserViewport( 'small' );
        await expect( {
            selector: '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li ',
            property: 'font-size',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-font-size' ].mobile }${ breadcrumbTypography[ 'breadcrumb-font-size' ][ 'mobile-unit' ] }`,
        );

//to test breadcrumb font weight
        await setBrowserViewport( 'large' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
            property: 'font-weight',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-font-weight' ] }`,
        );

//to test breadcrumb line height
        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'line-height',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-line-height' ] }`,
        );

//to test breadcrum text transform
        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'text-transform',
        } ).cssValueToBe(
            `${ breadcrumbTypography[ 'breadcrumb-text-transform' ] }`,
        );

//to test breadcrumb font family
        await expect( {
            selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
            property: 'font-family',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-font-family' ] }` );

//to test active text color
        await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].desktop }` );

//to test active text color on tablet 
        await setBrowserViewport( 'medium' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].tablet }` );

//to test active text color on mobile
        await setBrowserViewport( 'small' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items .trail-end',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-active-color-responsive' ].mobile }` );

//to test background color on desktop
        await setBrowserViewport( 'large' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'background-color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-bg-color' ].desktop }` );

//to test background color on tablet
        await setBrowserViewport( 'medium' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'background-color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-bg-color' ].tablet }` );

//to test background color on mobile
        await setBrowserViewport( 'small' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'background-color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-bg-color' ].mobile }` );

//to test separator color on desktop
        await setBrowserViewport( 'large' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-seperator-color' ].desktop }` );

//to test separator color on tablet
        await setBrowserViewport( 'medium' );
        await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-seperator-color' ].tablet }` );

//to test separator color on mobile
            await setBrowserViewport( 'small' );
            await expect( {
            selector: '.ast-breadcrumbs-wrapper .trail-items li::after',
            property: 'color',
        } ).cssValueToBe( `${ breadcrumbTypography[ 'breadcrumb-seperator-color' ].mobile }` );

    } );
} );
