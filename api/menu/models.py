from django.db import models
from django.contrib.auth.models import User


class AppetizerItem(models.Model):

    APPETIZER_CATEGOREIS = (
        ('A', 'Appetizer'),
        ('N', 'Noodles'),
        ('S', 'Soups'),
        ('SA', 'Salads')
    )

    VEGETARIAN_OPTIONS = (
        ('V', 'Vegetarian'),
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=2, choices=APPETIZER_CATEGOREIS)
    vegetarian_options = models.CharField(
        max_length=2, choices=VEGETARIAN_OPTIONS, null=True, blank=True)

    def __str__(self):
        return self.name


class NigiriItem(models.Model):

    NIGIRI_CATEGORIES = (
        ('R', 'Raw'),
        ('C', 'Cooked'),
    )

    VEGETARIAN_OPTIONS = (
        ('V', 'Vegetarian'),
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=1, choices=NIGIRI_CATEGORIES)
    vegetarian_options = models.CharField(
        max_length=2, choices=VEGETARIAN_OPTIONS, null=True, blank=True)

    def __str__(self):
        return self.name


class RollItem(models.Model):

    ROLL_CATEGORIES = (
        ('F', 'Fresh'),
        ('D', 'Deep Fried'),
        ('B', 'Baked'),
        ('V', 'Vegetarian')
    )

    SPICY_OPTIONS = (
        ('S', 'Spicy'),
    )

    HAND_ROLL_OPTIONS = (
        ('H', 'Hand Rolls'),
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=1, choices=ROLL_CATEGORIES)
    spicy_options = models.CharField(
        max_length=1, choices=SPICY_OPTIONS, null=True, blank=True)
    hand_roll_options = models.CharField(
        max_length=1, choices=HAND_ROLL_OPTIONS, null=True, blank=True)

    def __str__(self):
        return self.name


class DesertItem(models.Model):

    DESERT_CATEGORIES = (
        ('I', 'Ice Cream'),
        ('M', 'Mochi Ice Cream')
    )

    DESERT_LIMITS = (
        ('O', 'One Per Person'),
        ('T', 'Two Per Person')
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=1, choices=DESERT_CATEGORIES)
    limits = models.CharField(max_length=1, choices=DESERT_LIMITS)

    def __str__(self):
        return self.name


class ExtraItem(models.Model):
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()

    def __str__(self):
        return self.name


class WineItem(models.Model):

    WINE_CATEGORIES = (
        ('W', 'White Wine'),
        ('R', 'Red Wine')
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=1, choices=WINE_CATEGORIES)

    def __str__(self):
        return self.name


class BeerItem(models.Model):

    BEER_CATEGORIES = (
        ('D', 'Draft'),
        ('DM', 'Domestic'),
        ('IM', 'Imported')
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=2, choices=BEER_CATEGORIES)

    def __str__(self):
        return self.name


class SoftDrinkItem(models.Model):

    SOFT_DRINK_CATEGORIES = (
        ('R', 'Refillable'),
        ('NR', 'Not Refillable')
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=2, choices=SOFT_DRINK_CATEGORIES)

    def __str__(self):
        return self.name


class SakeItem(models.Model):

    SAKE_CATEGORIES = (
        ('H', 'House Sake'),
        ('G', 'Gin-Jo'),
        ('J', 'Jun-Mai'),
        ('D', 'Dai-Gin-Jo'),
        ('N', 'Nigori'),
        ('S', 'Sparkling'),
        ('F', 'Flavored'),
        ('SJ', 'Soju'),
        ('SH', 'Shooters')
    )

    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='food_images',
                              default='food_images/default.jpg')
    description = models.TextField()
    category = models.CharField(max_length=2, choices=SAKE_CATEGORIES)

    def __str__(self):
        return self.name
