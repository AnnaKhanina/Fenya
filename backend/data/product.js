const products = [
    {
      name: "Трусики жіночі сліпери Anna",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      filter: [
          {       
            brand: "Anna"
          },
          {
            color: "чорні"
          },
          {
            size: "M"
          },
          {
            decription: "бавовна"
          }
      ],
      category: "Трусики",
      subcategory: "Сліпери",
      countInStock: 10,
      instock: true,
      price: 200,
      rainting: 5,
      reviews: "Класні трусики"
    },
];

module.exports = products;