require 'spec_helper'

describe PollsController do

	describe "routing" do 
		it { expect(get("/polls")).to route_to("polls#index") }
		it { expect(get("/")).to route_to("polls#index") }
	end

end