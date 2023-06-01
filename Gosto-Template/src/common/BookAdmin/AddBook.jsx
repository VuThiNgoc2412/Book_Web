import React from 'react'
import './addbook.css'

const AddBook = () => {
  return (
    <>
           <div class="container__body">
            <div class="container__body__content">
                <div class="body__content__header">
                    <div class="content__header__title">
                        <h1>Book</h1>
                    </div>
                </div>
                <div class="body__content__Film">
                    <div class="Film__infor">
                        <div class="Film__infor__content">
                            <div class="Film__input__Text">
                                <div className='addbook__flex'>
                                <div class="content__Film__input">
                                    <label for="FilmName">Tên sách</label>
                                    <input type="text"  id="FilmName" />
                                </div>
                                <div class="content__Film__input">
                                    <label for="FilmName">Tác giả</label>
                                    <input type="text"  id="FilmName" />
                                </div>
                                </div>
                                <div class="content__Film__input">
                                    <label for="Description">Mô tả</label>
                                    <textarea name="" id="Description" ></textarea>
                                </div>
                                <div className='addbook__flex'>
                                <div class="content__Film__input">
                                    <label for="FilmName">Ngày phát hành</label>
                                    <input type="text"  id="FilmName" />
                                </div>
                                <div class="content__Film__input">
                                    <label for="FilmName">Số trang</label>
                                    <input type="text"  id="FilmName" />
                                </div>
                                </div>
                                {/* <div class="content__Film__input">
                                    <label for="Type">Type</label>
                                    <select id="Type">
                                        <option value="1" >Phim Bộ</option>
                                        <option value="0" selected>Phim lẻ</option>
                                        
                                    </select>
                                </div> */}
                                <div class="content__Film__input">
                                    <label for="Type">Category</label>
                                    <select id="Category">
                                        
                                      
                                    </select>
                                </div>
                                {/* <div class="content__Film__input">
                                    <div class="CategoryList" id="CategoryList">
                                        
                                    </div>
                                </div> */}
                              

                            </div>
                            <div class="Film__input__file">
                                <div class="input__file">
                                    <label for="">Image</label>
                                    <div class="Change__inputFile">
                                        <img  alt="" />
                                        <input type="file"  class="input-file" accept="image/*" id="Image"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="Chapter__infor">
                            <div class="content__Chapter__input">
                                <label for="ChapterName">Chapter Name</label>
                                <input type="text"  id="ChapterName"/>
                            </div>
                          
                            <div class="content__Chapter__input">
                                <label for="ChapterDescription">ChapterDescription</label>
                                <textarea name="" id="ChapterDescription" ></textarea>
                            </div>
                        </div>
                       <div class="Film__Chapter">
                            
                       </div>
                       
                    </div>
                    <div class="Save__Change">
                        <div id="save__button" onclick="saveproduct()">
                            Save
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    </>
  )
}

export default AddBook
