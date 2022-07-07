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

            let card = document.createElement('div');

            let card_header = document.createElement('header');
            let user_content = document.createElement('div');
            let user_avatar = document.createElement('img');
            let user_name = document.createElement('p');

            let card_img_content = document.createElement('div');
            let card_img = document.createElement('img');

            let card_footer = document.createElement('footer');
            let pet_content = document.createElement('div');
            let pet_name = document.createElement('p');

            if (user.image === null) {
                user_avatar.src = "./image/default_user.png";
            } else {
                user_avatar.src = `${user.image}`;
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

