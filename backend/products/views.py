from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate

# Contact Form API View
class ContactFormView(APIView):
    """
    Handles the submission of the contact form.
    Expects 'name', 'email', and 'message' in the request body.
    """
    def post(self, request):
        # Extract form data
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')

        # Validate input
        if not all([name, email, message]):
            return Response(
                {'error': 'All fields are required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Simulate saving the form data (e.g., to a database or sending an email)
        # For now, we'll just return a success response
        return Response(
            {'message': 'Message received! Thank you for contacting us.'},
            status=status.HTTP_200_OK
        )



from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def login_user(request):
    """
    Handle login for users. Authenticate the user using username and password.
    """
    # Retrieve username and password from request
    username = request.data.get("username")
    password = request.data.get("password")

    # Use Django's authenticate function to verify the user
    user = authenticate(username=username, password=password)

    if user is not None:
        # If user is authenticated, return a success message
        return Response({"message": "Login successful", "username": username}, status=status.HTTP_200_OK)
    else:
        # If authentication fails, return an error message
        return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    

from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

class RegisterUser(APIView):
    permission_classes = [AllowAny]  # No authentication required

    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")
        phone = request.data.get("phone")

        if not username or not email or not password or not phone:
            return Response({"message": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Additional validation logic here, e.g., check for existing user with the same email or username

        # Create the user
        user = User.objects.create_user(username=username, email=email, password=password)
        user.profile.phone = phone  # Assuming you have a profile model to store the phone number
        user.profile.save()

        return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)

# e_agriculture/views.py
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from .forms import RegistrationForm  # Make sure you have a form for registration

class RegisterUser(View):
    def get(self, request):
        # Display the registration form
        return render(request, 'register.html')

    def post(self, request):
        # Handle form submission
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        
        if User.objects.filter(username=username).exists():
            return HttpResponse("Username already exists!")
        
        user = User.objects.create_user(username=username, password=password, email=email)
        
        # Automatically log in the user after registration
        login(request, user)

        return redirect('dashboard')  # Assuming you have a 'dashboard' view after login

