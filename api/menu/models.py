from django.db import models
from django.contrib.auth.models import User


class FoodCategory(models.Model):
    category = models.CharField(max_length=60, unique=True)

    def __str__(self):
        return self.category


class FoodItem(models.Model):
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    # TODO: implement image storage feature
    description = models.TextField()
    category = models.ManyToManyField("FoodCategory")

    def __str__(self):
        return self.name
