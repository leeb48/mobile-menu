from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import AccountCreate, SecretView

urlpatterns = [
    path('user/create', AccountCreate.as_view(), name='user_create'),
    path('token/obtain', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('secret', SecretView.as_view(), name='secret')
]
