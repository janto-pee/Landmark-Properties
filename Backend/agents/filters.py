from django_filters import rest_framework as filters
from .models import Agent

class AgentFilter(filters.FilterSet):
    # longitude_area=filters.NumberFilter(field_name='location' or 0, lookup_expr='gte')
    keyword=filters.CharFilter(field_name='title', lookup_expr='icontains')
    class Meta:
        model = Agent
        fields = ('office_name', 'address' )