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
        imgSrc: 'slate-theme-wrap/screenshot.JPG',
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
        imgSrc: 'merchhouse/dashboard.PNG',
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
        imgSrc: 'ultrapress/home-page.jpg',
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
        imgSrc: '8bc/nav.JPG',
        gallery: [

        ]
    },
    {
        title: 'ONYX Slider',
        role: 'Developer',
        description: 'Customizable Shopify image slider that can be dropped in to any theme using Shopify\'s grid system. Includes a multidude of options for configuring design, functonality, and responsiveness.',
        bullets: [
            'Numerous methods for the end user to customize content display and position',
            'Advanced slider height and responsiveness settings',
            'Compatible with Shopify Dynamic Sections'
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
        code: '',
        link: 'https://sickysworld.com/',
        imgSrc: 'onyx_slider/slider.JPG',
        gallery: [

        ]
    },
    {
        title: 'Advanced Product Gallery',
        role: 'Front End Developer',
        description: 'Custom JS and page templates for running advanced Product Page image galleries',
        bullets: [
            'Mobile responsive image galleries',
            'Options to hot reload product image galleries based on selected variant'
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'liquid' ],
        code: 'https://github.com/zakposner/Product-Gallery',
        link: 'https://sickysworld.com/collections/womens/products/off-road-matte-black',
        imgSrc: 'gallery/sicky.JPG',
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
        imgSrc: 'content_row/customizer.JPG',
        gallery: [

        ]
    },
    {
        title: 'LivHOME Site',
        role: 'Developer / Web Consultant',
        description: 'LivHOME specializes in home care solutions and recieves most of their leads through their website.',
        bullets: [
    
        ],
        tags: [ 'javascript', 'html', 'css', 'scss', 'wordpress', 'gulp' ],
        code: '',
        link: 'https://www.livhome.com/',
        imgSrc: 'livhome/home.JPG',
        gallery: [

        ]
    }
];

export default projects;