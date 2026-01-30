import { courses } from "./course-catalog.js";
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 },
];
/*
SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses
*/
const mergedCart=cart.map(cartItem=>{
    let course=courses.find(courseItem=>courseItem.id===cartItem.id);
    return {...course,...cartItem};
});
console.log(mergedCart);

const totalAmount=mergedCart.reduce((acc,ele)=>acc+(ele.price*ele.qty),0);
console.log(totalAmount);

const increaseQuantity=(cart,id)=>{
    return cart.map(cartItem=>{
        if(cartItem.id===id){   
            return {...cartItem,qty:cartItem.qty+1};
        }
        return cartItem;
    });
}

const newCart=increaseQuantity(cart,101);
console.log(newCart);

const removeCourse=(cart,id)=>{
    return cart.filter(cartItem=>cartItem.id!==id);
}
const updatedCart=removeCourse(cart,103);
console.log(updatedCart);

const allPaidCourses=mergedCart.every(cartItem=>cartItem.price>0);
console.log(allPaidCourses);