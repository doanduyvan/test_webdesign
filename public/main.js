const screenLg = document.getElementById('lg');
var LG = null;
function showDisplayCurrent() {
    var displayStyle = window.getComputedStyle(screenLg).display;
    LG = displayStyle;
}
new showDisplayCurrent;
window.addEventListener('resize', () => {
    new showDisplayCurrent;
});
const nav_fixed_p = document.getElementById('nav-fixed-p');
const nav_fixed_c = document.getElementById('nav-fixed-c');
const nav_primary = document.getElementById('nav-primary');
const btn_mobile = document.getElementById('btn-menu-mobile');
const btn_close = document.getElementById('btn-close');

function handlesize() {
    if (LG == 'none') {
        nav_fixed_p.appendChild(nav_fixed_c);
        nav_fixed_c.classList.add('nav-mobile');
    } else {
        nav_primary.appendChild(nav_fixed_c);
        nav_fixed_c.classList.remove('nav-mobile');
    }
}
handlesize();
window.addEventListener('resize', () => {
    handlesize();
})

const nav_e = (e) => {
    if (btn_mobile.contains(e.target)) {
        nav_fixed_c.classList.add('right-0');
        nav_fixed_c.classList.remove('-right-80');
    } else {
        if (!nav_fixed_c.contains(e.target) || btn_close.contains(e.target)) {
            nav_fixed_c.classList.remove('right-0');
            nav_fixed_c.classList.add('-right-80');
        }
    }
}

document.addEventListener('click', nav_e);


const img_primary = document.getElementById('img-primary');
const arr_img = document.querySelectorAll('#img-list img');

arr_img.forEach((img) => {
    img.addEventListener('click', () => {
        const img_active = document.querySelector("#img-list > .active");
        prentImg = img.parentElement;
        img_active.classList.remove('active');
        img_active.classList.remove('bg-[#7BBCB0]');
        prentImg.classList.add('active');
        prentImg.classList.add('bg-[#7BBCB0]');
        img_primary.src = img.src;
    })
})


const sidebar = document.getElementById('sidebar');
const sidebar_mobile = document.getElementById('sidebar_mobile');
const sidebar_destop = document.getElementById('sidebar_destop');


function sidebarf() {
    if (LG == 'none') {
        sidebar_mobile.appendChild(sidebar);
    } else {
        sidebar_destop.appendChild(sidebar);
    }
}
sidebarf();
window.addEventListener('resize', () => {
    sidebarf();
});





function showitem(title, duration, transport, family, reviews, price, star, img) {
    const item = `<div class="item p-[10px] min-w-[25%] basis-[25%] transition-all">
    <div class="shadow-[0_0_10px_gray] p-[10px]">
    <div class="text-center"><img class="max-w-full inline max-h-[170px] object-cover" src="${img}" alt=""></div>
    <h3 class="font-volkhov text-[16px] mt-[10px]">${title}</h3>
    <div class="flex gap-2 items-center mt-[10px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 0C3.58182 0 0 3.58182 0 8C0 12.4182 3.58182 16 8 16C12.4182 16 16 12.4182 16 8C16 3.58182 12.4182 0 8 0ZM1.45455 8C1.45455 7.14044 1.62385 6.28929 1.95279 5.49516C2.28173 4.70103 2.76386 3.97947 3.37166 3.37166C3.97947 2.76386 4.70103 2.28173 5.49516 1.95279C6.28929 1.62385 7.14044 1.45455 8 1.45455C8.85956 1.45455 9.71071 1.62385 10.5048 1.95279C11.299 2.28173 12.0205 2.76386 12.6283 3.37166C13.2361 3.97947 13.7183 4.70103 14.0472 5.49516C14.3762 6.28929 14.5455 7.14044 14.5455 8C14.5455 9.73596 13.8558 11.4008 12.6283 12.6283C11.4008 13.8558 9.73596 14.5455 8 14.5455C6.26404 14.5455 4.59918 13.8558 3.37166 12.6283C2.14415 11.4008 1.45455 9.73596 1.45455 8ZM8.72727 4.36364C8.72727 4.17075 8.65065 3.98577 8.51426 3.84938C8.37787 3.71299 8.19289 3.63636 8 3.63636C7.80712 3.63636 7.62213 3.71299 7.48574 3.84938C7.34935 3.98577 7.27273 4.17075 7.27273 4.36364V8C7.27273 8.11291 7.29901 8.22426 7.34951 8.32525C7.4 8.42623 7.47331 8.51408 7.56364 8.58182L10.4727 10.7636C10.627 10.8794 10.821 10.9291 11.0119 10.9018C11.2029 10.8745 11.3752 10.7725 11.4909 10.6182C11.6066 10.4639 11.6563 10.2699 11.6291 10.079C11.6018 9.88802 11.4998 9.71573 11.3455 9.6L8.72727 7.63636V4.36364Z"
                fill="#495560" />
        </svg>
        <span class="text-[14px] text-[#495560]">${duration}</span>
    </div>
    <div class="flex gap-2 items-center mt-[10px]">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.0833 4.89945L14.8957 4.83225L13.3069 1.85339C13.0085 1.29358 12.5635 0.825415 12.0196 0.498958C11.4757 0.172501 10.8532 3.38205e-05 10.2188 2.91593e-09H6.2181C5.48342 -2.99791e-05 4.76737 0.231151 4.17142 0.660782C3.57546 1.09041 3.12983 1.6967 2.89767 2.39373L2.14036 4.66567C1.50589 4.9331 0.964395 5.38174 0.583675 5.95543C0.202956 6.52913 -7.51104e-05 7.20238 2.08441e-08 7.89091V9.44893C2.08441e-08 10.4428 0.592133 11.2967 1.44184 11.6817C1.55187 12.3121 1.87459 12.8859 2.35623 13.3073C2.83787 13.7287 3.44936 13.9724 4.08885 13.9978C4.72833 14.0232 5.3572 13.8287 5.87072 13.4467C6.38423 13.0648 6.75138 12.5184 6.91102 11.8987H12.6868C12.8464 12.5184 13.2136 13.0648 13.7271 13.4467C14.2406 13.8287 14.8695 14.0232 15.5089 13.9978C16.1484 13.9724 16.7599 13.7287 17.2416 13.3073C17.7232 12.8859 18.0459 12.3121 18.1559 11.6817C18.5856 11.4877 18.9502 11.1739 19.206 10.7778C19.4617 10.3818 19.5978 9.92037 19.5978 9.44893V8.97439C19.5977 8.25196 19.374 7.54727 18.9574 6.95702C18.5409 6.36678 17.9519 5.91992 17.2712 5.67776L15.1575 4.92604V4.89945H15.0833ZM6.2181 1.39984H7.69913V4.89945H3.5374L4.22472 2.83608C4.36408 2.41768 4.63163 2.05378 4.98942 1.79598C5.34722 1.53819 5.7771 1.39959 6.2181 1.39984ZM9.09897 1.39984H10.2188C10.5995 1.39971 10.973 1.50306 11.2995 1.69883C11.626 1.89461 11.8931 2.17545 12.0722 2.51132L13.3461 4.89945H9.09897V1.39984ZM14.8425 6.29929L16.8023 6.99641C17.2106 7.14175 17.564 7.40989 17.8139 7.76403C18.0637 8.11817 18.1979 8.54096 18.1979 8.97439V9.44893C18.1979 9.6939 18.114 9.91928 17.974 10.0985C17.7447 9.56026 17.3525 9.10741 16.8527 8.80351C16.3528 8.49961 15.7703 8.35994 15.1869 8.40411C14.6036 8.44829 14.0487 8.67408 13.6003 9.04978C13.1519 9.42549 12.8324 9.93222 12.6868 10.4988H6.91102C6.76538 9.93222 6.44591 9.42549 5.99749 9.04978C5.54906 8.67408 4.99421 8.44829 4.41087 8.40411C3.82753 8.35994 3.24501 8.49961 2.74513 8.80351C2.24524 9.10741 1.85311 9.56026 1.62382 10.0985C1.47813 9.91336 1.39921 9.68449 1.39984 9.44893V7.89091C1.39984 7.26098 1.67981 6.68704 2.12776 6.29929H14.8425ZM2.79968 11.1987C2.79968 10.8275 2.94717 10.4714 3.20969 10.2089C3.47221 9.94637 3.82826 9.79889 4.19952 9.79889C4.57079 9.79889 4.92684 9.94637 5.18936 10.2089C5.45188 10.4714 5.59937 10.8275 5.59937 11.1987C5.59937 11.57 5.45188 11.926 5.18936 12.1886C4.92684 12.4511 4.57079 12.5986 4.19952 12.5986C3.82826 12.5986 3.47221 12.4511 3.20969 12.1886C2.94717 11.926 2.79968 11.57 2.79968 11.1987ZM15.3983 9.79889C15.7695 9.79889 16.1256 9.94637 16.3881 10.2089C16.6506 10.4714 16.7981 10.8275 16.7981 11.1987C16.7981 11.57 16.6506 11.926 16.3881 12.1886C16.1256 12.4511 15.7695 12.5986 15.3983 12.5986C15.027 12.5986 14.6709 12.4511 14.4084 12.1886C14.1459 11.926 13.9984 11.57 13.9984 11.1987C13.9984 10.8275 14.1459 10.4714 14.4084 10.2089C14.6709 9.94637 15.027 9.79889 15.3983 9.79889Z"
                fill="#495560" />
        </svg>
        <span class="text-[14px] text-[#495560]">${transport}</span>
    </div>
    <div class="flex gap-2 items-center mt-[10px]">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.5979 7.98875C14.7868 8.8025 15.6198 9.905 15.6198 11.375V14H19.0909V11.375C19.0909 9.4675 15.993 8.33875 13.5979 7.98875ZM12.1488 7C14.0665 7 15.6198 5.43375 15.6198 3.5C15.6198 1.56625 14.0665 0 12.1488 0C11.7409 0 11.3591 0.0874998 10.9946 0.21C11.7414 1.14119 12.1487 2.30248 12.1487 3.5C12.1487 4.69752 11.7414 5.85881 10.9946 6.79C11.3591 6.9125 11.7409 7 12.1488 7ZM6.94215 7C8.85992 7 10.4132 5.43375 10.4132 3.5C10.4132 1.56625 8.85992 0 6.94215 0C5.02438 0 3.47107 1.56625 3.47107 3.5C3.47107 5.43375 5.02438 7 6.94215 7ZM6.94215 1.75C7.8967 1.75 8.67769 2.5375 8.67769 3.5C8.67769 4.4625 7.8967 5.25 6.94215 5.25C5.9876 5.25 5.20661 4.4625 5.20661 3.5C5.20661 2.5375 5.9876 1.75 6.94215 1.75ZM6.94215 7.875C4.62521 7.875 0 9.0475 0 11.375V14H13.8843V11.375C13.8843 9.0475 9.25909 7.875 6.94215 7.875ZM12.1488 12.25H1.73554V11.3837C1.90909 10.7537 4.59917 9.625 6.94215 9.625C9.28512 9.625 11.9752 10.7537 12.1488 11.375V12.25Z"
                fill="#495560" />
        </svg>
        <span class="text-[14px] text-[#495560]">${family}</span>
    </div>
    <div class="flex justify-between mt-[15px] border-t border-gray-300 pt-[10px]">
        <div>
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="${star >= 1 ? "#FFA432" : "#CFD9DE"}" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="none" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="${star >= 2 ? "#FFA432" : "#CFD9DE"}" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="none" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="${star >= 3 ? "#FFA432" : "#CFD9DE"}" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="none" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="${star >= 4 ? "#FFA432" : "#CFD9DE"}" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="none" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="${star >= 5 ? "#FFA432" : "#CFD9DE"}" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="none" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
            </div>
            <div class="text-[12px] text-cx1">${reviews} reviews</div>
        </div>
        <div>
            <div class="font-volkhov font-bold text-[20px] text-[#7BBCB0]">$<span>${price}.00</span></div>
            <div class="text-cx1 text-[12px]">per person</div>
        </div>
    </div>
    </div>
    </div>`;

    return item;
}



const products = {
    1: {
        img: './img/h1.png',
        title: 'Alaska: Westminster to Greenwich River Thames',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 1
    },
    2: {
        img: './img/h2.png',
        title: 'Alaska: Vintage Double Decker Bus Tour & Thames ',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 5
    },
    3: {
        img: './img/h3.png',
        title: 'Alaska: Magic of London Tour with Afternoon Tea at ',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 3
    },
    4: {
        img: './img/h4.png',
        title: 'Alaska: Magic of London Tour with Afternoon Tea at ',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 4
    },
    5: {
        img: './img/h5.png',
        title: 'Alaska: Westminster to Greenwich River Thames',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 4
    },
    6: {
        img: './img/h6.png',
        title: 'Alaska: Westminster to Greenwich River Thames',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 4
    },
    7: {
        img: './img/h7.png',
        title: 'Alaska: Westminster to Greenwich River Thames',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 4
    },
    8: {
        img: './img/h8.png',
        title: 'Alaska: Westminster to Greenwich River Thames',
        duration: 'Duration 2 hours',
        transport: 'Transport Facility',
        family: 'Family Plan',
        reviews: 584,
        price: 35.00,
        star: 4
    },
}


const slides = document.getElementById('slides1');
slides.innerHTML = '';
// for (let i = 0; i < 6; i++) {
//     slides.innerHTML += item;
// }




for (const key in products) {
    var one = products[key];
    var title = one.title;
    var duration = one.duration;
    var transport = one.transport;
    var family = one.family;
    var reviews = one.reviews;
    var price = one.price;
    var star = one.star;
    var img = one.img;
    var item = showitem(title, duration, transport, family, reviews, price, star, img);
    slides.innerHTML += item;
}

var slide = Array.from(slides.children);


slide.forEach((item) => { 
    item.addEventListener('click', () => {
        item.remove();
        console.log('remove ok');
    })
})


const next = document.getElementById('next1');
next.addEventListener('click', () => {
     const w = slide[0].getBoundingClientRect().width;
    slides.scrollLeft += w;
});  
const prev = document.getElementById('prev1');
prev.addEventListener('click', () => {
     const w = slide[0].getBoundingClientRect().width;
    slides.scrollLeft -= w;
});