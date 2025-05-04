from django.urls import path
from .views import ProductList, ProductDetail, ContactForm

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('products/<int:pk>/', ProductDetail.as_view()),
    path('contact/', ContactForm.as_view()),  # New route for contact form
]

# your_app/urls.py
from django.urls import path
from . import views  # Import your views file here

urlpatterns = [
    path('api/login/', views.login_user, name='login'),  # URL pattern for login
]
