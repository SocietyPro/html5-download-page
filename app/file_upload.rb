# encoding: utf-8

require 'sinatra/base'
require 'json'
require 'slim'
Tilt.register Tilt::ERBTemplate, 'html.erb'



class FileUpload < Sinatra::Base

    def get_releases
      data_hashes = []
      puts "Looking for files... in #{settings.releases}"
      # Subracting settings.unallowed_paths as below seems to remove legitimate files too:
      # Dir.glob(settings.releases + "/*.json") - settings.unallowed_paths do |file|
      Dir.glob(settings.releases + "/*.json").each do |file|
        puts file
        data = File.read(file)
        data_hash = JSON.parse(data)
        data_hashes.push(data_hash)
      end
      data_hashes
    end

  configure do
    enable :static
    enable :sessions
  
    set :views, File.join(File.dirname(__FILE__), 'views')
    set :public_folder, File.join(File.dirname(__FILE__), 'public')
    set :releases, File.join(settings.public_folder, 'releases')
    set :unallowed_paths, ['.', '..']
  end
    
  helpers do
    def flash(message = '')
      session[:flash] = message
    end
  end

  before do
    @flash = session.delete(:flash)
  end

  not_found do
    slim 'h1 404'
  end

  error do
    slim "Error (#{request.env['sinatra.error']})"
  end

  get '/' do
    @files = get_releases
    
    puts @files.to_s
   # exit
    
    erb :index
    #slim :index
  end
  
  get '/upload' do
    p 'ok'
  end
  
  post '/upload' do
    if params[:file]
      filename = params[:file][:filename]
      file = params[:file][:tempfile]
      puts params.to_s
      metadata = generate_metadata(params)
      File.open(File.join(settings.files, filename), 'wb') do |f|
        f.write file.read
      end

      flash 'Upload successful'
    else
      flash 'You have to choose a file'
    end

    redirect '/'
  end
end
