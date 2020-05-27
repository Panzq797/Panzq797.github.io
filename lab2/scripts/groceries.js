// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.50
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.00
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.00
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.50
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.28
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.34
	},
	{
		name: "mushroom",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.25
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "Vegetarian(organic)") && (prods[i].vegetarian == true)&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree(organic)") && (prods[i].glutenFree == true)&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true))){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&&(prods[i].organic==true))){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].price+" "+products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}