from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.filters import OrderingFilter, SearchFilter
from django.contrib.auth.hashers import make_password

# Permisos
from RestApiApp.api.permissions import IsAdminOrReadOnly

# Serializers
from RestApiApp.api.serializers import UserSerializer, UserUpdateSerializer, UserRegisterSerializer, ReporteSerializer, NoticiasSerializer, CategoriasNoticiasSerializer

# Models
from ReportesApp.models import Reportes
from EnMediosApp.models import Noticias, Categorias as CategoriasNoticias
from UsersApp.models import Profile


# * ===== VIEWS USUARIOS ===== *
class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserMeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        if('password' in request.data):
            password = request.data['password']

            if len(password) >= 8:
                request.data['password'] = make_password(password)

            else:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={
                    "detail": "La Contraseña debe tener un minímo de 8 Carácteres"
                })

        serializer = UserUpdateSerializer(request.user, data=request.data, partial=True)

        if(serializer.is_valid(raise_exception=True)):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Obtener Datos de Usuario
class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = Profile.objects.all()
    http_method_names = ['get']
    filter_backends = [OrderingFilter, SearchFilter]
    # ordering = ['-date_joined']
    search_fields = ['username']


# * ===== VIEWS REPORTES ===== *
class ReporteApiViewSet(ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ReporteSerializer
    queryset = Reportes.objects.filter(status = True)
    filter_backends = [OrderingFilter, SearchFilter]
    ordering = ['-createdAt']


# * ===== VIEWS CATEGORIAS NOTICIAS ===== *
class CategoriasNoticiasApiViewSet(ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = CategoriasNoticiasSerializer
    queryset = CategoriasNoticias.objects.all()
    filter_backends = [OrderingFilter, SearchFilter]
    ordering = ['-createdAt']


# * ===== VIEWS NOTICIAS ===== *
class NoticiasApiViewSet(ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = NoticiasSerializer
    queryset = Noticias.objects.filter(status = True)
    filter_backends = [OrderingFilter, SearchFilter]
    ordering = ['-createdAt']