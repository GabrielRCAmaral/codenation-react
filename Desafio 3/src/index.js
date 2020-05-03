const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	
	productsList_filter = productsList.filter((product) => {
		return ids.includes(product.id);
	});

	response={
		products:[],
		promotion:"",
		totalPrice:"",
		discountValue:"",
		discount:""
	};
	
	productsList_filter.forEach(element => {
		response.products.push({name:element.name,category:element.category});
	});

	let total_preco = productsList_filter.reduce((total,currentValue) =>{
		return total+currentValue.regularPrice;

	},0);

	response.promotion=getDiscontType(productsList_filter);

	let discont_preco = productsList_filter.reduce((total,currentValue) =>{
		let price=currentValue.regularPrice;
		
		currentValue.promotions.forEach(element => {
			if(element.looks.includes(response.promotion)){price=element.price;};

			
		});
		return total +price;

	},0);

	response.totalPrice=discont_preco.toFixed(2);
	response.discountValue=(total_preco-discont_preco).toFixed(2);
	let discont_percent=((total_preco-discont_preco)*100/total_preco).toFixed(2)
	response.discount=discont_percent+"%";
	return response;
};

function getDiscontType(productsList){
	let discont= productsList.reduce((rv, x) =>{
		(rv[x["category"]] = rv[x["category"]] || []).push(x);
		return rv;
	  }, {});

	  return promotions[Object.keys(discont).length-1];
};

module.exports = { getShoppingCart };
