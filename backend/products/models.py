from djongo import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    current_price = models.FloatField()
    previous_price = models.FloatField(default=0.0)
    price_change = models.FloatField(default=0.0)
    date_updated = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.price_change = self.current_price - self.previous_price
        super().save(*args, **kwargs)

from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.user.username
