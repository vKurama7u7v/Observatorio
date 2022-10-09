from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from ReportesApp.models import Reportes

# Register your models here.


# * ===== ADMIN REPORTES ===== * #
class ReporteResource(resources.ModelResource):
    class Meta:
        model = Reportes

class ReporteAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ("id", "title", "status", "createdAt")
    resources_class = ReporteResource

admin.site.register(Reportes, ReporteAdmin)
