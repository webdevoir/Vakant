class UsersController < ApplicationController


  def index

  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
    @user = User.create(user_params)
    redirect_to user_path(@user)
    else

      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit

  end

  def update

  end

  def destory

  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end

end