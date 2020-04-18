class PublicController < ApplicationController
  efore_action :authenticate_user!
  def index
  end
end
