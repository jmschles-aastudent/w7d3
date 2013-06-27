J.Views.PostsListView = Backbone.View.extend({
	events: {
		"click .delete" : 'deletePost'
	},

	initialize: function(){
		var that = this;

		this.listenTo(this.collection, 'destroy', this.render);

		var renderCallback = that.render;
		that.listenTo(that.collection, "add", renderCallback);
		that.listenTo(that.collection, "change", renderCallback);
	},

	render: function() {
		var that = this;

		var renderedContent = JST["posts/list"]({
			posts: that.collection
		});

		that.$el.html(renderedContent);

		return that;
	},

	deletePost: function(event){
		var that = this;

		var postId = $(event.target).data('id');
		var model = that.collection.find(function(post){
			return post.get('id') === parseInt(postId);
		});
		console.log(model);
		model.destroy();

	}
});