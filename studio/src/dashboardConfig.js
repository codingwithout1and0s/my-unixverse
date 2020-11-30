export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc4748033d944e0f08b578a',
                  title: 'Sanity Studio',
                  name: 'my-unixverse-studio',
                  apiId: '44bcca7c-a033-45e9-85d0-613759c750cf'
                },
                {
                  buildHookId: '5fc47480d55272c05cdefeff',
                  title: 'Blog Website',
                  name: 'my-unixverse',
                  apiId: '1b25c1fc-9113-430b-849d-9094bcbde4d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codingwithout1and0s/my-unixverse',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://my-unixverse.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
