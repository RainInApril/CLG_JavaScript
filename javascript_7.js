const cats = [
    {
        name: "Mimi",
        breed: "Ragdoll",
        age: 2,
        imageUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/435068776_391776650421045_1656326668787814597_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4GUuCzb2wYoQ7kNvgGm8UIP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHNxorssbgFYTwXTKaPMkX0KY0ICRG8vBf1K34Rg5tNYg&oe=66BF0812",
        description: "A playful and affectionate cat who loves cuddles."
    },
    {
        name: "Quinton",
        breed: "Tabby",
        age: 4,
        imageUrl: "https://previews.dropbox.com/p/thumb/ACWlGfHHRzIQ78b8xR-ORfXT-7Onu2YpMHgkgF0s2VAav0Da4CsaUlHiCrkDL-NKgTp7Zg4x-vEnnq7uj8d_loLrHR8B__NYbH8bOfwg-A41wE2tDgCZAWMSQF-Dx3SZ5afKXrUtvPAr3Azd3x3wyIJTC-NImgRIYdiw83ZnzYYUMoeA197yJV_37xBC-7Hh2Otaeig-oMGojQQwskeOKuk0m9fvA9Teok_uHRlPBISW5cNcLsg4E9K6b-H3UTcXs7kObgpLK53FziDW3gPvo2_xD7STchfB5wzFr2rhuTSkXoabn446yKqjMnhChaKIjYDdjC4XRWhC0Ch1IGgu4hej/p.jpeg?is_prewarmed=true",
        description: "A curious kitten full of energy and purrs."
    }
];

function displayCat(cat) {
    const catItem = document.createElement("li");
    catItem.innerHTML = `
      <h2>${cat.name}</h2>
      <img src="${cat.imageUrl}" alt="${cat.name}">
      <p>Breed: ${cat.breed}</p>
      <p>Age: ${cat.age}</p>
      <p>${cat.description}</p>
    `;
    document.getElementById("cat-list").appendChild(catItem);
}

for (const cat of cats) {
    displayCat(cat);
}