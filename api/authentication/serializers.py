from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[
        UniqueValidator(queryset=Account.objects.all())
    ])

    username = serializers.CharField(required=True, validators=[
        UniqueValidator(queryset=Account.objects.all())
    ])
    password = serializers.CharField(min_length=6, write_only=True)

    class Meta:
        model = Account
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
