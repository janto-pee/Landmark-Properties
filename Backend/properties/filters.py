from django_filters import rest_framework as filters
from .models import Properties

class PropertyFilter(filters.FilterSet):
    # longitude_area=filters.NumberFilter(field_name='location' or 0, lookup_expr='gte')
    keyword=filters.CharFilter(field_name='title', lookup_expr='icontains')
    class Meta:
        model = Properties
        fields = ('prop_type','data_source_name','price','year_built','address','beds','baths_full','baths', 'keyword')