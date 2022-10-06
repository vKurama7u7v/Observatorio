from django.urls import path
from rest_framework.routers import DefaultRouter
from RestApiApp.api.views import ReporteApiViewSet


router_reporte = DefaultRouter()
router_reporte.register(prefix='reportes', basename='reportes', viewset=ReporteApiViewSet)