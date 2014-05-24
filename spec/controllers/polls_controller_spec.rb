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

		it { expect(assigns(:polls)).to eq([poll])  }

	end
end
