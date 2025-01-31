from django.http import JsonResponse
from django.views import View
from .models import NaturalPerson, LegalEntity  # Импортируем ваши модели

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
@method_decorator(csrf_exempt, name='dispatch')
class SubmitFormView(View):
    def post(self, request):
        # Получаем данные из запроса
        entity_type = request.POST.get('entities')
        author = request.POST.get('author')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        inn = request.POST.get('inn', None)  # ИНН только для юр. лиц
        try:
            if entity_type == 'Natural':
                # Сохраняем данные для физ. лица
                NaturalPerson.objects.create(
                    name=author,
                    email=email,
                    phone=phone
                )
                print(phone)
            elif entity_type == 'Legal':
                # Сохраняем данные для юр. лица
                LegalEntity.objects.create(
                    contact_name=author,
                    email=email,
                    phone=phone,
                    inn=inn
                )
            else:
                return JsonResponse({'error': 'Invalid entity type'}, status=400)

            return JsonResponse({'success': True})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)