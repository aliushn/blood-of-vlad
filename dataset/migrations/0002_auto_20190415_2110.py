# Generated by Django 2.1.7 on 2019-04-15 18:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dataset', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UpoadedImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='uploaded/')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'UpoadedImage',
                'verbose_name_plural': 'UpoadedImages',
            },
        ),
        migrations.RemoveField(
            model_name='uploadedimage',
            name='user',
        ),
        migrations.DeleteModel(
            name='UploadedImage',
        ),
    ]
