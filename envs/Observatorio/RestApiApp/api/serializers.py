from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

# Models
from ReportesApp.models import Reportes
from EnMediosApp.models import Noticias, Categorias
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
            'content',
            'url',
            'thumbnail',
            'status',
            'createdAt'
        ]


# * ===== SERIALIZER CATEGORIAS NOTICIAS ===== *
class CategoriasNoticiasSerializer(ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id', 'name', 'createdAt']


# * ===== SERIALIZER NOTICIAS ===== *
class NoticiasSerializer(ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Noticias
        fields = [
            'id',
            'title',
            'description',
            'category',
            'content',
            'thumbnail',
            'status',
            'createdAt',
        ]