import {firstBlogsContent, secondBlogsContent} from './data/data.js'

const section1Wrapper = document.querySelector(".section-wrapper");
const section2Wrapper = document.querySelector(".section2-wrapper");

window.addEventListener("load", addElements);

function addElements() {
  firstBlogsContent.forEach((blog) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="blog-card">
                            <div class="img-box">
                                <img src="/public/images/overlay.png" alt="" />
                            </div>
                            <p class="cate-text">
                                ${blog.category}
                            </p>
                            <h3 class="title">
                                ${blog.title}
                            </h3>
                            <p class="date">${blog.publishDate}</p>
                        </div>`;
    section1Wrapper.append(newDiv);
  });

  secondBlogsContent.forEach((blog) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="blog2-card">
                            <div class="img2-box">
                                <img src="/public/images/overlay.png" alt="" />
                            </div>
                            <p class="cate2-text">
                                ${blog.category}
                            </p>
                            <h3 class="title2">
                                ${blog.title}
                            </h3>
                            <p class="date2">${blog.publishDate}</p>
                        </div>`;
    section2Wrapper.append(newDiv);
  });

}
