from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


# * ===== MODELO USUARIOS ===== * #
class Profile(AbstractUser):
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    username = models.CharField(max_length=16, unique=True)
    email = models.EmailField(unique=True)
    resetPasswordLink = models.CharField(max_length=500, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
