const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      items: allContentfulCoffeItem {
        nodes {
          image {
            title
          }
        }
      }
    }
  `)

  result.data.items.nodes.forEach(node => {
    createPage({
      path: `/${node.image.title}`,
      component: path.resolve(`src/templates/coffee-item-template.js`),
      context: {
        title: node.image.title,
      },
    })
  })
}
