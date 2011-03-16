class EchoController < ApplicationController

	def index
        
        if not params["callback"].nil?
            render :js => params["callback"]+'(' + params.to_json + ')';
        end
	end

end

