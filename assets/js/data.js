// Nếu chưa có data trong localStorage thì tạo
if (!localStorage.getItem("products")) {
  const products = [
    {
      id: 1,
      name: "DirtyCoins Patch In Heart T-Shirt Black",
      price: "395.000₫",
      material: "Cotton 100%",
      sizes: ["S", "M", "L", "XL"],
      fit: "Oversized Fit",
      details: ["Front printed logo", "Soft cotton material"],
      model: "Male model 1m80 - 70kg wearing size L.",
      image: "sp1.png",
      chart: "sizechart.png"
    },
    {
      id: 2,
      name: "DirtyCoins Patch In Heart T-Shirt White",
      price: "395.000₫",
      material: "Cotton 100%",
      sizes: ["S", "M", "L", "XL"],
      fit: "Oversized Fit",
      details: ["Front printed logo", "Soft cotton material"],
      model: "Female model 1m65 - 48kg wearing size M.",
      image: "sp2.png",
      chart: "sizechart.png"
    },
    {
      id: 3,
      name: "DirtyCoins Logo Red Wool Knit Scarf",
      price: "650.000₫",
      material: "Wool Blend",
      sizes: ["One size"],
      fit: "Standard",
      details: ["Soft warm wool texture", "Woven brand logo"],
      model: "Unisex model 1m75 wearing free size.",
      image: "sp3.png",
      chart: ""
    },
    {
      id: 4,
      name: "DirtyCoins Logo Black Wool Knit Scarf",
      price: "650.000₫",
      material: "Wool Blend",
      sizes: ["One size"],
      fit: "Standard",
      details: ["Soft warm wool texture", "Woven brand logo"],
      model: "Unisex model 1m70 wearing free size.",
      image: "sp4.png",
      chart: ""
    },
    {
      id: 5,
      name: "Soccer Jersey Dico Seven Red Green",
      price: "520.000₫",
      material: "Polyester",
      sizes: ["S", "M", "L", "XL"],
      fit: "Regular Fit",
      details: [
        "All artworks on the polo use sublimation printing.",
        "Patch-embroidered logo on the chest."
      ],
      model: "Female model 1m65 - 48kg wearing size M.",
      image: "sp5.png",
      chart: "sizechart.png"
    },
    {
      id: 6,
      name: "DirtyCoins Logo Type Green iPhone Case",
      price: "125.000₫",
      material: "Plastic Hard Case",
      sizes: ["iPhone 13", "iPhone 14", "iPhone 15"],
      fit: "Slim Fit",
      details: ["Matte surface", "Scratch resistant"],
      model: "Standard iPhone fit",
      image: "sp6.png",
      chart: ""
    },
    {
      id: 7,
      name: "DirtyCoins GraffiStar Red iPhone Case",
      price: "130.000₫",
      material: "Plastic Hard Case",
      sizes: ["iPhone 13", "iPhone 14", "iPhone 15"],
      fit: "Slim Fit",
      details: ["Printed graphic", "Durable finish"],
      model: "Standard iPhone fit",
      image: "sp7.png",
      chart: ""
    },
    {
      id: 8,
      name: "DirtyCoins Big Y Logo Brown iPhone Case",
      price: "135.000₫",
      material: "Plastic Hard Case",
      sizes: ["iPhone 13", "iPhone 14", "iPhone 15"],
      fit: "Slim Fit",
      details: ["Matte coating", "Brown edition"],
      model: "Standard iPhone fit",
      image: "sp8.png",
      chart: ""
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
}
