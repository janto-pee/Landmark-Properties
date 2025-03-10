"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
urlpatterns = [
    path('address', views.getAllAddress, name='addresses'),
    path('address/new', views.newAddress, name='new_address'),
    path('address/<str:pk>', views.getAddress, name='address'),
    path('address/<str:pk>/update', views.updateAddress, name='update_address'),
    path('address/<str:pk>/delete', views.deleteAddress, name='delete_address'),
    path('stats/<str:topic>', views.getTopicsStats, name='topic_stats'),
]