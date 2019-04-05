const products = require('../products.json')

function getProductById(req, res) {
  let { id } = req.params
   
  products.filter(product => {
    if (+product.id === +id) {
      return res.status(200).send(product)
    }
  })
  return res.status(500).send('Item not in list')
}


module.exports = {
  getProductById
}