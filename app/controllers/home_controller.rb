class HomeController < ApplicationController
	def index
	end

	def new
		puts params[:location]
		if params[:location].nil?
			@results=HTTParty.get('http://ip-api.com/json')
	    # @location="lat="+@results["lat"].to_s+"&lon="+@results["lon"].to_s
	    	@location_new=@results["zip"]
	    # @weather_url = "http://api.openweathermap.org/data/2.5/weather?q=#{@location}&APPID=6f188d89b8bd85b5e4911df9b542941c"
	    else 
	    	@location=Location.new location_params
	    	# @location.city=@location.city.gsub! ' ', ''
	    	# @location.state=@location.state.gsub! ' ', ''
	    	@location_new=@location.state+"/"+@location.city
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
# ed4b5bf53486878a
# http://api.wunderground.com/api/ed4b5bf53486878a/geolookup/conditions/q/IA/Cedar_Rapids.json