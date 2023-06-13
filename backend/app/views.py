from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pyresparser import ResumeParser
import json

@csrf_exempt
def upload_resume(request):
    if request.method == "POST" and request.FILES.get("resume"):
        r_file = request.FILES["resume"]

        try:
            parser = ResumeParser(r_file)
            result = parser.get_extracted_data()

            return JsonResponse(result)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request."}, status=400)
