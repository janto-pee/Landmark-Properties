from django.db import models
from datetime import *
# Create your models here.

class Agent(models.Model):
    title = models.CharField(max_length=200, null=True)
    profile_name = models.CharField(max_length=100)
    advertiser_id = models.CharField(max_length=100)
    href = models.CharField(max_length=100)
    photo = models.CharField(max_length=100)
    office_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    slogan = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    abbrevation = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    face_centered_photo = models.CharField(max_length=100)
    createdAt= models.DateField(auto_now_add=True)

    # def save(self, force_insert = ..., force_update = ..., using = ..., update_fields = ...):
    #     return super().save(force_insert, force_update, using, update_fields)