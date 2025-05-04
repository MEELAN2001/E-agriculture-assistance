from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('products.urls')),
]

from django.urls import path
from .views import RegisterUser

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register'),
]
