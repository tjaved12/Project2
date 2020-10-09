$(document).ready(function() {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page

	let day1; 
	$.get('/api/user_data').then(function(data) {
		console.log(data);
		var test = data.id;
		$('.member-name').text(data.email + '  ID:' + test);

		//This GET request get the data from Day1 table and update the Handlebars
		$.get('/api/user_diet').then(function(data) {
			//var id = test
			var result = null;
			

			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			day1 = result ; 

			$('.diet-breakfast').text(result.breakfast);
			$('.diet-amsnack').text(result.amsnack);
			$('.diet-lunch').text(result.lunch);
			$('.diet-pmsnack').text(result.pmsnack);
			$('.diet-dinner').text(result.dinner);


		});

		$.get('/api/user_diet2').then(function(data) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast2').text(result.breakfast);
			$('.diet-amsnack2').text(result.amsnack);
			$('.diet-lunch2').text(result.lunch);
			$('.diet-pmsnack2').text(result.pmsnack);
			$('.diet-dinner2').text(result.dinner);
		});

		$.get('/api/user_diet3').then(function(data) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast3').text(result.breakfast);
			$('.diet-amsnack3').text(result.amsnack);
			$('.diet-lunch3').text(result.lunch);
			$('.diet-pmsnack3').text(result.pmsnack);
			$('.diet-dinner3').text(result.dinner);
		});

		$.get('/api/user_diet4').then(function(data) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast4').text(result.breakfast);
			$('.diet-amsnack4').text(result.amsnack);
			$('.diet-lunch4').text(result.lunch);
			$('.diet-pmsnack4').text(result.pmsnack);
			$('.diet-dinner4').text(result.dinner);
		});

		$.get('/api/user_diet5').then(function(data, id) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast5').text(result.breakfast);
			$('.diet-amsnack5').text(result.amsnack);
			$('.diet-lunch5').text(result.lunch);
			$('.diet-pmsnack5').text(result.pmsnack);
			$('.diet-dinner5').text(result.dinner);
		});

		$.get('/api/user_diet6').then(function(data) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast6').text(result.breakfast);
			$('.diet-amsnack6').text(result.amsnack);
			$('.diet-lunch6').text(result.lunch);
			$('.diet-pmsnack6').text(result.pmsnack);
			$('.diet-dinner6').text(result.dinner);
		});

		$.get('/api/user_diet7').then(function(data) {
			var result = null;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
					break;
				}
			}

			$('.diet-breakfast7').text(result.breakfast);
			$('.diet-amsnack7').text(result.amsnack);
			$('.diet-lunch7').text(result.lunch);
			$('.diet-pmsnack7').text(result.pmsnack);
			$('.diet-dinner7').text(result.dinner);
		});
	});
	// $('#myModal').on('shown.bs.modal', function () {
	// 	$('#myInput').trigger('focus')
	//   })


	$(".dropdown-item li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
	
		// $.put ("/api/user_modify", function(req, res) {
		// 	day1.update(
		// 		$('.dropdown-item1 option:selected').text(),
		// 		$('.dropdown-item2').text(db.day1.amsnack),
		// 		$('.dropdown-item3').text(db.day1.lunch),
		// 		$('.dropdown-item4').text(db.day1.pmsnack),
		// 		$('.dropdown-item5').text(db.day1.dinner),  function(result) {
		// 		console.log(result);
		// 		res.sendStatus(200);
		// 		});
		// })

		console.log(day1)

		day1.breakfast = $(this).text(); 
		day1.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
		})
	})


	;})


// db.day1.breakfast

$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })