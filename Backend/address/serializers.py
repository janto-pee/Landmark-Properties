from rest_framework import serializers
from .models import Address, ClientsInterested

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

