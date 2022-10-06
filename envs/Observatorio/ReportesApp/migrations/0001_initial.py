# Generated by Django 4.1.1 on 2022-09-25 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reportes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100, verbose_name='Título')),
                ('description', models.TextField(max_length=500, verbose_name='Descripción')),
                ('url', models.URLField(max_length=550, verbose_name='URL Documento')),
                ('thumbnail', models.URLField(max_length=510, verbose_name='Imagen')),
                ('status', models.BooleanField(default=False, verbose_name='Visible/Oculto')),
                ('createdAt', models.DateTimeField()),
            ],
            options={
                'verbose_name': 'reporte',
                'verbose_name_plural': 'reportes',
                'ordering': ['-createdAt'],
            },
        ),
    ]
