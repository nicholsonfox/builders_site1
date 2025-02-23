from django.core.mail import send_mail
from django.http import JsonResponse
from django.views import View
from .models import NaturalPerson, LegalEntity

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class SubmitFormView(View):
    def post(self, request):
        entity_type = request.POST.get('entities')
        author = request.POST.get('author')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        inn = request.POST.get('inn', None)

        try:
            if entity_type == 'Natural':
                NaturalPerson.objects.create(
                    name=author,
                    email=email,
                    phone=phone
                )
            elif entity_type == 'Legal':
                LegalEntity.objects.create(
                    contact_name=author,
                    email=email,
                    phone=phone,
                    inn=inn
                )
            else:
                return JsonResponse({'error': 'Invalid entity type'}, status=400)

            # Отправляем email
            subject = 'Новая заявка'
            message = f'Имя: {author}\nEmail: {email}\nТелефон: {phone}\nИНН: {inn if inn else "Не указан"}'
            from_email = 'noreply@example.com'
            recipient_list = ['nicholosonfox@gmail.com']  # Замените на email получателя

            send_mail(subject, message, from_email, recipient_list)

            return JsonResponse({'success': True})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)