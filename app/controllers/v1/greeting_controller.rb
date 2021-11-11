class V1::GreetingController < ApplicationController
  def index
    render json: Greeting.all.sample.message
  end
end