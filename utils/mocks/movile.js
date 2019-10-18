const moviesMock =[
  {
    id: '092d2482-daaf-4b9e-a814-aef0650022e0',
    titule: 'Sparkle',
    year: 1984,
    cover: 'http://dummyimage.com/182x196.jpg/cc0000/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1913,
    contenRating: 'R',
    source: 'https://wikia.com/lacus/at/velit/vivamus/vel.aspx',
    tag: ['Drama', 'Comedy|Crime|Drama']
  },
  {
    id: '0e0c804b-7a70-46bf-bf73-8e4c1df2e379',
    titule: 'Assignment, The',
    year: 1992,
    cover: 'http://dummyimage.com/172x226.bmp/dddddd/000000',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1947,
    contenRating: 'G',
    source: 'http://chron.com/cubilia/curae/mauris/viverra/diam.png',
    tag: [
      'Comedy|Drama',
      'Crime|Horror|Mystery|Sci-Fi',
      'Comedy',
      'Horror|Sci-Fi'
    ]
  },
  {
    id: '420af14d-0d5f-4b58-ad70-4f52a8d4c45b',
    titule: 'Monster, The',
    year: 2012,
    cover: 'http://dummyimage.com/129x109.bmp/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1956,
    contenRating: 'R',
    source: 'http://dmoz.org/nunc.html',
    tag: ['Children|Comedy', 'Horror|Mystery|Thriller']
  },
  {
    id: '881b1372-ef26-408a-b133-e043e46a343d',
    titule: 'Inadequate People (Neadekvatnye lyudi)',
    year: 1967,
    cover: 'http://dummyimage.com/132x145.png/5fa2dd/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 1996,
    contenRating: 'R',
    source: 'http://surveymonkey.com/donec.jsp',
    tag: ['Comedy|Drama|Horror', 'Mystery|Thriller']
  },
  {
    id: 'f4b7633b-d2f9-41f8-a6d3-23873658d843',
    titule: 'Great Debaters, The',
    year: 1996,
    cover: 'http://dummyimage.com/183x242.bmp/dddddd/000000',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 1972,
    contenRating: 'PG-13',
    source: 'https://imdb.com/orci/vehicula/condimentum.jsp',
    tag: ['Comedy|Drama', 'Adventure|Drama|Thriller', 'Horror|Thriller']
  },
  {
    id: '99382ee2-9ab7-4472-b767-a11cbdb30bae',
    titule: 'Nora',
    year: 2011,
    cover: 'http://dummyimage.com/171x101.bmp/ff4444/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1922,
    contenRating: 'G',
    source: 'https://smugmug.com/nulla/integer.aspx',
    tag: ['Drama', 'Comedy|Drama|Romance']
  },
  {
    id: 'eab634de-bed6-42bf-bcb8-eae7408e773e',
    titule: 'Castaway Cowboy, The',
    year: 2008,
    cover: 'http://dummyimage.com/211x238.jpg/5fa2dd/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2060,
    contenRating: 'PG',
    source: 'http://ox.ac.uk/non/mi/integer.png',
    tag: [
      'Comedy|Crime|Musical',
      'Comedy|Drama',
      'Drama|Horror',
      'Action|Crime|Sci-Fi|Thriller',
      'Comedy'
    ]
  },
  {
    id: 'f9e3bc6c-b16b-47ea-87cc-62a03d828ce0',
    titule: 'First on the Moon (Pervye na Lune)',
    year: 2009,
    cover: 'http://dummyimage.com/111x199.png/ff4444/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1922,
    contenRating: 'R',
    source: 'http://opensource.org/aliquet.jpg',
    tag: ['Adventure|Comedy|Fantasy|Musical', 'Comedy|Western', 'Action|Horror']
  },
  {
    id: 'b425f876-91ff-4a40-8773-cfb8f3b52bef',
    titule: 'Elvis on Tour',
    year: 2009,
    cover: 'http://dummyimage.com/206x132.png/5fa2dd/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1896,
    contenRating: 'G',
    source: 'https://facebook.com/ut/suscipit/a/feugiat/et/eros/vestibulum.png',
    tag: ['Drama', 'Drama|Fantasy', 'Comedy', 'Drama|Romance']
  },
  {
    id: '73be2335-1296-40da-aeef-30ee69f64fb5',
    titule: 'Lucky Ones, The',
    year: 1988,
    cover: 'http://dummyimage.com/127x216.bmp/ff4444/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1998,
    contenRating: 'R',
    source: 'http://cam.ac.uk/quam/fringilla/rhoncus.jsp',
    tag: ['Documentary', 'Horror', 'Comedy|Drama']
  },
  {
    id: 'b1a77a2e-3e18-4501-bf01-d5e289e34500',
    titule: 'Lammbock',
    year: 1997,
    cover: 'http://dummyimage.com/130x200.jpg/cc0000/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1894,
    contenRating: 'PG-13',
    source: 'http://addthis.com/nulla/tellus/in/sagittis.jpg',
    tag: [
      'Drama|Thriller',
      'Horror|Sci-Fi',
      'Drama|Romance',
      'Comedy|Drama|Romance',
      'Drama'
    ]
  },
  {
    id: 'a385e95e-26ce-4dc8-8a59-987b8515b9f5',
    titule: 'Darkness/Light/Darkness (Tma/Svetlo/Tma)',
    year: 1991,
    cover: 'http://dummyimage.com/138x155.bmp/dddddd/000000',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 1950,
    contenRating: 'PG-13',
    source: 'http://oaic.gov.au/ut/mauris/eget/massa/tempor/convallis.jpg',
    tag: ['Drama', 'Crime|Mystery', 'Action|Comedy']
  },
  {
    id: '4acb0a99-d82c-47a5-8992-261bfc230990',
    titule: 'Hellsing Ultimate OVA Series',
    year: 2003,
    cover: 'http://dummyimage.com/242x250.png/ff4444/ffffff',
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2060,
    contenRating: 'PG',
    source: 'https://japanpost.jp/quis/turpis.aspx',
    tag: ['Comedy|Drama']
  },
  {
    id: 'fafd06b6-ef4b-4908-b662-16cf7741112b',
    titule: 'Nobel Son',
    year: 2002,
    cover: 'http://dummyimage.com/215x142.jpg/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1982,
    contenRating: 'PG',
    source: 'http://mozilla.org/volutpat.html',
    tag: ['Drama']
  },
  {
    id: '2504e689-e53f-4597-90b4-3555ea1fed37',
    titule: 'Little Vampire, The',
    year: 2005,
    cover: 'http://dummyimage.com/190x198.jpg/dddddd/000000',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1971,
    contenRating: 'NC-17',
    source: 'https://intel.com/faucibus/orci/luctus/et.xml',
    tag: [
      'Comedy|Drama',
      'Drama',
      'Comedy|Crime',
      'Horror|Mystery|Sci-Fi',
      'Comedy|Musical|Romance'
    ]
  },
  {
    id: 'a25632dc-1d3b-49c1-a761-b961307108ae',
    titule: 'Remonstrance',
    year: 1997,
    cover: 'http://dummyimage.com/224x198.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2001,
    contenRating: 'PG-13',
    source: 'http://time.com/vel/est/donec/odio/justo/sollicitudin.jpg',
    tag: ['Horror|Thriller', 'Drama|Romance', 'Documentary', 'Drama']
  },
  {
    id: '66fbc53b-5fb5-4b29-b1ae-ace166996e31',
    titule: 'Pool, The',
    year: 2005,
    cover: 'http://dummyimage.com/192x223.png/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1996,
    contenRating: 'PG-13',
    source: 'https://opera.com/vestibulum/sed/magna.jpg',
    tag: ['Comedy|Drama', 'Drama|Sci-Fi', 'Crime|Mystery|Thriller', 'Drama']
  },
  {
    id: 'd70a61e0-4253-40b5-a20c-1e953b3179c9',
    titule: 'Girls Just Want to Have Fun',
    year: 1998,
    cover: 'http://dummyimage.com/177x226.jpg/5fa2dd/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1962,
    contenRating: 'G',
    source: 'https://ask.com/ipsum.png',
    tag: ['Drama|Musical|Romance', 'Drama', 'Adventure|Drama', 'Drama|Thriller']
  },
  {
    id: '6164e5ee-7c55-4b54-9089-9b5e233ea50d',
    titule: 'Runaway',
    year: 2002,
    cover: 'http://dummyimage.com/124x248.jpg/5fa2dd/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2017,
    contenRating: 'PG',
    source: 'http://meetup.com/id/lobortis/convallis/tortor/risus.json',
    tag: ['Comedy|Drama', 'Comedy']
  },
  {
    id: '8172deed-8748-42eb-b83a-45c735006add',
    titule: 'Autumn Heart, The',
    year: 1999,
    cover: 'http://dummyimage.com/111x163.bmp/5fa2dd/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 2029,
    contenRating: 'NC-17',
    source: 'https://go.com/vulputate/justo/in/blandit/ultrices.jpg',
    tag: [
      'Drama',
      'Comedy|Crime',
      'Action|Comedy|Romance',
      'Thriller',
      'Drama|Romance'
    ]
  },
  {
    id: '345fd52b-eddc-4902-9c10-f32f1d97d2ac',
    titule: 'Devil Hides in Doubt (Sollbruchstelle)',
    year: 2000,
    cover: 'http://dummyimage.com/128x218.jpg/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1980,
    contenRating: 'NC-17',
    source: 'https://sina.com.cn/nec.aspx',
    tag: ['Drama', 'Horror', 'Drama', 'Comedy']
  },
  {
    id: '3f280682-bd11-4306-95df-d237793dfc90',
    titule: 'Next of Kin',
    year: 2002,
    cover: 'http://dummyimage.com/220x171.jpg/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 2031,
    contenRating: 'G',
    source: 'https://opera.com/lobortis/convallis/tortor/risus/dapibus.js',
    tag: [
      'Documentary',
      'Comedy',
      'Drama|Fantasy|Romance',
      'Thriller',
      'Documentary'
    ]
  },
  {
    id: 'd0a89b74-9940-4143-b5f1-8b2e756ecc9a',
    titule: 'Naked Gun: From the Files of Police Squad!, The',
    year: 2011,
    cover: 'http://dummyimage.com/186x144.bmp/5fa2dd/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 2016,
    contenRating: 'G',
    source:
      'http://barnesandnoble.com/neque/libero/convallis/eget/eleifend/luctus/ultricies.js',
    tag: ['Children|Comedy|Musical']
  },
  {
    id: '76fcd971-3cf3-4ce6-ad2a-b7307da9a824',
    titule: 'True Believer',
    year: 1997,
    cover: 'http://dummyimage.com/199x220.png/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 2031,
    contenRating: 'NC-17',
    source: 'http://simplemachines.org/et.xml',
    tag: ['Drama', 'Documentary']
  },
  {
    id: '9c8c94cd-5e6c-4d25-8bc0-950a58b6ea75',
    titule: 'Film ist. 7-12',
    year: 2008,
    cover: 'http://dummyimage.com/132x133.bmp/cc0000/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 2066,
    contenRating: 'R',
    source:
      'http://bravesites.com/ornare/imperdiet/sapien/urna/pretium/nisl.html',
    tag: [
      'Documentary',
      'Crime|Drama|Thriller',
      'Crime|Drama|Romance',
      'Drama|War',
      'Drama'
    ]
  },
  {
    id: 'bae3a9db-3bf6-436b-9bbd-86215faa23e8',
    titule: 'Our Song',
    year: 1996,
    cover: 'http://dummyimage.com/159x187.png/ff4444/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1916,
    contenRating: 'G',
    source: 'http://cloudflare.com/eu.aspx',
    tag: [
      'Action|Comedy|Crime|Drama|War',
      'Action|Animation|Drama|Sci-Fi',
      'Drama|War',
      'Documentary',
      'Animation|Drama|Romance|Sci-Fi'
    ]
  },
  {
    id: '5f2df945-e255-42f4-971a-d98ad9b56642',
    titule: 'Criminal, The (a.k.a. Concrete Jungle)',
    year: 2007,
    cover: 'http://dummyimage.com/160x128.jpg/dddddd/000000',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2008,
    contenRating: 'PG-13',
    source: 'http://cyberchimps.com/sapien/placerat.xml',
    tag: [
      'Drama|Romance|Thriller|War',
      'Crime|Drama|Film-Noir|Romance|Thriller',
      'Comedy',
      'Animation',
      'Animation'
    ]
  },
  {
    id: '4f856a24-aef1-4ad3-b322-27f44c247ad3',
    titule: 'Phantom Pain',
    year: 2010,
    cover: 'http://dummyimage.com/248x117.jpg/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1991,
    contenRating: 'NC-17',
    source: 'https://people.com.cn/potenti/in/eleifend/quam/a/odio/in.xml',
    tag: ['Drama', 'Adventure|Sci-Fi']
  },
  {
    id: '30c46c97-588c-49fa-aea4-5211cd0db8b9',
    titule: "Madonna's Pig",
    year: 2011,
    cover: 'http://dummyimage.com/184x194.png/ff4444/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1988,
    contenRating: 'NC-17',
    source: 'http://fastcompany.com/amet/nunc/viverra/dapibus.xml',
    tag: ['Drama', 'Horror']
  },
  {
    id: '644df9c3-65a6-4870-a2be-8a2518538c45',
    titule: 'Flower of Evil, The (Fleur du mal, La)',
    year: 2003,
    cover: 'http://dummyimage.com/107x108.png/5fa2dd/ffffff',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 2032,
    contenRating: 'NC-17',
    source: 'http://dell.com/diam/in/magna/bibendum.jsp',
    tag: ['Action|Comedy|Crime|Drama', 'Drama|Romance', 'Comedy', 'Comedy']
  },
  {
    id: '11a1175e-a603-4b7d-872f-07348103dab2',
    titule: 'Adventures of Food Boy, The (aka High School Superhero)',
    year: 2010,
    cover: 'http://dummyimage.com/152x103.jpg/ff4444/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1977,
    contenRating: 'PG-13',
    source: 'http://blogs.com/at/nunc/commodo/placerat.json',
    tag: [
      'Comedy',
      'Western',
      'Horror|Thriller',
      'Drama|War',
      '(no genres listed)'
    ]
  },
  {
    id: '479ccba7-c3a1-4b9d-b419-ccefe2bba00a',
    titule: 'Off Limits',
    year: 2007,
    cover: 'http://dummyimage.com/217x186.jpg/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2068,
    contenRating: 'G',
    source: 'http://auda.org.au/laoreet.png',
    tag: ['Comedy|Crime|Horror']
  },
  {
    id: 'fb03cc26-aafc-45a9-b475-decda3656d60',
    titule: 'According to Greta',
    year: 1992,
    cover: 'http://dummyimage.com/121x166.jpg/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1914,
    contenRating: 'G',
    source: 'https://ovh.net/ullamcorper/augue/a/suscipit/nulla/elit.png',
    tag: ['Western', 'Drama', '(no genres listed)', 'Comedy']
  },
  {
    id: '37c32969-f6ca-4870-a3aa-a333dce756cb',
    titule: 'Saw III',
    year: 2005,
    cover: 'http://dummyimage.com/165x171.jpg/dddddd/000000',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 2060,
    contenRating: 'R',
    source: 'http://globo.com/nam/nulla.jsp',
    tag: ['Comedy|Drama', 'Crime|Drama', 'Children|Musical', 'Drama']
  },
  {
    id: '85dc7c48-4c0f-4365-93d7-08373c78f278',
    titule: 'Call Me Madam',
    year: 1995,
    cover: 'http://dummyimage.com/200x154.bmp/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1938,
    contenRating: 'PG-13',
    source: 'https://oracle.com/quam/a/odio/in/hac/habitasse/platea.json',
    tag: ['Drama|Musical|Romance']
  },
  {
    id: '0d1ae3f5-24f2-46d0-b684-3c99a2342b0c',
    titule: 'Angel in My Pocket',
    year: 1998,
    cover: 'http://dummyimage.com/189x211.png/ff4444/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1982,
    contenRating: 'PG-13',
    source: 'https://europa.eu/cum/sociis/natoque/penatibus/et/magnis.js',
    tag: ['Action|Crime|Thriller']
  },
  {
    id: '35eda3d4-6685-4954-8391-302306b119b9',
    titule: 'Tickle in the Heart, A',
    year: 1997,
    cover: 'http://dummyimage.com/208x143.jpg/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2053,
    contenRating: 'G',
    source: 'https://last.fm/purus/sit/amet/nulla.jpg',
    tag: [
      'Action|Fantasy|Mystery|Sci-Fi|Thriller',
      'Drama',
      'Drama|Romance',
      'Crime|Thriller',
      'Horror|Thriller|Western'
    ]
  },
  {
    id: 'de3aff82-6ff1-4b9d-b820-48b067398ea4',
    titule: 'St. Ives',
    year: 1988,
    cover: 'http://dummyimage.com/148x107.png/ff4444/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1974,
    contenRating: 'G',
    source: 'https://redcross.org/semper/sapien/a/libero.json',
    tag: [
      '(no genres listed)',
      'Crime|Thriller',
      'Crime|Drama|Film-Noir|Thriller',
      'Action|Adventure|War'
    ]
  },
  {
    id: '071e54d4-6d11-4cd8-949f-9aea33f37048',
    titule: 'Reasonable Doubt',
    year: 2011,
    cover: 'http://dummyimage.com/195x225.png/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1941,
    contenRating: 'NC-17',
    source:
      'http://mit.edu/sapien/dignissim/vestibulum/vestibulum/ante/ipsum.aspx',
    tag: [
      'Action|Adventure|Crime|Drama|Sci-Fi|Thriller|War',
      'Horror',
      'Comedy|Drama|Musical',
      'Drama|Thriller',
      'Drama'
    ]
  },
  {
    id: '45ac4367-1269-4f33-88c8-7050a5f89cf0',
    titule:
      'Most Dangerous Man in America: Daniel Ellsberg and the Pentagon Papers, The',
    year: 2002,
    cover: 'http://dummyimage.com/238x105.bmp/cc0000/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2003,
    contenRating: 'PG-13',
    source: 'http://apple.com/non/mauris/morbi.aspx',
    tag: ['Crime|Drama', 'Horror', 'Drama|Romance', 'Action|Comedy']
  },
  {
    id: '727f524c-2d30-4ab0-a79a-d932b24da02a',
    titule: 'Princess Raccoon (Operetta tanuki goten)',
    year: 2009,
    cover: 'http://dummyimage.com/186x113.jpg/cc0000/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1922,
    contenRating: 'G',
    source: 'http://seattletimes.com/vivamus/vel/nulla.png',
    tag: ['Drama|Mystery|Sci-Fi']
  },
  {
    id: '4d317130-1818-4efd-9e6b-f873de99cdbd',
    titule: 'Alien Autopsy',
    year: 2011,
    cover: 'http://dummyimage.com/198x108.jpg/cc0000/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1993,
    contenRating: 'G',
    source: 'https://latimes.com/quis/odio/consequat/varius/integer/ac.jsp',
    tag: ['Drama|Romance', 'Documentary', 'Horror|Sci-Fi', 'Comedy|Crime|Drama']
  },
  {
    id: '78a49e42-9c3f-4151-8f51-52d79b266381',
    titule: 'Inside Job',
    year: 2007,
    cover: 'http://dummyimage.com/125x183.png/ff4444/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1925,
    contenRating: 'PG-13',
    source: 'http://seattletimes.com/et/magnis/dis.json',
    tag: ['Adventure|Animation|Children', 'Romance|Western', 'Drama']
  },
  {
    id: '202b34b3-b4ac-41a6-bf0f-db9c9006b914',
    titule: 'Back to the Garden, Flower Power Comes Full Circle',
    year: 1999,
    cover: 'http://dummyimage.com/146x220.png/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1958,
    contenRating: 'NC-17',
    source: 'https://soup.io/ullamcorper/purus/sit.png',
    tag: [
      'Romance|Western',
      'Comedy|Romance',
      'Comedy',
      'Children|Comedy|Fantasy'
    ]
  },
  {
    id: '877af360-ebd3-4864-a8d3-b19a56bfc2a2',
    titule: 'Trouble the Water',
    year: 2002,
    cover: 'http://dummyimage.com/250x104.bmp/dddddd/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 2007,
    contenRating: 'PG-13',
    source: 'https://joomla.org/dui/luctus/rutrum.jpg',
    tag: ['Adventure|Comedy|Documentary']
  },
  {
    id: '485ce50e-20fb-45c9-b158-d8a13df7d65e',
    titule: 'Shall We Dance? (Shall We Dansu?)',
    year: 1998,
    cover: 'http://dummyimage.com/139x221.bmp/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1930,
    contenRating: 'PG-13',
    source: 'https://google.ru/justo/etiam.json',
    tag: [
      'Drama|Fantasy',
      'Comedy',
      'Children|Comedy|Fantasy|Musical',
      'Action|Drama|Romance',
      'Drama'
    ]
  },
  {
    id: '1d29a9e5-2f1f-4bae-a988-93eb5f0a99e8',
    titule: 'Less Than Zero',
    year: 2006,
    cover: 'http://dummyimage.com/236x157.jpg/ff4444/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2022,
    contenRating: 'NC-17',
    source: 'http://marketwatch.com/morbi/a/ipsum/integer/a/nibh/in.html',
    tag: [
      'Thriller',
      'Action|Crime|Drama|Thriller',
      'Adventure|Fantasy',
      'Adventure|Comedy',
      'Drama'
    ]
  },
  {
    id: 'aa43450b-01a7-4a85-a7cf-59edf7d95a30',
    titule: 'Mr. Deeds',
    year: 2000,
    cover: 'http://dummyimage.com/155x211.bmp/ff4444/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1935,
    contenRating: 'G',
    source: 'https://reference.com/primis/in/faucibus/orci/luctus.html',
    tag: ['Children|Drama', 'Horror', 'Documentary']
  },
  {
    id: '18a62a02-e697-4744-acb9-3ddbc1227fbf',
    titule: 'Pardon Us',
    year: 2007,
    cover: 'http://dummyimage.com/169x248.bmp/5fa2dd/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1968,
    contenRating: 'R',
    source: 'http://adobe.com/sit/amet/nunc/viverra/dapibus/nulla/suscipit.jpg',
    tag: [
      'Horror|Sci-Fi',
      'Drama',
      'Horror|Mystery|Thriller',
      'Horror|Sci-Fi|Thriller',
      'Comedy'
    ]
  },
  {
    id: '885663bb-515d-4e2d-82a9-2343fe5f7173',
    titule: 'Live Free or Die',
    year: 2004,
    cover: 'http://dummyimage.com/108x212.bmp/cc0000/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1900,
    contenRating: 'PG-13',
    source: 'https://xrea.com/nisl/aenean/lectus.png',
    tag: ['Comedy']
  }
];

module.exports = {
  moviesMock
}