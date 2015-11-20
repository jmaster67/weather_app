class HomeController < ApplicationController
	def index
	end

	def new
		@results=HTTParty.get('http://ip-api.com/json')
	    # @location="lat="+@results["lat"].to_s+"&lon="+@results["lon"].to_s
	    @location=@results["zip"]
	    # @weather_url = "http://api.openweathermap.org/data/2.5/weather?q=#{@location}&APPID=6f188d89b8bd85b5e4911df9b542941c"
	    
	    @weather_url = "http://api.wunderground.com/api/ed4b5bf53486878a/geolookup/conditions/q/#{@location}.json"
    	@weather = HTTParty.get(@weather_url)
    	@time = Time.new.strftime(" %A %B-%d-%Y %H:%M:%S:%p")
    	
    end
end
# ed4b5bf53486878a
# http://api.wunderground.com/api/ed4b5bf53486878a/geolookup/conditions/q/IA/Cedar_Rapids.json