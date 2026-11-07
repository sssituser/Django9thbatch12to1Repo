class ExecutionFlowMiddleware(object):

    def __init__(self,get_response):
        print('constructor(init) method executed')
        self.get_response = get_response

    def __call__(self,request):
        print('Processed Request')
        response = self.get_response(request)
        print('processed Response')
        return response

from django.http import HttpResponse
class AppMaintenanceMiddleware(object):

    def __init__(self,get_response):
        self.get_response = get_response

    def __call__(self,request):
        response = self.get_response(request)
        return HttpResponse("<h1>Application is under maintenence try After two days</h1>")

class ErrorMessageMiddleware(object):
    def __init__(self,get_response):
        self.get_response = get_response

    def __call__(self,request):
        response = self.get_response(request)
        return response
    def process_exception(self,request,exception):
        return HttpResponse(f"<h1>Currently we are facing techinal issues : {exception}</h1>")

    