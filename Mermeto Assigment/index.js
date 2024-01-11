
const API = "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093"
async function getapi(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    show(data);
}


function show(data) {
    const section = document.getElementById("main-section");
    for (let r of data.data) {
        console.log(r);
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <div class="product-image">
                <button>${r.product_badge.toUpperCase()}</button>
                <img src="https://rukminim2.flixcart.com/image/850/1000/jjd6aa80/cap/z/q/b/free-baseball-caps-house-of-quirk-original-imaf6ydhmnthqzjr.jpeg?q=90"
                    alt="Caps" class="cap" />
            </div>
            <div class="content">
                <h2>${r.product_title.toUpperCase()}</h2>
                <p>${r.product_variants[0].v1.toUpperCase()}</p>
                <p>${r.product_variants[1].v2.toUpperCase()}</p>
                <p>${r.product_variants[2].v3.toUpperCase()}</p>
            </div>
        `;
        section.appendChild(itemDiv);
    }
}


getapi(API);

