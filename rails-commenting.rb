# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Creating a class called BlogPostsController that inherits from the ApplicationController class. The purpose for doing this is to create a controller that controls all of the CRUD actions for the application.
class BlogPostsController < ApplicationController
  def index
    # ---2) Setting the instance variable @posts to BlogPost.all for the index method. This allows the app to have access to all of the blog posts from the database.
    @posts = BlogPost.all
  end

  # ---3) Creating the method for show, which is a RESTFUL route that looks for one item in the blog posts database. The purpose of this is for the app to have access to each individual post in the database.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Creating the method for new, which is a RESTFUL route that disaplys a form for the user. This allows users to be able to add information to the application that is stored in the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Allows you to use RESTFUL route create action to make a new blog post. The Active Record create action will call the strong params method blog_posts_params. The purpose of this is so users are only adding information that is wanted to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Allows you to use the RESTFUL route edit action to edit a blog post. It will search through the posts using the params id, in order to have access to the id that is called.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This code checks to see if the RESTFUL route update action was valid. It will check this by making sure the updated post meets the blog_post_params. The purpose of this is to make sure users are only entering data that is wanted in the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This will redirect the user to the blog_posts_path of the app. The purpose of this is to improve the user experience on the app, showing that the post has been deleted from the list. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is a keyword in Ruby that restricts the scope of where a method can be called. Once the private keyword is implemented, everything below the keyword is included in its protection.
  private
  def blog_post_params
    # ---10) These are the params that will be required for the blog_post_params method. The purpose of the params is so that in order for a user to make a blog post they must enter a title and content. This is to be able to control the data that users are entering into the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
