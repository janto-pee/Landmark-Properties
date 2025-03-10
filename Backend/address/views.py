from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from .models import Address
from .serializers import AddressSerializer
from .filters import AddressFilter
from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from pytz import timezone

@api_view(['GET'])
def getAllAddress(request):
    # address = Address.objects.all()
    # serializer = AddressSerializer(address, many=True)
    filterset = AddressFilter(request.GET, queryset=Address.objects.all().order_by('id'))

    count = filterset.qs.count()

    # pagination
    responsePerPage=3
    paginator = PageNumberPagination()
    paginator.page_size = responsePerPage
    queryset = paginator.paginate_queryset(filterset.qs, request)


    serializer = AddressSerializer(queryset, many=True)
    return Response({
        'count': count,
        'response per page': responsePerPage,
        'data': serializer.data
        })

@api_view(['GET'])
def getAddress(request, pk):
    address = get_object_or_404(Address, id=pk)
    serializer = AddressSerializer(address, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def newAddress(request):
    request.data['user'] = request.user
    data = request.data
    address = Address.objects.create(**data)
    serializer = AddressSerializer(address, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateAddress(request, pk):
    address = get_object_or_404(Address, id=pk)

    if address.user!= request.user:
        return Response({'error': 'you can not update this address'}, status=status.HTTP_403_FORBIDDEN)

    address.title = request.data["title"]
    address.street = request.data["street"]
    address.street2 = request.data["street2"]
    address.city = request.data["city"]
    address.state_province_code = request.data["state_province_code"]
    address.state_province_name = request.data["state_province_name"]
    address.postal_code = request.data["postal_code"]
    address.country_code = request.data["country_code"]
    address.location = request.data["location"]
    address.country = request.data["country"]

    address.save()
    serializer = AddressSerializer(address, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteAddress(request, pk):
    address = get_object_or_404(Address, id=pk)
    if address.user!= request.user:
        return Response({'error': 'you can not delete this address'}, status=status.HTTP_403_FORBIDDEN)

    address.delete()
    return Response({
        'message': 'Address successfully deleted'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopicsStats(request, topic):

    arg= {'title__icontains': topic}
    address = Address.objects.filter(**arg)

    if len(address) == 0:
        return Response({
        'message': 'No stats for {topic}'.format(topic=topic)
    }, status=status.HTTP_200_OK)

    stat = address.aggregate(
        total_address=Count('title'),
        total_country=Count('country')
    )
    
    return Response(stat)



# clients may be moved to properties
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def applyToHouse(request, pk):
    user = request.user
    address = get_object_or_404(Address, id=pk)

    if user.userprofile.profilePhoto == '':
        return Response({'error': 'please uplod your profile photo first'}, status=status.HTTP_400_BAD_REQUEST)
    if address.createdAt < timezone.now():
        return Response({'error': 'please uplod your profile photo first'}, status=status.HTTP_400_BAD_REQUEST)

