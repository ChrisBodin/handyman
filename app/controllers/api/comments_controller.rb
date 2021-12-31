class Api::CommentsController < ApplicationController
  before_action :set_service
  before_action :set_comments, only: [:show, :update, :destroy]

  def index
    render json: @service.comments 
  end

  def show
    render json: @comment
  end

  def create 
    @comment = @service.comments .new(comment_params)
    if @comment.save 
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render json: { message: 'Comment deleted' }
  end

  private 
    def comment_params
      params.require(:comment).permit(:author, :tools, :request)
    end

    def set_service
      @service = service.find(params[:service_id])
    end

    def set_comment
      @comment = @service.comment.find(params[:id])
    end

end
end
