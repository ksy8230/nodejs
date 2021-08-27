from rest_framework import serializers
from .models import Sns


class SnsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sns
        fields = (
            'username',
            'text',
            'registered_dttm',
        )
        read_only_fields = ('registered_dttm',)
