from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import SignUpSerializer, UserSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAuthenticated
from .validator import validate_file_extension
from django.shortcuts import get_object_or_404
# from rest_framework_simplejwt.tokens import AccesToken

@api_view(['POST'])
def signup(request):
    data = request.data
    user = SignUpSerializer(data=data)
    if user.is_valid():
        if not User.objects.filter(username=data['email']).exists():
            user = User.objects.create(
            first_name = data['first_name'],
            last_name = data['last_name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
            )
            
            return Response({
                'message': 'user registered successfully'
            },status=status.HTTP_200_OK)
        else:
            return Response({ 'error': 'user already registered' },status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(user.errors)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def currentUser(request):
    # print(AccesToken)
    user = UserSerializer(request.user)
    return Response(user.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request):
    user = request.user
    data = request.data

    user.first_name = data['first_name'],
    user.last_name = data['last_name'],
    user.username = data['email'],
    user.email = data['email'],

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def uploadResume(request):
    user = request.data
    profilePhoto = request.FILES['profilePhoto']
    if profilePhoto == '':
        return Response({
            'error': 'please upload your profile photo'
        })
    
    isValidFile = validate_file_extension(profilePhoto.name)
    if not isValidFile:
         return Response({
            'error': 'unable to validte photo file'
        })
       
    serializer = UserSerializer(user, many=False)

    user.userprofile.profilePhoto = profilePhoto
    user.userprofile.save()
    return Response(serializer.data)
    
