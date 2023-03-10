from django.shortcuts import render

# Create `your views here.
from rest_framework import generics, permissions,viewsets
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework.auth import get_user_model
from .serializers import UserSerializer, RegisterSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes=(IsAuthenticated,)
    serializer_class=userserializers
    queryset = get_user_model().objects.all()

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })
