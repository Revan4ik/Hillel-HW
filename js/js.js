var user = [  {    
    name: 'Panda Vasya',    
    url: 'https://cutt.ly/Hn90ez7',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  },
  {    
    name: 'Panda Petya',
    url: 'https://focus.ua/static/storage/thumbs/920x465/4/2b/715c02e7-40e6d37fae0b3e344aa149e87ff6b2b4.jpg?v=3355_1',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'  },
  {    
    name: 'Panda Fedya',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyh_SM4yEoWd5VP1aumKkyFrH2FcQBmj9LQ&usqp=CAU',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'  }];
user.forEach(function (item) {
    var bodytag = document.querySelector('body');
    var nameofpand = document.createElement('h1');
    var pictureofpand = document.createElement('img');
    var descriptionofpand = document.createElement('p');


    nameofpand.innerHTML = item.name;
    bodytag.append(nameofpand);

    pictureofpand.setAttribute('src', item.url);
    nameofpand.after(pictureofpand);
    pictureofpand.style.cssText = "width: 800px; height: 600px;"

    descriptionofpand.innerHTML = item.description;
    pictureofpand.after(descriptionofpand)
    descriptionofpand.style.cssText = "max-width: 800px"
    

}
)