require 'sinatra'

set :views, Proc.new { File.join(root, "/views") }
set :public_folder, Proc.new { File.join(root, "/public") }

get '/' do
  erb :index
end

get '/2' do
  erb :index2
end