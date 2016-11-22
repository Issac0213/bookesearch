// var hotelName = "     Hilton    "
// console.log(hotelName.toUpperCase())
// console.log(hotelName.toLowerCase())
// console.log(hotelName.trim())

// var hotelArray = hotelName.split("")
// for(i=0; i<hotelName.length; i++){
// 	console.log(hotelArray[i])
// }

// hotelName = hotelName.toUpperCase()
// console.log('lowercase' + hotelName)

// function initialize(){
// 	var mapProp={
// 		center: new google.maps.LatLng(37.7888890,-122.398104),
// 		zoom:5,
// 		disableDefaultUI: true,
// 		mapTypeId:google.maps.MapTypeId.ROADMAP
// 	}
// 	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp)

	
// 	var marker = new google.maps.Marker({
// 	  position: mapProp.center
// 	})
	
// 	marker.setMap(map)
// 	google.maps.event.addListener(marker,'click',function(){
// 		map.setZoom(9)
// 		map.setCenter(marker.getPosition())
// 	})
// }
// google.maps.event.addDomListener(window, 'load', initialize)

function bookSearch(){
	// store user input
	var search= document.getElementById("search").value
    //clear any previous data
	document.getElementById('results').innerHTML=""

    // make a data request
	$.ajax({
		// url for database
		url : 'https://www.googleapis.com/books/v1/volumes?q=' + search,
		datatype: "json",
		type: "GET",

		success: function(data){
			console.log(data)
			for(i=0; i<data.items.length; i++){
                var jdata = data.items[i].volumeInfo

                //create elements
                var newColSm4 = document.createElement('div')
		   		var newImg = document.createElement('img')
		   		var newH2 = document.createElement('h2')
		   		var newH3 = document.createElement('h3')
		   		var newH4 = document.createElement('h4')
		   		var newAnchor = document.createElement('a')

		   		// add classes to elements
		   		newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item'
		   		newAnchor.className = 'btn btn-primary'

		   		// add text to tags
		   		newH2.innerText = jdata.title
		   		newAnchor.innerText = 'Learn More'

		   		// add href
		   		newAnchor.href = jdata.infoLink
		   		// set target
		   		newAnchor.setAttribute('target', '_blank')

		   		// create image if one exists
		   		if(jdata.imageLinks) {
			   		newImg.src = jdata.imageLinks.thumbnail
		   		} else {
			   		newImg.src = 'img/nobook.jpg'
		   		}

		   		// create publish date if one exists
		   		if(jdata.publishedDate) {
		   			newH4.innerText = jdata.publishedDate
		   		} else {
		   			newH4.innerText = 'no publish date found'
		   		}

		   		// create author if one exists
		   		if(jdata.authors) {
			   		newH3.innerText = jdata.authors[0]
		   		} else {
			   		newH3.innerText = 'no author found'
		   		}

		   		// add tags to document
		   		newColSm4.appendChild(newImg)
		   		newColSm4.appendChild(newH2)
		   		newColSm4.appendChild(newH3)
		   		newColSm4.appendChild(newH4)
		   		newColSm4.appendChild(newAnchor)

		   		// add results to the screen
		   		var results = document.getElementById("results")
		   		results.appendChild(newColSm4)
			}
		},
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)



































