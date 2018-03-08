//problem 1
const problemOne = function(anArray){
	let target = document.getElementById('answer1')
	let avgPrice =Math.round((anArray.reduce((a,b) => a + b.price, 0))/ anArray.length * 100) / 100
	target.innerHTML = `The average price is $${avgPrice}`
	//return avgPrice
}
problemOne(items)


//problem 2
const problemTwo = function(anArray){
	let target = document.getElementById('answer2')
	let arrayPriceRange = anArray.filter(listing => listing.price > 14 && listing.price < 18).filter(filtListing => filtListing.currency_code === 'USD')

	target.innerHTML = `${arrayPriceRange.map(listingObject => listingObject.title).join('\n\n')}`
}
problemTwo(items)

//problem 3
const problemThree = function(anArray){
	let target = document.getElementById('answer3')
	let gbpItem = anArray.filter(listing => listing.currency_code === 'GBP')

	target.innerHTML = `${gbpItem[0].title} costs &pound${gbpItem[0].price}`
}
problemThree(items)

//problem 4
const problemFour = function(anArray) {
	let target = document.getElementById('answer4')
	let woodenItems = anArray.filter(listing => {
		let isWooden = false
		listing.materials.map( mat => {
			if (mat === 'wood'){
					isWooden = true
				}
			})
			return isWooden	
		})
	target.innerHTML = `${woodenItems.map(listingObject => listingObject.title).join('\n\n')}`
}
problemFour(items)

//problem 5
const problemFive = function(anArray){
	let target = document.getElementById('answer5')
	let manyMatItems = anArray.filter(listing => listing.materials.length >= 8)

	target.innerHTML = `${manyMatItems.map(listObj => {
				return `${listObj.title} has ${listObj.materials.length} materials:\n\n${listObj.materials.map(mat => mat).join('\n')}`
			}
		).join('\n\n')}`

}
problemFive(items)

//problem 6
const problemSix = function(anArray) {
	let target = document.getElementById('answer6')
	let homeMade = anArray.filter(item => item.who_made === 'i_did').length
	target.innerHTML = `${homeMade} items were made by their sellers`
}
problemSix(items)