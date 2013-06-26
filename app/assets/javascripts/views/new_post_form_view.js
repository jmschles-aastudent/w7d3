J.Views.NewPostFormView = Backbone.View.extend({
	events: {
		'click #submit_button': 'submit'
	},

	render: function() {
		var that = this;
		var renderedContent = JST['posts/new']({
			post: "that.model"
		});

		that.$el.html(renderedContent);
		return that;
	},

	submit: function() {
		var that = this;
		var title = $('input#post_title').val();
		var body = $('textarea#post_body').val();

		var savedModel = that.collection.create({
			title: title,
			body: body
		}, {wait: true,
			success: function() {
			Backbone.history.navigate('#', {trigger: true});
		},
			error: function() {
				console.log($('h1'));
				var $p = $('<p>').text("You blew it");
				$('h2').append($p);
		}});

		console.log(that.collection);


	}
});