var products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'data:image/jpeg;base64,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'
    },
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    document.write("\n                <div class=\"product_card\">\n                    <h3>".concat(product.title, ". Price - ").concat(product.price, " UA</h3>\n                    <img src=\"").concat(product.image, "\" alt=\"products_image\">\n                </div>\n    "));
}
