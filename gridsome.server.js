// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.onCreateNode(options => {
    if (options.internal.typeName === 'Blog') {

      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      return {
        ...options
      };
    }
  })

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async store => {
      store.addMetadata('company', 'Netlify One'),
      store.addMetadata('slogan', 'Netlify CMS Based Boilerplate'),
      store.addMetadata('author', 'Will Smith'),
      store.addMetadata('mobile', 'tel:07841300999'),
      store.addMetadata('mobileDisplay', '07841 300999'),
      store.addMetadata('telephone', 'tel:01607717999'),
      store.addMetadata('telephoneDisplay', '01607 717999'),
      store.addMetadata('address', '201 Blofield Road'),
      store.addMetadata('village', 'Blofield Heath'),
      store.addMetadata('city', 'Norwich'),
      store.addMetadata('county', 'Norfolk'),
      store.addMetadata('postcode', 'NR13 5EJ')
    }
  )
}
