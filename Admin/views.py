from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from Entity.models.Book import Book
from Entity.models.User import User
from Entity.models.Role import Role
from Entity.models.Category import Category
from Entity.models.Comment import Comment
from Serializer.BookSerializer import BookSerializer
from Serializer.UserSerializer import UserByAdminSerializer
from datetime import datetime, timedelta, timezone
import jwt
from core.RoleDecorator import RoleRequest
import os
import numpy as np
import pandas as pd
from django.db.models import Sum
from django.db.models import Avg
from sklearn.metrics.pairwise import cosine_similarity
from core.settings import MEDIA_ROOT
from core.settings import BASE_DIR
from Entity.models.Bill import Bill
from Entity.models.Bought import Bought
from django.db.models import F
from Entity.models.Rate import Rate

class Allbook(APIView):
    def get(self, request):
        books = Book.objects.all()
        booklist = []
        for book in books:
            booklist.append({"id":book.id, "BookName":book.BookName, "ContentBook":book.ContentBook, "PageNumber":book.PageNumber, "Price":book.Price, "BookImage":book.BookImage, "Author":book.Author,"Releasedate":book.Releasedate, "Category": book.Category.CategoryName})
        return Response(booklist, status=200)
    
class Bookid(APIView):
    def get(self, request, id):
        book = Book.objects.get(pk=id)
        bookList = {"id":book.id, "BookName":book.BookName, "ContentBook":book.ContentBook, "PageNumber":book.PageNumber, "Price":book.Price, "BookImage":book.BookImage, "Author":book.Author, "Category": book.Category.CategoryName}
        return Response(bookList, status=200)
    
    

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
    
class Giaima(APIView):
    def get(self, request):
        return Response({"Roles":request.roles},status=200)
    
class Xoa(APIView):
    @method_decorator(RoleRequest(allowedRoles=['Admin']))
    def delete(self, request, id):
        book = Book.objects.get(pk=id)
        book.delete()

        return Response({"message":"da xoa"}, status=200)

class Sua(APIView):
    # @method_decorator(RoleRequest(allowedRoles=['Admin']))
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
    
#AdminBook
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
    
#Category Book
class ThemCategory(APIView):
    def post(self, request):
        CategoryName = request.data['categoryname']
        newCategory  = Category(CategoryName = CategoryName)
        newCategory.save()
        return Response({"message":"thanhcong"}, status=200)

class SuaCategory(APIView):
    def patch(self, request, id):
        category = Category.objects.get(pk=id)
        cate = request.data['category']
        category.CategoryName = cate
        category.save()
        return Response({"message":"thanhcong"}, status=200)

class XoaCategory(APIView):
    def delete(self, request, id):
        cate = Category.objects.get(pk=id)
        cate.delete()
        return Response({"message": "da xoa"}, status=200)
    
class AllCategory(APIView):
    def get(self, request):
        categories = Category.objects.all()
        categoryList = []
        for category in categories:
            categoryList.append({"id": category.pk, "categoryname": category.CategoryName})
        return Response(categoryList, status=200)

#UserAdmin
class AllUser(APIView):
    def get(self, request):
        users = User.objects.all()
        userList = []
        for user in users:
            userList.append({"id":user.pk, "email":user.Email, "username": user.UserName})
        return Response(userList, status=200)
    
#Bought
class Boughted(APIView):
    def post(self, request):
        print(request.data)
        user = User.objects.get(pk=request.userID)

        newBill = Bill(StatusBill='Đang mua', DeliveryTime = datetime.now(tz=timezone.utc) + timedelta(days=2))
        newBill.save()
        for i in request.data:
            newBought = Bought(User= user, Book=Book.objects.get(pk = i['id']), Quantity= i['qty'], PurchasedPrice= i['Price'], StatusBuy='InBill',Bill=newBill)
            newBought.save()
        return Response({"message":"thành công"},status=201)

class BoughtAC(APIView):
    def get(self,request):
        book = Bought.objects.filter(User_id = request.userID).annotate(
            username = F('User__UserName'),
            bookname = F('Book__BookName'),
            quantity = F('Quantity'),
            purchasedprice = F('PurchasedPrice'),
            statusbuy = F('StatusBuy'),
            billid = F('Bill__pk')
        ).values('username', 'bookname', 'quantity', 'purchasedprice', 'statusbuy', 'billid').order_by('-id')

        bookList = list(book)
        return Response(bookList, status=200)

class Userid(APIView):
    def get(self, request):
        user = User.objects.get(pk = request.userID)
        userlist = {"id":user.pk,"username":user.UserName, "email":user.Email}
        return Response(userlist, status=200)

class PostRatingAndComment(APIView):
    def post(self,request,id):
        user = User.objects.get(pk=request.userID)
        bought= Bought.objects.filter(User=user,StatusBuy='InBill')
        if len(bought)==0:
            return Response({"massage":"Bạn chưa mua sản phẩm"},status=400)
        rate = request.data['Rate']
        comment = request.data['Comment']
        book =Book.objects.get(pk=id)
        newRate = Rate(Book=book,User=user,Rate=rate)
        newComment = Comment(Comment=comment,User=user,Book=book)
        newRate.save()
        newComment.save()
        return Response({"message":"thành công"},status=201)
        
class Comments(APIView):
    def get(self, request, id):
        comments = Comment.objects.filter(Book__pk=id)
        commentList = []
        for com in comments:
            a=Rate.objects.filter(User = com.User, Book__pk=id)[0]
            commentList.append({"name":com.User.UserName, "comment":com.Comment, "rate":a.Rate})
        return Response(commentList, status=200)

class HuyDon(APIView):
    def delete(self, request, id):
        bill = Bill.objects.get(pk = id)
        bill.delete()
        return Response({"message":"daxoa"}, status=200)
class RecommendView(APIView):
    # @method_decorator(RoleRequest(allowedRoles=['Admin']))
    def get(self, request):
        
        history= Bought.objects.filter(User__id=request.userID)
        #nếu User mới thì recommend cho user chapter hot trong tuần
        if(len(history)==0) :
            booksHotCount = Bought.objects.values('Book__id').annotate(sum=Sum('Quantity')).order_by('-sum')
            try:
                BookHotList=[]
                for BookHotCount in booksHotCount:
                    BookHot = Book.objects.get(pk=BookHotCount['Book__id'])
                    BookHotList.append(BookHot)
                BookHotListSerializer =BookSerializer(BookHotList,many=True)
                return Response(BookHotListSerializer.data,status=200)
            except:
                
                pass
        #----------------------- Content Based System Recommend -----------------------------
        
        
        #khởi tạo lượt xem của người dùng với thể loại
        # 
        # categoryUserView=[]
        # for i in history:
        #     for j in i.Chapter.Film.filmcategory.all():
        #         categoryUserView.append(j.Category.id)
        # #khởi tạo lượt xem của người dùng với diễn viên
        # actorUserView=[]
        # for i in history:
        #     for j in i.Chapter.chapteractor.all():
        #         actorUserView.append(j.Actor.id)
        
        #láy toàn bộ Book mà User chưa mua
       
        bookAll = Book.objects.exclude(id__in=history.values_list('Book', flat=True))
      
        #lấy toàn bộ Thể loại
        categoryAll = Category.objects.all()

        #lấy toàn bộ tác giả
        authorAll = Book.objects.values('Author')
        print(authorAll)
        #khởi tạo ma trận với hàng là các book người dùng chưa xem còn cột là category,actor
        book_matrix = np.zeros((len(bookAll), len(categoryAll)+len(bookAll)))
        # khởi tạo phần category cho chapter_matrix
        for i in range(len(bookAll)):
            for j in range(len(categoryAll)):
                if categoryAll[j].pk==bookAll[i].Category.pk:
                    book_matrix[i,j]=1
        # khởi tạo phần actor cho chapter_matrix
        for i in range(len(bookAll)):
            for j in range(len(authorAll)):
                if authorAll[j] :
                    
                    book_matrix[i,j]=1
        print(book_matrix)
    
        # #khởi tạo ma trận với hàng là User đang đăng nhập(1 hàng) còn cột là category,actor
        # userLogin_matrix = []
        # # khởi tạo phần category cho userLogin_matrix
        # for i in categoryAll:
        #     if i.id in categoryUserView:
        #         userLogin_matrix.append(categoryUserView.count(i.id)/len(categoryUserView))
        #     else:
        #         userLogin_matrix.append(0)
        # # khởi tạo phần actor cho userLogin_matrix
        # for i in actorAll:
        #     if i.id in actorUserView:
        #         userLogin_matrix.append(actorUserView.count(i.id)/len(actorUserView))
        #     else:
        #         userLogin_matrix.append(0)
        # print(userLogin_matrix)
        # print()
        # similarity_scores = cosine_similarity( np.array(userLogin_matrix).reshape(1,-1),chapter_matrix)
        # sorted_indices = np.argsort(similarity_scores, axis=1)[0]
        
        # # Lấy ra các chapter được recommend
        # recommended_chapters = []
        # for i in sorted_indices:
        #     if len(recommended_chapters)>5:
        #         break
        #     if chapterAll[int(i)].ChapterStatus =='Đã ra':
        #         recommended_chapters.append(chapterAll[int(i)])
        #----------------------- Collaborative Filtering System Recommend -----------------------------

        
        # # Lấy thông tin người dùng đăng nhập
        # userLogin= User.objects.get(pk=request.userID) 
        
        # # Lấy toàn bộ người dùng 
        # users = User.objects.all()
        # # Tìm kiếm vị trí của người dùng
        # for i in range(len(users)):
        #     if users[i].pk==userLogin.pk:
        #         indexUserLogin=i
        #         break
            
        # # Lấy toàn bộ Chapter
        # chapters = Chapter.objects.all()
        
        # # Tạo ma trận full 0 với số hàng là số chapter và số cột là số User
        # ratings_matrix = np.zeros(( len(chapters),len(users)))
        
        # # thay đổi các giá trị 0 thành điểm số Rate trong history nếu người dùng đã đánh giá
        # for i, chapter in enumerate(chapters):
        #     for j, user in enumerate(users):
        #         # get all ratings for this user and chapter
        #         try:
        #             rating = History.objects.get(User=user, Chapter=chapter)
        #             ratings_matrix[i, j] = rating.Rate
        #         except:
        #             pass
        # print(ratings_matrix)
        # # chuẩn hóa ma trận để giảm các rating giống nhau thể hiện rõ hơn sự đánh giá trái triều:
        # ratings_matrixx = np.zeros(( len(chapters),len(users)))
        
        # for i in range(len(ratings_matrix)):
        #     fullZero=False
        #     try:
        #         avg=np.sum(ratings_matrix[i])/np.count_nonzero(ratings_matrix[i])   
        #     except:fullZero=True
        #     if not fullZero:
        #         for j in range(len(ratings_matrixx[i])):
        #             if(ratings_matrix[i,j]!=0):
        #                 ratings_matrixx[i,j]=  ratings_matrix[i,j]-avg
        # print(ratings_matrixx)
        # # Hoàn Thành ma trận rating của UserLogin với chapter
        # ratingChapterUser=[]
        # for i in range(len(ratings_matrix)):
        #     if(ratings_matrix[i][indexUserLogin]!=0):
        #         ratingChapterUser.append(ratings_matrix[i][indexUserLogin])
        #     else:
        #         ratingList=[]
        #         for j in range(len(ratings_matrixx)):
        #                 newChapter1=[]
        #                 newChapter2=[]
        #                 # Dùng vòng for và loại bỏ các giá trị =0 của cả 2 vecto để bỏ đi các rating =0
        #                 for l in range(len(ratings_matrixx)):
        #                     if ratings_matrixx[i][l] !=0 and ratings_matrixx[j][l]!=0:
        #                         newChapter1.append(ratings_matrixx[i][l])
        #                         newChapter2.append(ratings_matrixx[j][l])
        #                 # Tính độ tương đồng giữa 2 chapter bằng cosin 
        #                 cos_sim = np.dot(newChapter1, newChapter2) / (np.linalg.norm(newChapter1) * np.linalg.norm(newChapter2))
        #                 if   np.isnan(cos_sim):
        #                     cos_sim=0
        #                 ratingList.append(cos_sim)
        #         #lấy ra 2 chapter giông chapter đang tính rating nhất và tính trugn bình có trọng số
        #         sortRatingList=np.argsort(ratingList)
        #         ratingChapterUser.append((ratingList[sortRatingList[0]]*ratings_matrix[sortRatingList[0]][indexUserLogin]+ratingList[sortRatingList[1]]*ratings_matrix[sortRatingList[1]][indexUserLogin])/(ratingList[sortRatingList[0]]+ratingList[sortRatingList[1]]))
        # sorted_index = sorted(range(len(ratingChapterUser)), key=lambda i: ratingChapterUser[i], reverse=True)    
        # print(ratingChapterUser)
        
        # # Liệt kê film recomend
        # for i in sorted_index:
        #     checkExit=False
        #     checkViewed=False
        #     for j in recommended_chapters:
        #         if chapters[i].pk==j.pk:
        #             checkExit=True
        #             break
        #     for j in chapterAll:
        #         if chapters[i].pk==j.pk:
        #             checkViewed=True
        #     if checkExit or not checkViewed:continue     
        #     if len(recommended_chapters)>10:
        #         break
        #     if chapters[i].ChapterStatus =='Đã ra' :
                
                 
        #         recommended_chapters.append(chapters[i])
        # chapterRecommendSerializer= ChapterSerializer(recommended_chapters,many=True)
        return Response({"d":"d"},status=200)