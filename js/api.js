const ul = document.querySelector(".gallery_items");

const url = `https://petner.kr/api/v6/publics`;

fetch(url)
    .then(response => response.json())
    .then((data) => {
        let dataList = data;

        dataList.map(function (data) {
            const user = data.petner;
            const pet = data.companion;

            let li = document.createElement('li');
            li.className = "gallery_item";

            let card = document.createElement('div');
            card.className = "card";

            let card_header = document.createElement('header');
            card_header.className = "card_header";
            let user_content = document.createElement('div');
            user_content.className = "user_content";
            let user_avatar = document.createElement('img');
            user_avatar.className = "user_avatar";
            let user_name = document.createElement('span');
            user_name.className = "user_name";

            let card_img_content = document.createElement('div');
            card_img_content.className = "card_img_content";
            let card_img = document.createElement('img');
            card_img.className = "card_img";

            let card_footer = document.createElement('footer');
            card_footer.className = "card_footer";
            let pet_content = document.createElement('div');
            pet_content.className = "pet_content";
            let pet_name = document.createElement('p');
            pet_name.className = "pet_name";

            if (user.image) {
                user_avatar.src = `${user.image}`;
            } else {
                user_avatar.src = "./image/default_user.png";
            }
            user_name.innerText = `${user.name}`;

            card_img.src = `${data.image}`;

            pet_name.innerText = `${pet.name}`;

            user_content.appendChild(user_avatar);
            user_content.appendChild(user_name);

            pet_content.appendChild(pet_name);

            card_header.appendChild(user_content);
            card_img_content.appendChild(card_img);
            card_footer.appendChild(pet_content);

            card.appendChild(card_header);
            card.appendChild(card_img_content);
            card.appendChild(card_footer);

            li.appendChild(card);
            ul.appendChild(li);
        });
    });

