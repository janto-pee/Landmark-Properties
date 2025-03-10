from django.db import models
from datetime import *
from django.contrib.auth.models import User
# Create your models here.

class Address(models.Model):
    title = models.CharField(max_length=200, null=True)
    street = models.CharField(max_length=100)
    street2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state_province_code = models.CharField(max_length=100)
    state_province_name = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=100)
    country_code = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    createdAt= models.DateField(auto_now_add=True)

    # def save(self, *args, **kwargs):
    #     super(Address, self).save(*args, **kwargs)


class ClientsInterested(models.Model):
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profilePhoto = models.CharField(max_length=200)
    createdAt= models.DateField(auto_now_add=True)