from pathlib import Path

from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver

from analyzer.services import computer_vision, pil_to_base64


class AnalyzeImage(models.Model):
    file = models.ImageField(upload_to='analyzer/')

    class Meta:
        """Meta definition for Image."""

        verbose_name = 'Image'
        verbose_name_plural = 'Images'

    def get_cover_base64(self):
        return pil_to_base64(Path(settings.MEDIA_ROOT) / self.file.name)

    def analyze_image(self, image_settings):
        return computer_vision(Path(settings.MEDIA_ROOT) / self.file.name,
                               image_settings)


@receiver(post_delete, sender=AnalyzeImage)
def submission_delete(sender, instance, **kwargs):
    instance.file.delete(False)
