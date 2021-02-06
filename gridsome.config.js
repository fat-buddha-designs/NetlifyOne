// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}
module.exports = {
  siteName: 'Netlify One',
  siteUrl: 'https://netlifyone.co.uk',
  titleTemplate: '%s | Netlify One',
  permalinks: {
    trailingSlash:false
  },
  icon: {
    favicon: {
      src: './src/assets/img/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/assets/img/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        configPath: `static/admin/config.yml`,
        htmlPath: `static/admin/index.html`,
        htmlTitle: `Maximum CMS`,
        publicPath: `/admin`
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://netlifyone.co.uk',
        sitemap: 'https://netlifyone.co.uk/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
          }
        ]
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#ffffff",
          icon_path: "./src/assets/img/favicon.png",
          name: "Netlify One",
          short_name: "Netlify One",
          theme_color: "#ffffff",
          lang: "en",
      },
  },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/404'],
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'src/data/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Pages',
        path: './content/pages/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
        ,
        remark: {
          autolinkHeadings: false
        }
      }
    }
  ],
  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/Blog.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }]
  },
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/../settings/block.json');
  }
}
