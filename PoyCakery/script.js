// ==========================
// DATA (TETAP)
// ==========================
const products = [
{ id:1, nama:"Strawberry Cake 🍓", harga:120000, diskon:150000, stok:5, gambar:"https://picsum.photos/400?cake1" },
{ id:2, nama:"Chocolate Cake 🍫", harga:140000, diskon:0, stok:3, gambar:"https://picsum.photos/400?cake2" },
{ id:3, nama:"Vanilla Cake 🍰", harga:100000, diskon:0, stok:0, gambar:"https://picsum.photos/400?cake3" },
{ id:4, nama:"Matcha Cake 🍵", harga:130000, diskon:160000, stok:7, gambar:"https://picsum.photos/400?cake4" }
];

// ==========================
// RENDER (DITAMBAH ANIMASI)
// ==========================
function renderProducts() {
const container = document.getElementById("product-container");
container.innerHTML = "";

products.forEach((p, index) => {

let harga = p.diskon > 0
? `<span class="text-muted text-decoration-line-through">Rp ${p.diskon.toLocaleString()}</span><br>
   <span class="text-danger fw-bold">Rp ${p.harga.toLocaleString()}</span>`
: `<span class="fw-bold">Rp ${p.harga.toLocaleString()}</span>`;

let btn = p.stok > 0
? `<button class="btn btn-cute w-100 bounce-btn" onclick="alert('Order: ${p.nama}')">Order 💖</button>`
: `<button class="btn btn-secondary w-100" disabled>Sold Out</button>`;

// ✨ tambah animasi fade + delay
container.innerHTML += `
<div class="col-12 col-sm-6 col-lg-4 fade-in" style="animation-delay:${index * 0.15}s">

<div class="card cake-card p-3 text-center">

<img src="${p.gambar}" class="img-fluid rounded">

<h5 class="mt-3">${p.nama}</h5>

<p>${harga}</p>

${btn}

</div>
</div>`;
});
}

// ==========================
// SAKURA (TETAP + SMOOTH)
// ==========================
function sakura() {
setInterval(()=>{
let el=document.createElement("div");
el.innerHTML="🌸";
el.className="falling";

el.style.left=Math.random()*window.innerWidth+"px";
el.style.animationDuration=(Math.random()*3+2)+"s";
el.style.fontSize=(Math.random()*10+14)+"px";
el.style.opacity=Math.random();

document.body.appendChild(el);
setTimeout(()=>el.remove(),5000);
},300);
}

// ==========================
// LOVE CLICK (DITAMBAH VARIASI)
// ==========================
function love() {
document.addEventListener("click",e=>{
let el=document.createElement("div");

// random love 💖💗💘
const loveList=["💖","💗","💘","💕"];
el.innerHTML=loveList[Math.floor(Math.random()*loveList.length)];

el.className="love";
el.style.left=e.clientX+"px";
el.style.top=e.clientY+"px";

document.body.appendChild(el);
setTimeout(()=>el.remove(),1000);
});
}

// ==========================
// EXTRA: BUTTON BOUNCE EFFECT
// ==========================
function buttonBounce() {
document.addEventListener("mouseover", e => {
if(e.target.classList.contains("bounce-btn")){
    e.target.style.transform = "scale(1.1)";
    setTimeout(()=> e.target.style.transform="scale(1)",150);
}
});
}

// ==========================
// EXTRA: PARALLAX FLOAT
// ==========================
function floatingEffect(){
window.addEventListener("scroll",()=>{
let scrollY = window.scrollY;
document.querySelectorAll(".floating").forEach(el=>{
    el.style.transform = `translateY(${scrollY * 0.1}px)`;
});
});
}

// ==========================
// INIT (TETAP + TAMBAHAN)
// ==========================
document.addEventListener("DOMContentLoaded",()=>{
renderProducts();
sakura();
love();

// tambahan (tidak merusak lama)
buttonBounce();
floatingEffect();
});