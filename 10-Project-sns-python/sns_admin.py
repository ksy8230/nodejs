from django.contrib import admin
from .models import Sns
# Register your models here.


class SnsAdmin(admin.ModelAdmin):
    list_display = ('username', 'text')


admin.site.register(Sns, SnsAdmin)
