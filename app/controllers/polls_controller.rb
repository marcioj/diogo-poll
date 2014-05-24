class PollsController < ApplicationController

	def index
		@polls = Poll.all

		respond_to do |format|
			format.html
			format.json { render json: @polls}
		end

	end

end
