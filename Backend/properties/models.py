from django.db import models

# Create your models here.
from django.db import models
from datetime import *
# Create your models here.

class Properties(models.Model):
    prop_type = models.CharField(max_length=100)
    move_in_date = models.CharField(max_length=100)
    data_source_name = models.CharField(max_length=100)
    price = models.IntegerField(default=1)
    year_built = models.IntegerField(default=1)
    permalink = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    beds = models.IntegerField(default=1)
    baths_full = models.IntegerField(default=1)
    baths = models.IntegerField(default=1)
    sqft = models.IntegerField(default=1)
    lot_sqft  = models.CharField(max_length=100)
    hoa_fee = models.IntegerField(default=1)
    hoa_historic_fee  = models.CharField(max_length=100)
    neighborhood = models.CharField(max_length=100)
    raw_prop_type = models.CharField(max_length=100)
    photo_count = models.IntegerField(default=1)
    status = models.CharField(max_length=100)
    list_date = models.CharField(max_length=100)
    last_update = models.CharField(max_length=100)
    photo = models.CharField(max_length=200)
    createdAt= models.DateField(auto_now_add=True)

    # def save(self, force_insert = ..., force_update = ..., using = ..., update_fields = ...):
    #     return super().save(force_insert, force_update, using, update_fields)