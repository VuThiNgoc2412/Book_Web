import React from 'react'
import './addcategory.css'
const AddCategory = () => {
  return (
    <>
         <div class="container__body__content">
                <div class="body__content__header">
                    <div class="content__header__title">
                        <h1>Add Category</h1>
                    </div>
                </div>
                <div class="body__content__Category">
                    <div class="Category__infor" id="categoryEdit__inFor">
                        <div class="Category__infor__CategoryName">
                            <label for="CategoryName">CategoryName</label>
                            <input type="text" id="CategoryName" />
                        </div>
                    </div>
                    <div class="Save__Change">
                        <div id="save__button" onclick="Save()">
                            Save
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default AddCategory
