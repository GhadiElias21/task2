

pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
   });


   let products = pm.response.json();
   let defectiveProducts = [];


   products.forEach(product => {
   let defects = [];


   if (!product.title || product.title.trim() === "") {
       defects.push("Missing or empty title");
   }


   if (product.price < 0) {
       defects.push("Negative price");
   }


   if (product.rating && product.rating.rate > 5) {
       defects.push("Rating exceeds 5");
   }


   if (defects.length > 0) {
       defectiveProducts.push({
           id: product.id,
           title: product.title,
           defects: defects
       });
   }
   });


   console.log("Defective Products:", JSON.stringify(defectiveProducts, null, 2));


   pm.environment.set("defectiveProducts", JSON.stringify(defectiveProducts));


   pm.test("No defective products found", function () {
   pm.expect(defectiveProducts.length).to.eql(0);});
