J.Views.PostShowView = Backbone.View.extend({
	events: {
		"dblclick .title": "editTitle",
		"dblclick .body": "editBody",
		"blur .title_input": "saveTitle",
		"blur .body_input": "saveBody"
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
		var body = $('div.body').text();
		$('div.body').empty();
		$('div.body').html("<textarea class='body_input'>" + body + "</textarea>");
	},

	saveTitle: function() {
		var that = this;

		var newTitle = $('input.title_input').val();
		console.log(newTitle);

		var $h2 = $('h2');
		$h2.empty();
		$h2.text(newTitle);

		that.model.set({ title: newTitle });
		that.model.save();
	},

	saveBody: function() {
		var that = this;

		var newBody = $('input.body_input').text();

		$('div.body').empty();
		$('div.body').text(newBody);

		that.model.set({ body: newBody });
		that.model.save();
	}
})