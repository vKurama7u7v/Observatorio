from django.db import models

# Create your models here.


# * ===== MODELO REPORTES ===== *
class Reportes(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField("Título", max_length=100, null=False, blank=False)
    description = models.TextField("Descripción", max_length=500, null=False, blank=False)
    url = models.URLField("URL Documento", max_length=550, null=False, blank=False)
    thumbnail = models.URLField("Imagen", max_length=510, null=False, blank=False)
    status = models.BooleanField("Visible/Oculto", default=False)
    createdAt = models.DateTimeField("Fecha de Creación")

    class Meta:
        verbose_name = "reporte"
        verbose_name_plural = "reportes"
        ordering = ["-createdAt"]

    def __str__(self):
        return self.title
