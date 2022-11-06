from django.db import models
from tinymce.models import HTMLField
# Create your models here.


# * ===== MODELO CATEGORIAS ===== *
class Categorias(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre Categorías", max_length=50, null=False, blank=False)
    createdAt = models.DateTimeField("Fecha de Creación", auto_now=False, auto_now_add=True)

    class Meta:
        verbose_name = "categoria"
        verbose_name_plural = "categorias"
        ordering = ["-createdAt"]

    def __str__(self):
        return self.name


# * ===== MODELO ENTRADAS ===== *
class Noticias(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField("Titulo", max_length=255, null=False, blank=False)
    description = models.TextField("Descripción", max_length=350, null=False, blank=False)
    category = models.ForeignKey(Categorias, on_delete=models.CASCADE)
    content = HTMLField()
    thumbnail = models.URLField("Thumbnail", max_length=510, null=False, blank=False)
    status = models.BooleanField("Activado/Desactivado", default=False)
    createdAt = models.DateTimeField("Fecha de Creación")

    class Meta:
        verbose_name = "noticia"
        verbose_name_plural = "noticias"
        ordering = ["-createdAt"]

    def __str__(self):
        return self.title