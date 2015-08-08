var Example = angular
	.Component({
		selector: 'example'
	})
	.View({
		template: '<h1>{{name}}</h1>'
	})
	.Class({
		constructor: function () {
			this.name = '<%= name %>';
		}
	});

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(Example);
});