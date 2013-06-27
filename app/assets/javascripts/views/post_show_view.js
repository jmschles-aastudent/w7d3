J.Views.PostShowView = Backbone.View.extend({
	events: {
		"dblclick .title": "editTitle",
		"dblclick .body": "editBody",
		"blur .title_input": "saveTitle",
		"blur .body_input": "saveBody"
	},

	initialize: function() {
		var that = this;

		that.listenTo(that.model, "destroy", function(){
			Backbone.history.navigate('#', {trigger: true});
		});
	},

	render: function() {
		var that = this;

		var renderedContent = JST['posts/show']({
			post: that.model
		});

		that.$el.html(renderedContent);
		return that;
	},

	editTitle: function() {
		var title = $('h2').text();
		$('h2').empty();
		$('h2').html("<input class='title_input' value='" + title +  "'>");
	},

	editBody: function() {
		var body = $('p').text();
		$('p').empty();
		$('p').html("<textarea class='body_input'>" + body + "</textarea>");
	},

	saveTitle: function() {
		var that = this;

		var newTitle = $('input.title_input').val();

		var $h2 = $('h2');
		$h2.empty();
		$h2.text(newTitle);

		console.log(newTitle);
		that.model.save({ post: {title: newTitle }});
	},

	saveBody: function() {
		var that = this;

		var newBody = $('textarea.body_input').val();

		$('p').empty();
		$('p').text(newBody);

		that.model.set({ post: {body: newBody }});
		that.model.save();
	}
})