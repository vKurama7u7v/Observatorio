from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

# Models
from ReportesApp.models import Reportes
from NoticiasApp.models import Noticias
from UsersApp.models import Profile

# Los serializers controlan las peticiones
# (Qué datos se mandaran al Cliente)


class UserRegisterSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'id',
            'first_name',
            'last_name',
            'username',
            'email',
            'password'
        ]

# * ===== SERIALIZER DATOS USUARIO ===== *
class UserSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'id',
            'first_name',
            'last_name',
            'username',
            'email',
            'is_active',
            'is_staff',
            'is_superuser',
            'groups',
            'user_permissions',
            'date_joined'
        ]


# * ===== SERIALIZER UPDATE DATOS USUARIO ===== *
class UserUpdateSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'first_name',
            'last_name',
            'password',
        ]


# * ===== SERIALIZER REPORTES ===== *
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


# * ===== SERIALIZER REPORTES ===== *
class NoticiasSerializer(ModelSerializer):
    class Meta:
        model = Noticias
        fields = [
            'id',
            'title',
            'description',
            'content',
            'thumbnail',
            'status',
            'createdAt',
        ]