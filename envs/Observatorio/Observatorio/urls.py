"""Observatorio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.views.generic.base import RedirectView
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from RestApiApp.api.router import router_reporte, router_user, router_noticias, router_catNoticias

schema_view = get_schema_view(
    openapi.Info(
        title="Observatorio Ciudadano",
        default_version='v1',
        description="REST API de Observatorio Ciudadano",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="aurelio.marin@iest.edu.mx"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

urlpatterns = [
    path('', RedirectView.as_view(url='/admin')),
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include(router_user.urls)),
    path('api/', include(router_reporte.urls)),
    path('api/', include(router_noticias.urls)),
    path('api/', include(router_catNoticias.urls)),
    path('api/', include("RestApiApp.api.router")),
]
