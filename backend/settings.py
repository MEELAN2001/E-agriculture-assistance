INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'products',
]

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'e_agriculture',
    }
}

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
}

STATIC_URL = 'static/'

INSTALLED_APPS = [
    # other apps...
    'rest_framework',
    
]

INSTALLED_APPS = [
    'corsheaders',
    # other apps...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',  # usually after this one
    # other middleware...
]



