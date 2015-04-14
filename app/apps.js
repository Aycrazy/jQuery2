*apps.js*

$(document).ready(function(){});

$('newTaskForm').hide();

var listo = [];

**constructor**

var Task = function(task){
	this.task = task;
	this.id = 'new';
}

var addTask = function (task) {
	if(task){
		task = new Task(task);
		listo.push(task);
		save();

		$('newItemInput').val('');
		$('newList').append('<a href="#finish" class="" id="item"><li class="list-group-item">' +task.task + '<span class="arrow pull-right"><i class= "glyphicon glyphicon-arrow-right"></span></li></a>');
	}

	$('#newTaskform, #newlistItem').fadeToggle('fast','linear');
};

//Opens form//
$('#newlistItem').on('click', function() {
	$('#cancel').on('click', function (e) {
		e.preventDefault();
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});
})

//Closes form
$.('#cancel').on('click', function (e){
	e.preventDefault();
	$.('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
});