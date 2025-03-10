from django_filters import rest_framework as filters
from .models import Address

class AddressFilter(filters.FilterSet):
    # longitude_area=filters.NumberFilter(field_name='location' or 0, lookup_expr='gte')
    keyword=filters.CharFilter(field_name='title', lookup_expr='icontains')
    class Meta:
        model = Address
        fields = ('country', 'location', 'title')