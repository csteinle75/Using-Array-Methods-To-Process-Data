//problem 1
let avgPrice =Math.round((items.reduce((a,b) => a + b.price, 0))/ items.length * 100) / 100
console.log(avgPrice)
//let avgPrice = items.reduce((a,b) => a + b.price, 0)
//console.log(Math.round((avgPrice /items.length) * 100)/100)

//problem 2
let arrayPriceRange = items.filter(listing => listing.price > 14 && listing.price < 18).filter(filtListing => filtListing.currency_code === 'USD')
console.log(arrayPriceRange)

//problem 3
let gbpItem = items.filter(listing => listing.currency_code === 'GBP')
console.log(gbpItem)

//problem 4
let woodenItems = items.filter(listing => {

	let isWooden = false

	listing.materials.map( mat => {
		if (mat === 'wood'){
				isWooden = true
			}
		})
		return isWooden	
	})
console.log(woodenItems)

//problem 5
let manyMatItems = items.filter(listing => listing.materials.length >= 8)
console.log(manyMatItems)

//problem 6
console.log(items.filter(item => item.who_made === 'i_did').length)