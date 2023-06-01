import React from 'react'
import './editcategory.css'
const EditCategory = () => {
  return (
    <>
         <div id="container">
        <div class="container__body">
            <div class="container__body__content">
                <div class="body__content__header">
                    <div class="content__header__title">
                        <h1>EditCategory</h1>
                    </div>
                </div>
                <div class="body__content__Category">
                    <div class="Category__infor" id="categoryEdit__inFor">
                        
                    </div>
                    <div class="Save__Change">
                        <div id="save__button" onclick="Save()">
                            Save
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default EditCategory
