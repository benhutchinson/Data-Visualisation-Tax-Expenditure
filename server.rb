require 'sinatra'

set :views, Proc.new { File.join(root, "/views") }
set :public_folder, Proc.new { File.join(root, "/public") }

get '/' do
  erb :index
end

get '/nav' do 
  erb :nav
end

get '/google_gauge' do 
  erb :google_gauge
end

get '/google_pie' do 
  erb :google_pie
end

get '/google_bar' do 
  erb :google_bar
end

get '/d3' do 
  erb :d3
end