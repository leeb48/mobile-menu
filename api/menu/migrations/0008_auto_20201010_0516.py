# Generated by Django 3.1.1 on 2020-10-10 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0007_auto_20201008_1555'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rollitem',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
