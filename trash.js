describe('Successfully added product', function () {
  it('should send an object with status code 201', function (done) {
    chai
      .request(app)
      .post('/products')
      .then(function (res) {
        expect(res).to.have.status(201)
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('_id')
        expect(res.body._id).to.be.an('object')

        res.body.should.be.an('Obj')

        expect(res.body).to.have.property('name')
        expect(res.body.name).to.be.a('string')

        expect(res.body).to.have.property('price')
        expect(res.body.price).to.be.a('number')

        expect(res.body).to.have.property('description')
        expect(res.body.description).to.be.a('string')
        expect(res.body).to.have.property('stock')
        expect(res.body.stock).to.be.a('number')
        done()
      })
  })
}),
  describe('Product sent without price', function () {
    it('should send an error with status code 400 if', function (done) {
      chai
        .request(app)
        .post('/products')
        .send({
          name: 'test_product',
          description: 'test_description',
          stock: 22
        })
        .then(function (res) {


        })
    })
  }),