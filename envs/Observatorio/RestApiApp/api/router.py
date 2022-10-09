from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Views
from RestApiApp.api.views import UserMeView, UserApiViewSet, UserRegisterView, ReporteApiViewSet, NoticiasApiViewSet


# * ===== ROUTER REPORTES ===== *
router_reporte = DefaultRouter()
router_reporte.register(prefix='reportes', basename='reportes', viewset=ReporteApiViewSet)


# * ===== ROUTER NOTICIAS ===== *
router_noticias = DefaultRouter()
router_noticias.register(prefix='noticias', basename='noticias', viewset=NoticiasApiViewSet)


# * ===== ROUTER USUARIOS ===== *
router_user = DefaultRouter()
router_user.register(prefix="users", basename='users', viewset=UserApiViewSet)


# * ===== RUTAS AUTH ===== *
urlpatterns = [
    # path('auth/register', UserRegisterView.as_view()),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/profile', UserMeView.as_view()),
]