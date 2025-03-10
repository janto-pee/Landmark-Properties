from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from .models import Properties
from .serializers import PropertiesSerializer
from .filters import PropertyFilter
from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from pytz import timezone

@api_view(['GET'])
def getAllProperty(request):
    filterset = PropertyFilter(request.GET, queryset=Properties.objects.all().order_by('id'))

    count = filterset.qs.count()

    # pagination
    responsePerPage=10
    paginator = PageNumberPagination()
    paginator.page_size = responsePerPage
    queryset = paginator.paginate_queryset(filterset.qs, request)


    serializer = PropertiesSerializer(queryset, many=True)
    return Response({
        'count': count,
        'response per page': responsePerPage,
        'data': serializer.data
        })

@api_view(['GET'])
def getProperty(request, pk):
    property = get_object_or_404(Properties, id=pk)
    serializer = PropertiesSerializer(property, many=False)
    return Response(serializer.data)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def newProperty(request):
    # request.data['user'] = request.user
    data = request.data
    property = Properties.objects.create(**data)
    serializer = PropertiesSerializer(property, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateProperty(request, pk):
    property = get_object_or_404(Properties, id=pk)

    # if property.user!= request.user:
    #     return Response({'error': 'you can not update this property'}, status=status.HTTP_403_FORBIDDEN)

    property.prop_type = request.data['prop_type']
    property.move_in_date = request.data['move_in_date']
    property.data_source_name = request.data['data_source_name']
    property.price = request.data['price']
    property.year_built = request.data['year_built']
    property.permalink = request.data['permalink']
    property.address = request.data['address']
    property.beds = request.data['beds']
    property.baths_full = request.data['baths_full']
    property.baths = request.data['baths']
    property.sqft = request.data['sqft']
    property.lot_sqft  = request.data['lot_sqft']
    property.hoa_fee = request.data['hoa_fee']
    property.hoa_historic_fee  = request.data['hoa_historic_fee']
    property.neighborhood = request.data['neighborhood']
    property.raw_prop_type = request.data['raw_prop_type']
    property.photo_count = request.data['photo_count']
    property.status = request.data['status']
    property.list_date = request.data['list_date']
    property.last_update = request.data['last_update']
    property.photo = request.data['photo']

    property.save()
    serializer = PropertiesSerializer(property, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def deleteProperty(request, pk):
    property = get_object_or_404(Properties, id=pk)
    # if property.user!= request.user:
    #     return Response({'error': 'you can not delete this property'}, status=status.HTTP_403_FORBIDDEN)

    property.delete()
    return Response({
        'message': 'Property successfully deleted'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopicsStats(request, topic):

    arg= {'title__icontains': topic}
    property = Properties.objects.filter(**arg)

    if len(property) == 0:
        return Response({
        'message': 'No stats for {topic}'.format(topic=topic)
    }, status=status.HTTP_200_OK)

    stat = property.aggregate(
        total_address=Count('data_source_name'),
        total_country=Count('prop_type')
    )
    return Response(stat)
