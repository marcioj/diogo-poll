require 'spec_helper'

describe PollsController do
	
	describe "GET index" do 
		def action 
			get :index, format: :json
		end

		let!(:poll) { Poll.create! }
		
		before do
			action
		end

		it { expect(assigns(:polls)).to eq([poll]) }

	end

	describe "PUT vote" do
		let!(:poll) { Poll.create! }

		def action 
			put :vote, id: poll.id
		end	

		it { expect{ action }.to change{poll.reload.votes.to_i}.by(1) }		

	end
end
