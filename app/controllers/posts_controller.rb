class PostsController < ApplicationController
  def index
    posts = Post.all

    respond_to do |format|
      format.html
      format.json {render json: posts}
    end
  end
  def create
    post = Post.create!(params[:post])

    render json: post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    render json: post
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(params[:post])

    render :json => post
  end
end
