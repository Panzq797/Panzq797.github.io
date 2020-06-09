// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		category: "vegetable"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		category: "bakery"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.00,
		category: "meat"
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.50,
		category: "meat"
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.00,
		category: "meat"
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.00,
		category: "bakery"
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.50,
		category: "vegetable"
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.28,
		category: "fruit"
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.34,
		category: "vegetable"
	},
	{
		name: "mushroom",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.25,
		category: "vegetable"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProductsFruit(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "Vegetarian(organic)") && (prods[i].vegetarian == true)&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree(organic)") && (prods[i].glutenFree == true)&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true))&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&&(prods[i].organic==true))&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsVegetable(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "Vegetarian(organic)") && (prods[i].vegetarian == true)&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree(organic)") && (prods[i].glutenFree == true)&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true))&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&&(prods[i].organic==true))&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsBakery(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "Vegetarian(organic)") && (prods[i].vegetarian == true)&&(prods[i].organic==true)&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree(organic)") && (prods[i].glutenFree == true)&&(prods[i].organic==true)&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true))&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&&(prods[i].organic==true))&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="bakery")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsMeat(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "Vegetarian(organic)") && (prods[i].vegetarian == true)&&(prods[i].organic==true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "GlutenFree(organic)") && (prods[i].glutenFree == true)&&(prods[i].organic==true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true))&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&&(prods[i].organic==true))&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="meat")){
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


