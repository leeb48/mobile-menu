# Generated by Django 3.1.1 on 2020-10-03 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fooditem',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to='food_images'),
        ),
    ]
