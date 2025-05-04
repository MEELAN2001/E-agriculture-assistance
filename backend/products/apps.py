from django.apps import AppConfig
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile

class MyAppConfig(AppConfig):
    name = 'myapp'

    def ready(self):
        post_save.connect(create_profile, sender=User)

# Function to create Profile after saving User
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

# Function to save Profile when User is saved
@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()
