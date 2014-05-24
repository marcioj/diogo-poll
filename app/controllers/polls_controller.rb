class PollsController < ApplicationController

	def index
		@polls = Poll.all

		respond_to do |format|
			format.html
			format.json { render json: @polls}
		end
	end

	def vote
		@poll = Poll.find(params[:id])
		@poll.increment!(:votes)
		render json: Poll.all
	end

end
