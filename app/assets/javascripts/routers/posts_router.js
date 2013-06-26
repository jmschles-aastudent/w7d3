J.Routers.PostsRouter = Backbone.Router.extend({
	initialize: function($rootEl, posts) {
		this.$rootEl = $rootEl;
		this.posts = posts;
	},

	routes: {
		"": "index",
		"posts/new": "new",
		"posts/:id": "show"
	},

	index: function(){
		var that = this;

		that.$rootEl.empty();
	},

	new: function() {
		var that = this;

		console.log("HELLO");

		var newPostFormView = new J.Views.NewPostFormView({
			collection: that.posts
		});

		that.$rootEl.html(newPostFormView.render().$el);
	},

	show: function(id){
		var that = this;

		var post = that.posts.findWhere( { id: parseInt(id) } );
		var postShowView = new J.Views.PostShowView({
			model: post
		})

		that.$rootEl.html(postShowView.render().$el)
	}
})