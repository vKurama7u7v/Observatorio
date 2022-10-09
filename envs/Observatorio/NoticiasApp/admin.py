from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from NoticiasApp.models import Noticias

# Register your models here.


# * ===== ADMIN NOTICIAS ===== * #
class NoticiasResource(resources.ModelResource):
    class Meta:
        model = Noticias

class NoticiasAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ("id", "title", "status", "createdAt")
    resources_class = NoticiasResource

admin.site.register(Noticias, NoticiasAdmin)