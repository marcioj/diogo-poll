require 'spec_helper'

describe PollsController do

	describe "routing" do 
		it { expect(get("/polls")).to route_to("polls#index") }
		it { expect(get("/")).to route_to("polls#index") }
		it { expect(put("/polls/1/vote")).to route_to("polls#vote", id: "1") }
	end
end