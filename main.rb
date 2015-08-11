require 'sinatra'

get '/' do
	redirect "clock.html", 302 
end
