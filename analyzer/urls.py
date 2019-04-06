from django.urls import include, path
from . import views

app_name = 'analyzer'

urlpatterns = [
    path('', views.home, name='home'),
    path('analyzer/', views.analyzer, name='analyzer'),
    path('upload/', views.upload, name='upload'),
    path('data/', views.data, name='data'),
    path('about/', views.about, name='about'),
    path('error/', views.error, name='error'),
]
