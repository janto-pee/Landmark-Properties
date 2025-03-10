from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from .models import Agent
from .serializers import AgentSerializer
from .filters import AgentFilter
from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from pytz import timezone

@api_view(['GET'])
def getAllAgent(request):
    filterset = AgentFilter(request.GET, queryset=Agent.objects.all().order_by('id'))

    count = filterset.qs.count()

    # pagination
    responsePerPage=3
    paginator = PageNumberPagination()
    paginator.page_size = responsePerPage
    queryset = paginator.paginate_queryset(filterset.qs, request)


    serializer = AgentSerializer(queryset, many=True)
    return Response({
        'count': count,
        'response per page': responsePerPage,
        'data': serializer.data
        })

@api_view(['GET'])
def getAgent(request, pk):
    agent = get_object_or_404(Agent, id=pk)
    serializer = AgentSerializer(agent, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def newAgent(request):
    request.data['user'] = request.user
    data = request.data
    agent = Agent.objects.create(**data)
    serializer = AgentSerializer(agent, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateAgent(request, pk):
    agent = get_object_or_404(Agent, id=pk)

    # if address.user!= request.user:
    #     return Response({'error': 'you can not update this address'}, status=status.HTTP_403_FORBIDDEN)
    
    agent.title= request.data['title']
    agent.profile_name= request.data['profile_name']
    agent.advertiser_id= request.data['advertiser_id']
    agent.href= request.data['href']
    agent.photo= request.data['photo']
    agent.office_name= request.data['office_name']
    agent.email= request.data['email']
    agent.slogan= request.data['slogan']
    agent.address= request.data['address']
    agent.abbrevation= request.data['abbrevation']
    agent.phone= request.data['phone']

    agent.save()
    serializer = AgentSerializer(agent, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteAgent(request, pk):
    agent = get_object_or_404(Agent, id=pk)
    if agent.user!= request.user:
        return Response({'error': 'you can not delete this agent'}, status=status.HTTP_403_FORBIDDEN)

    agent.delete()
    return Response({
        'message': 'Address successfully deleted'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopicsStats(request, topic):

    arg= {'title__icontains': topic}
    agent = Agent.objects.filter(**arg)

    if len(agent) == 0:
        return Response({
        'message': 'No stats for {topic}'.format(topic=topic)
    }, status=status.HTTP_200_OK)

    stat = agent.aggregate(
        total_address=Count('address'),
        total_country=Count('office_name')
    )
    
    return Response(stat)
