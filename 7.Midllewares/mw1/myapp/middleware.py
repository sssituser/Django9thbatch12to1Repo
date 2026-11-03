class ExecutionFlowMiddleware(object):
  
    def __init__(self,get_response):
        print("Init Method Executed")
        self.get_response=get_response
        
    def __call__(self,request):
        print("Processing the request")
        response=self.get_response(request)
        print("Processing the response")
        return response
    
from django.http import HttpResponse
class AppMaintenceMiddleware(object):
    def __init__(self,get_response):
        self.get_response=get_response
        
    def __call__(self,request):
        return HttpResponse("<h1>Currently Application Unser Maintence Try after two days</h1>")
    
    
class ErrormessageMiddlware(object):
    def __init__(self,get_response):
        self.get_response=get_response
        
    def __call__(self,request):
        response = self.get_response(request)
        return response
    
    def process_exception(self,request,exception):
        return HttpResponse(f"<h2>Currently we are facing technical issue try after some time:{exception}</h2>")
        