$(document).ready(function() {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page

	let day1={}; 
	let day2={};
	let day3={};
	let day4={};
	let day5={};
	let day6={};
	let day7={};

	$.get('/api/user_data').then(function(data) {
		console.log(data);
		var test = data.id;
		$('.member-name').text(data.email + '  ID:' + test);

		//This GET request gets the data from Day1 table and updates Handlebars
		$.get('/api/user_diet').then(function(data) {
<<<<<<< HEAD
		
=======
			var id = test
			var result = null;
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				}
				else{
					result=data[0]
					
				}
			}

			day1 = result; 
			day2 = result;
			day3 = result; 
			day4 = result;
			day5 = result; 
			day6 = result;
			day7 = result; 
			

			$('.diet-breakfast').text(result.breakfast);
			$('.diet-amsnack').text(result.amsnack);
			$('.diet-lunch').text(result.lunch);
			$('.diet-pmsnack').text(result.pmsnack);
			$('.diet-dinner').text(result.dinner);



		$.get('/api/user_diet2').then(function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				
				}
				else{
					result=data[0]
					
				}
			}
			$('.diet-breakfast2').text(result.breakfast);
			$('.diet-amsnack2').text(result.amsnack);
			$('.diet-lunch2').text(result.lunch);
			$('.diet-pmsnack2').text(result.pmsnack);
			$('.diet-dinner2').text(result.dinner);
		});

		$.get('/api/user_diet3').then(function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				
				}
				else{
					result=data[0]
					
				}
			}

			$('.diet-breakfast3').text(result.breakfast);
			$('.diet-amsnack3').text(result.amsnack);
			$('.diet-lunch3').text(result.lunch);
			$('.diet-pmsnack3').text(result.pmsnack);
			$('.diet-dinner3').text(result.dinner);
		});

		$.get('/api/user_diet4').then(function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				
				}
				else{
					result=data[0]
					
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
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				
				}
				else{
					result=data[0]
					
				}
			}

			$('.diet-breakfast6').text(result.breakfast);
			$('.diet-amsnack6').text(result.amsnack);
			$('.diet-lunch6').text(result.lunch);
			$('.diet-pmsnack6').text(result.pmsnack);
			$('.diet-dinner6').text(result.dinner);
		});

		$.get('/api/user_diet7').then(function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == test) {
					result = data[i];
				
				}
				else{
					result=data[0]
					
				}
			}

			$('.diet-breakfast7').text(result.breakfast);
			$('.diet-amsnack7').text(result.amsnack);
			$('.diet-lunch7').text(result.lunch);
			$('.diet-pmsnack7').text(result.pmsnack);
			$('.diet-dinner7').text(result.dinner);
		});
	});
	


	$(".dropdown-item1 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day1.breakfast = $(this).text(); 
		day1.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
<<<<<<< HEAD
		}).then (res=>{
			window.location.href="/members"
		})
	});
=======
			}).then (res=>{
				window.location.href="/members"
			})
		}
	})
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

	$(".dropdown-item2 li").click(function(e) {
	

		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day1.amsnack = $(this).text(); 
		day1.day = $(this).attr("data-day")
		
			$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
		}).then (res=>{
			window.location.href="/members"
		})
	});

	$(".dropdown-item3 li").click(function(e) {
		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day1.lunch = $(this).text(); 
		day1.day = $(this).attr("data-day")
			$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
		}).then (res=>{
			window.location.href="/members"
		})
	});

	$(".dropdown-item4 li").click(function(e) {
		

		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day1.pmsnack = $(this).text(); 
		day1.day = $(this).attr("data-day")
			$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
		}).then (res=>{
			window.location.href="/members"
		})
	})
<<<<<<< HEAD
=======
	
	$(".dropdown-item5 li").click(function(e) {
		e.preventDefault();
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

	$(".dropdown-item5 li").click(function(e) {
				console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day1.dinner = $(this).text(); 
		day1.day = $(this).attr("data-day")
			$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day1
		}).then (res=>{
			window.location.href="/members"
		})
	});

	$(".dropdown-item6 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day2.breakfast = $(this).text(); 
		day2.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day2
		}).then (res=>{
			window.location.href="/members"
		})
<<<<<<< HEAD
	});
=======
	})

>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292
	$(".dropdown-item7 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day2.amsnack = $(this).text(); 
		day2.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day2
		}).then (res=>{
			window.location.href="/members"
		})
<<<<<<< HEAD
	});
=======
	})
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

	$(".dropdown-item8 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day2.lunch = $(this).text(); 
		day2.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day2
		}).then (res=>{
			window.location.href="/members"
		})
<<<<<<< HEAD
	});
=======
	})
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

	$(".dropdown-item9 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day2.pmsnack = $(this).text(); 
		day2.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day2
		}).then (res=>{
			window.location.href="/members"
		})
<<<<<<< HEAD
	});
=======
	})
>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292

	$(".dropdown-item10 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day2.dinner= $(this).text(); 
		day2.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day2
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item11 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.breakfast = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		})
	})

<<<<<<< HEAD
=======
	$(".dropdown-item11 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.breakfast = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item11 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.breakfast = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item11 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.breakfast = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		})
	})

>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292
	$(".dropdown-item12 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.amsnack = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		})
<<<<<<< HEAD
	});
	
=======
	})

>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292
	$(".dropdown-item13 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.lunch = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		
	})
	})
	$(".dropdown-item14 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.pmsnack = $(this).text(); 
		day3.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		
	})
<<<<<<< HEAD
})
=======

>>>>>>> 418b1d091cf8b11e42aa6c37a8dcd97809271292
	$(".dropdown-item15 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day3.dinner = $(this).text(); 
		day3.dinner = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day3
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item16 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day4.breakfast = $(this).text(); 
		day4.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day4
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item17 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day4.amsnack = $(this).text(); 
		day4.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day4
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item18 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day4.lunch = $(this).text(); 
		day4.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day4
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item19 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day4.pmsnack = $(this).text(); 
		day4.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day4
		}).then (res=>{
			window.location.href="/members"
		})
	})
	$(".dropdown-item20 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day4.lunch = $(this).text(); 
		day4.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day4
		}).then (res=>{
			window.location.href="/members"
		})
	})




	$(".dropdown-item21 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day5.breakfast = $(this).text(); 
		day5.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day5
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item22 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day5.amsnack = $(this).text(); 
		day5.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day5
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item23 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day5.lunch = $(this).text(); 
		day5.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day5
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item24 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day5.pmsnack = $(this).text(); 
		day5.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day5
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item25 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day5.dinner = $(this).text(); 
		day5.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day5
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item26 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day6.breakfast = $(this).text(); 
		day6.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day6
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item27 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day6.amsnack = $(this).text(); 
		day6.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day6
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item28 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day6.lunch = $(this).text(); 
		day6.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day6
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item29 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day6.pmsnack = $(this).text(); 
		day6.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day6
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item30 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day6.dinner = $(this).text(); 
		day6.day = $(this).attr("data-day")
	
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day6
		}).then (res=>{
			window.location.href="/members"
		})
	})
	
	$(".dropdown-item31 li").click(function(e) {
		console.log($(this).text())	

		console.log($(this).attr("data-day"))
		day7.breakfast = $(this).text(); 
		day7.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day7
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item32 li").click(function(e) {
		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day7.amsnack = $(this).text(); 
		day7.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day7
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item33 li").click(function(e) {
		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day7.lunch = $(this).text(); 
		day7.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day7
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item34 li").click(function(e) {
		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day7.pmsnack = $(this).text(); 
		day7.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day7
		}).then (res=>{
			window.location.href="/members"
		})
	})

	$(".dropdown-item35 li").click(function(e) {
		console.log($(this).text())	
		console.log($(this).attr("data-day"))
		day7.dinner = $(this).text(); 
		day7.day = $(this).attr("data-day")
		
		$.ajax({
			url: "/api/user_modify",
			type: 'PUT',
			data: day7
		}).then (res=>{
			window.location.href="/members"
		})
	});
	})
})

	
	// $(".dropdown-item1 li").click(function(e) {
	// 	console.log($(this).text())	
	// 	console.log($(this).attr("data-day"))
	// 	day1.day = $(this).attr("data-day")
	// 	day1.breakfast = $(this).text(); 
	
	// 		$.ajax({
	// 		url: "/api/user_add",
	// 		type: 'POST',
	// 		data: day1
		
	// 	}).then (res=>{
	// 		window.location.href="/members"
	// 	})

	// })

