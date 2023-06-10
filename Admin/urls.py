from django.urls import path
from .views import Allbook, Login,Signup, Xoa, Sua, Them, Comments, Bookid, Giaima, ThemCategory, SuaCategory, XoaCategory, AllUser, AllCategory, Boughted, BoughtAC, Userid, PostRatingAndComment, Comments, HuyDon
from .views import RecommendView

urlpatterns = [
    path('allbook',Allbook.as_view()),
    path('book/<int:id>',Bookid.as_view()),
    path('login', Login.as_view()),
    path('signup',Signup.as_view()),
    path('delete/<int:id>',Xoa.as_view()),
    path('update/<int:id>',Sua.as_view()),
    path('add',Them.as_view()),
    path('comment/<int:id>',Comments.as_view()),
    path('giaima',Giaima.as_view()),
    path('addcategory',ThemCategory.as_view()),
    path('editcategory/<int:id>',SuaCategory.as_view()),
    path('deletecategory/<int:id>',XoaCategory.as_view()),
    path('alluser',AllUser.as_view()),
    path('allcategory',AllCategory.as_view()),
    path('boughtbook',Boughted.as_view()),
    path('boughted',BoughtAC.as_view()),
    path('account',Userid.as_view()),
    path('comment/<int:id>',Comments.as_view()),
    path('PostRatingAndComment/<int:id>',PostRatingAndComment.as_view()),
    path('huydon/<int:id>',HuyDon.as_view()),
    path('Recommend',RecommendView.as_view())
    
]   