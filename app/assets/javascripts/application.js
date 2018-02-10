// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//= require popper
//= require jquery
//= require bootstrap-sprockets


$(function(){
   //set notices to disappear
  if($('#flash_alert') || $('#flash_notice') || $('#flash_error')){
    setTimeout(function(){
       $('#noticeFlashes').fadeOut('slow');

    },3000);
  }
  var inputs = document.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
      if (inputs[i].parentElement.className != "button_to") {
        inputs[i].addClass('form-control');
      }
    }

		$('#listJobs').on('click', function(e){
			e.preventDefault();
			listJobs();
		});


		$('.jobShow').on('click', function(e){
			e.preventDefault();
		   let url = $(this).attr('href');
			 $.get(url)
			 	.done((res) => {
					makeDisplayTemplate(res.job, '#jobsShowPage', '.jobs_applied')
				})
		});
 });




function listJobs(){
	$.get('/jobs')
		.done((jobs) => {
			jobs.forEach(function(job){
					makeDisplayTemplate(job, '#jobsShowPage', '.output');
			});
		});
}




function makeDisplayTemplate(data, template, output) {
	console.log(template);
  let displayTemplate =  $(template).html();
  let finalTemplate = Handlebars.compile(displayTemplate);
  let html = finalTemplate(data);
	console.log(output);
	$(output).html(html);
  
}
