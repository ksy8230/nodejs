from django.db import models

# Create your models here.


class Sns(models.Model):
    username = models.CharField(max_length=64, verbose_name='사용자명')
    text = models.CharField(max_length=150, verbose_name='본문내용')
    registered_dttm = models.DateTimeField(
        auto_now_add=True, verbose_name='등록시간')

    class Meta:
        db_table = 'pythonapi_sns'
