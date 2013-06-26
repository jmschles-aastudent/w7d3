window.J = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	initialize: function ($sidebar, $content, posts) {
		var that = this;

		var posts = new J.Collections.Posts;

		posts.fetch({
			success: function(){
				that.installSidebar($sidebar, posts);
				new J.Routers.PostsRouter($content, posts);
				Backbone.history.start();
			}
		});
	},

	installSidebar: function($sidebar, posts) {
		var that = this;

		var postsListView = new J.Views.PostsListView({
			collection: posts
		});

		$sidebar.html(postsListView.render().$el);
	}
};