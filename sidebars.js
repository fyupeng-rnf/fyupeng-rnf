  export default {
    mySidebar: [
      {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: false,
        items: [
          'rnf/introduction',
          {
            label: 'Docs',
            type: 'category',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: '快速开始',
                    link: {
                        type: 'doc',
                        id: 'rnf/quick-start-doc',
                    },
                    items: ['rnf/quick-start-category/version-instruction','rnf/quick-start-category/quick-start-java', 'rnf/quick-start-category/quick-start-golang',
                            'rnf/quick-start-category/quick-start-other'
                    ]
                },
                'rnf/core-feature', 
            ],
            },
        ],
      },
    ],
  };