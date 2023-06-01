from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from Entity.models.Book import Book
from Entity.models.User import User
from Entity.models.Role import Role
from Entity.models.Category import Category
from Entity.models.Comment import Comment
from Serializer.UserSerializer import UserByAdminSerializer
from datetime import datetime, timedelta, timezone
import jwt
from core.RoleDecorator import RoleRequest
import os
from core.settings import MEDIA_ROOT
from core.settings import BASE_DIR





class Allbook(APIView):
    def get(self, request):
        books = Book.objects.all()
        booklist = []
        for book in books:
            booklist.append({"id":book.id, "BookName":book.BookName, "ContentBook":book.ContentBook, "PageNumber":book.PageNumber, "Price":book.Price, "BookImage":book.BookImage, "Author":book.Author, "Category": book.Category.CategoryName})
        return Response(booklist, status=200)
    

class Login(APIView):
    def post(self, request):
        exp=datetime.now(tz=timezone.utc) + timedelta(minutes=50)
        if 'email' not in request.data:
            return Response({"massage":"nhap tk di"},status=400)
        Email = request.data['email']

        if 'password' not in request.data:
            return Response({"massage":"nhap mk di"},status=400)
        Password = request.data['password']

        try:
            user = User.objects.get(Email = Email, Password = Password)
            role = Role.objects.filter(roleuser__User=user)
            print(role)
            roleList = []
            for i in role:
                roleList.append(i.RoleName)
        except:
            return Response({"message":"sai tai khoan"}, status=400)
        encoded_jwt = jwt.encode({"userID": user.pk,"Roles":roleList,"exp":exp}, "ngoc", algorithm="HS256")
        return Response({"access__token":encoded_jwt},status=201)

class Signup(APIView):
    def post(self, request):
        userSerializer = UserByAdminSerializer(data=request.data)
        if userSerializer.is_valid():
            user=userSerializer.save()
            return Response(userSerializer.data,status=201)
        return Response(userSerializer.errors,status=400)
    
class Xoa(APIView):
    @method_decorator(RoleRequest(allowedRoles=['Admin']))
    def delete(self, request, id):
        book = Book.objects.get(pk=id)
        book.delete()

        return Response({"message":"da xoa"}, status=200)

class Sua(APIView):
    @method_decorator(RoleRequest(allowedRoles=['Admin']))
    def patch(self, request, id):
        book = Book.objects.get(pk=id)
        Bookname = request.data['bookname']
        Releasedate = request.data['releasedate']
        Contentbook = request.data['contentbook']
        Pagenumber = request.data['pagenumber']
        Price = request.data['price']
        # Bookimage = request.data['bookimage']
        Bookimage = request.FILES.get('bookimage')

        if Bookimage:
            image_path = os.path.join(MEDIA_ROOT,Bookimage.name)[:-4]+'(0).png'
            check = 0
            while os.path.isfile(image_path):
                check+=1
                image_path = os.path.join(MEDIA_ROOT, Bookimage.name)[:-4]+'('+str(check)+').png'
            
            with open(image_path, 'wb') as f:
                for chunk in Bookimage.chunks():
                    f.write(chunk)
            Bookimage = image_path[len(os.path.join(BASE_DIR)):]
        
        Author = request.data['author']
        category = request.data['category']

        book.BookName = Bookname
        book.Releasedate = Releasedate
        book.ContentBook = Contentbook
        book.PageNumber = Pagenumber
        book.Price = Price
        book.BookImage = Bookimage
        book.Author = Author
        book.Category = Category.objects.get(pk=category)
        book.save()
        
        return Response({"message":'thanhcong'},status=201)
    

class Them(APIView):
    def post(self, request):
        Bookname = request.data['bookname']
        Releasedate = request.data['releasedate']
        Contentbook = request.data['contentbook']
        Pagenumber = request.data['pagenumber']
        Price = request.data['price']
        Bookimage = request.data['bookimage']
        # Bookimage = request.FILES.get('bookimage')

        # if Bookimage:
        #     image_path = os.path.join(MEDIA_ROOT,Bookimage.name)[:-4]+'(0).png'
        #     check = 0
        #     while os.path.isfile(image_path):
        #         check+=1
        #         image_path = os.path.join(MEDIA_ROOT, Bookimage.name)[:-4]+'('+str(check)+').png'
            
        #     with open(image_path, 'wb') as f:
        #         for chunk in Bookimage.chunks():
        #             f.write(chunk)
        #     Bookimage = image_path[len(os.path.join(BASE_DIR)):]
        
        Author = request.data['author']
        category = request.data['category']

        newBook = Book(BookName= Bookname, Releasedate= Releasedate, ContentBook= Contentbook, PageNumber= Pagenumber, Price= Price, BookImage= Bookimage, Author= Author, Category = Category.objects.get(pk=category))
        newBook.save()
        return Response({"message":"thanhcong"},status=200)

class Comments(APIView):
    def get(self, request, id):
        comments = Comment.objects.filter(Book__pk=id)
        commentList = []
        for com in comments:
            commentList.append({"name":com.User.UserName, "comment":com.Comment})
        return Response(commentList, status=200)