// var mydata = JSON.parse(data);
// console.log(mydata);
// for(i=0;i<mydata.length;i++){
//     document.getElementById("movieData").innerHTML += (i+1);
//     for(x in mydata[i]){
//         document.getElementById("movieData").innerHTML += '<p>'+mydata[i][x]+'</p>';
        
//     }
//     document.getElementById("movieData").innerHTML += '<hr>';    
// }
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
// }    


$(".accordion-handle").click(function(){
	$(".accordion-content").slideUp(300);
	$(".accordion-handler-icons").removeClass("fa-eye");
	$(".accordion-handler-icons").addClass("fa-eye-slash");
	$(this).children(".accordion-handler-icons").addClass("fa-eye");
	$(this).children(".accordion-handler-icons").removeClass("fa-eye-slash");
	$(this).siblings(".accordion-content").slideDown(300);
	console.log($(this).attr("id"));
});

