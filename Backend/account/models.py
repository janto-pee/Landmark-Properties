from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='userprofile', on_delete=models.CASCADE)
    # profilePhoto = models.FileField(null=True)



# @receiver(post_save, sender=User)
# def save_profile(sender, instance, created, **kwargs):
#     print(instance)
#     user = instance
#     if created:
#         profile = UserProfile(user)
#         profile.save()