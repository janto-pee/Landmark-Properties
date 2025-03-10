from django.db import models

# Create your models here.
from django.db import models
from datetime import *
# Create your models here.

class Photo(models.Model):
    description = models.CharField(max_length=200, null=True)
    href = models.CharField(max_length=100)
    tag = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    createdAt= models.DateField(auto_now_add=True)

    # def save(self, force_insert = ..., force_update = ..., using = ..., update_fields = ...):
    #     return super().save(force_insert, force_update, using, update_fields)