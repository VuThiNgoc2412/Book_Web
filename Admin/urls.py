from django.urls import path
from .views import Allbook, Login,Signup, Xoa, Sua, Them, Comments

urlpatterns = [
    path('allbook',Allbook.as_view()),
    path('login', Login.as_view()),
    path('signup',Signup.as_view()),
    path('delete/<int:id>',Xoa.as_view()),
    path('update/<int:id>',Sua.as_view()),
    path('add',Them.as_view()),
    path('comment/<int:id>',Comments.as_view()),
]   