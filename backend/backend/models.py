from django.db import models

class NaturalPerson(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

class LegalEntity(models.Model):
    contact_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    inn = models.CharField(max_length=12)