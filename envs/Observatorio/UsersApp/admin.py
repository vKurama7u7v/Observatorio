from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from UsersApp.models import Profile

# Register your models here.


# * ===== ADMIN USUARIO ===== * #
@admin.register(Profile)
class UserAdmin(BaseUserAdmin):
    fieldset = (
        (None, {'fields': ('username', 'password')}),
        ('Información Personal', {'fields': ('first_name', 'last_name', 'email')}),
        ('Otros', {'fields': ('resetPasswordLink',)}),
        ('Permisos', {'fields': ('is_active', 'is_staff',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Actividad', {'fields': ('last_login', 'date_joined')}),
    )