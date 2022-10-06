from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.filters import OrderingFilter, SearchFilter

# Permisos
from RestApiApp.api.permissions import IsAdminOrReadOnly

# Serializers
from RestApiApp.api.serializers import ReporteSerializer

# Models
from ReportesApp.models import Reportes


# * ===== VIEWS REPORTES ===== *
class ReporteApiViewSet(ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ReporteSerializer
    queryset = Reportes.objects.filter(status=True)
    filter_backends = [OrderingFilter, SearchFilter]
    ordering = ['-createdAt']
