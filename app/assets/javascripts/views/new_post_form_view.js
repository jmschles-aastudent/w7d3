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

	submit: function(event) {
		event.preventDefault();

		var that = this;
		// var title = $('input#post_title').val();
// 		var body = $('textarea#post_body').val();
		var attrs = $('form').serializeJSON();
		console.log(attrs);

		// var newModel = that.model.set(attrs);
		that.model.save(attrs,
		{wait: true,
			success: function(model) {
			console.log('IM HERE');
			that.collection.add(model);
			Backbone.history.navigate('#', {trigger: true});
		},
			error: function() {
				console.log("here");
				var $p = $('<p>').text("You blew it");
				$('h2').append($p);
		}});

		console.log(that.collection);


	}
});