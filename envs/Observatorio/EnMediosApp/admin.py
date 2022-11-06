from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from EnMediosApp.models import Noticias, Categorias

# Register your models here.


# * ===== ADMIN CATEGORIAS ===== * #
class CategoriasResource(resources.ModelResource):
    class Meta:
        model = Categorias

class CategoriasAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ["name"]
    list_display = ("id", "name", "createdAt")
    resources_class = CategoriasResource

admin.site.register(Categorias, CategoriasAdmin)


# * ===== ADMIN NOTICIAS ===== * #
class NoticiasResource(resources.ModelResource):
    class Meta:
        model = Noticias

class NoticiasAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ("id", "title", "category", "status", "createdAt")
    resources_class = NoticiasResource

admin.site.register(Noticias, NoticiasAdmin)