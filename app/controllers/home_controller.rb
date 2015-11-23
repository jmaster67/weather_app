class HomeController < ApplicationController
	def index
	end

	def new	
		if params[:location].nil?
			@results=HTTParty.get('http://ip-api.com/json')
	    	@location_new=@results["zip"]
	    else 
	    	@location=Location.new location_params
    		@location_new=@location.state+"/"+@location.city
    		@location_new.gsub!(" ","_")	    	
	    end
	    @weather_url = "http://api.wunderground.com/api/ed4b5bf53486878a/geolookup/conditions/q/#{@location_new}.json"
    	@weather = HTTParty.get(@weather_url)
    	@new_location=Location.new
    end

    private

    def location_params
     	params.require(:location).permit(:city, :state)
    end
end
