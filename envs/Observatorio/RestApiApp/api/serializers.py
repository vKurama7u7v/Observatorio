from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from ReportesApp.models import Reportes

# Los serializers controlan las peticiones
# (Qué datos se mandaran al Frontend)


# * ===== SERIALIZERS REPORTES ===== *
class ReporteSerializer(ModelSerializer):
    class Meta:
        model = Reportes
        fields = [
            'id',
            'title',
            'description',
            'url',
            'thumbnail',
            'status',
            'createdAt'
        ]