const model = 
{
    title: '',
    role: '',
    description: '',
    bullets: [

    ],
    tags: [ '' ],
    code: '',
    link: '',
    imgSrc: '',
    gallery: [

    ]
};

const projects = [
    {
        title: 'Slate Theme Wrap',
        role: 'Developer',
        description: 'A smart build system for customizing slate themes.',
        bullets: [
            'Allows the core theme files to be maintained and tracked seperately as a submodule',
            'Easy project-specific theme overrides and additions',
            'Only recompiles the files you edit, and only if they are calculated to be in the final build'
        ],
        tags: [ 'gulp', 'javascript' ],
        code: 'https://github.com/zakposner/slate-theme-wrap',
        link: '',
        imgSrc: '../../assets/img/projects/slate-theme-wrap/screenshot.jpg',
        gallery: [

        ]
    },
    {
        title: 'MerchHouse',
        role: 'Front End Developer',
        description: 'Merch House is a T-shirt marketplace for Greek organizations and social clubs.',
        bullets: [
            'Design and development on a dynamic, interactive dashboard for store admins',
            'Design and styling on an embedded custom t-shirt designer widget',
            'Implementation of the project build system, utilizing Gulp and Webpack',
            'Dynamic table generation in PHP'
        ],
        tags: [ 'gulp', 'webpack', 'javascript', 'html', 'css', 'jquery', 'php', 'scss' ],
        code: '',
        link: 'https://merch.house/',
        imgSrc: '../../assets/img/projects/merchhouse/dashboard.png',
        gallery: [

        ]
    },
    {
        title: 'Ultrapress - Site Redesign',
        role: 'Front End Developer',
        description: 'Ultrapress is an ecommerce application in the custom tshirt niche, built with Angular',
        bullets: [
            'Tweaks to some of the controller logic, specifically for calculating and presenting delivery dates',
            'Consolidation of a mass of scss files into a cohesive site theme',
            'Complete homepage redesign',
            'Restyling of the customer account, dashboard, and order summary pages'
        ],
        tags: [ 'javascript', 'angular', 'docker', 'grunt', 'html', 'css', 'scss', 'webpack' ],
        code: '',
        link: 'https://ultrapress.com/',
        imgSrc: '../../assets/img/projects/ultrapress/home-page.jpg',
        gallery: [

        ]
    },
    {
        title: '8th Bridge Capital Site',
        role: 'Front End Developer',
        description: 'Custom WordPress site for an investment firm specializing in EB-5',
        bullets: [
            'Custom built full-page navigation experience',
            'Animated map showing office locations throughout Asia',
            'Theme customization'
        ],
        tags: [ 'javascript', 'jquery', 'html', 'css', 'scss', 'php', 'gulp', 'wordpress' ],
        code: '',
        link: 'https://8thbridgecap.com/',
        imgSrc: '../../assets/img/projects/8bc/nav.jpg',
        gallery: [

        ]
    },
    {
        title: 'ONYX Slider',
        role: 'Creator',
        description: 'Customizable Shopify image slider that can be dropped in to any theme using Shopify\'s grid system. Includes a multidude of options for configuring design, functonality, and responsiveness.',
        bullets: [
            'Numerous methods for the end user to customize content display and position',
            'Advanced slider height and responsiveness settings',
            'Compatible with Shopify Dynamic Sections'
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
        code: '',
        link: 'https://sickysworld.com/',
        imgSrc: '../../assets/img/projects/onyx_slider/slider.jpg',
        gallery: [

        ]
    },
    {
        title: 'Advanced Product Gallery',
        role: 'Front End Developer',
        description: 'Custom JS and page templates for running advanced Product Page image galleries',
        bullets: [
            'Options to link product image slideshow to variant images',
            ''
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
        code: 'https://github.com/zakposner/Product-Gallery',
        link: 'https://sickysworld.com/collections/womens/products/off-road-matte-black',
        imgSrc: '../../assets/img/projects/gallery/sicky.jpg',
        gallery: [

        ]
    },
    {
        title: 'Custom Content Row',
        role: 'Front End Developer',
        description: 'A highly customizable and extensible row system for building Shopify storefronts',
        bullets: [
            'Highly customizable content positioning',
            'Compatible with any slate-derived Shopify theme'
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
        code: 'https://github.com/zakposner/content-row',
        link: '',
        imgSrc: '../../assets/img/projects/content_row/customizer.jpg',
        gallery: [

        ]
    },
    // {
    //     title: 'LivHOME Site',
    //     role: 'Lead Developer',
    //     description: 'A highly customizable and extensible row system for building Shopify storefronts',
    //     bullets: [
    
    //     ],
    //     tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
    //     code: 'https://github.com/zakposner/content-row',
    //     link: '',
    //     imgSrc: '../../assets/img/projects/content_row/customizer.jpg',
    //     gallery: [

    //     ]
    // }
];

export default projects;