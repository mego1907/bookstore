const allBooks = [
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735219106_p0_v10%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Notes on Your Sudden Disappearance: A Novel",
    author: "Alison Espach",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B275%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250823144_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title:
      "Long Live the Pumpkin Queen: Tim Burton's The Nightmare Before Christmas (B&N Exclusive Edition)",
    author: "Shea Ernshaw",
    star: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B275%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781368084383_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538724736_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "It Starts with Us: A Novel",
    author: "Colleen Hoover",
    star: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781668001226_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Nosotros en la luna",
    author: "Alice Kellen",
    star: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9786070774249_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781476753188_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The House across the Lake",
    author: "Riley Sager",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593183205_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The Measure: A Novel",
    author: "Nikki Erlick",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063204201_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban (Harry Potter Series #3)",
    author: "J. K. Rowling",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439136365_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The Tail of Emily Windsnap (Tail of Emily Windsnap #1)",
    author: "Liz Kessler",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780763660208_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The Seven Husbands of Evelyn Hugo: A Novel",
    author: "Taylor Jenkins Reid",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781501161933_p0_v13%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Barefoot",
    author: "Elin Hilderbrand",
    star: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316018593_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The Weird Sisters",
    author: "Eleanor Brown",
    star: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780425244142_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "House Rules",
    author: "Jodi Picoult",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780743296441_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "Salem Falls",
    author: "Jodi Picoult",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780743418713_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
  {
    title: "The Wedding",
    author: "Nicholas Sparks",
    star: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, montes, amet, amet in. Luctus faucibus mauris, eleifend sed amet. Venenatis vehicula scelerisque sit orci ullamcorper iaculis interdum aliquam. Senectus adipiscing aenean ut eros, montes, varius id cursus sed.",
    authorBio:
      "Morbi adipiscing imperdiet egestas mi tristique mi id et. A sit metus in proin dui ultrices. Vel at etiam platea convallis id suspendisse est at. Consequat amet, nisl porttitor morbi massa porta amet, amet. Ipsum, nec aliquam adipiscing pulvinar urna laoreet nunc. Pretium vitae lobortis sed dolor id. Prom adipiscing. ",
    image:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538745328_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  },
];

const books = document.querySelectorAll(".book__list .book__list__item");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal .close")

books.forEach((book) => {
  book.addEventListener("click", () => {
    modal.classList.add("active");

    const bookDetails = allBooks.find((item) => item.image === book.querySelector("img").src);

    const modalImage = modal.querySelector("img");
    modalImage.src = bookDetails.image;

    const modalTitle = modal.querySelector("h2")
    modalTitle.textContent = bookDetails.title

    const modalAuthor = modal.querySelector(".author")
    modalAuthor.textContent = bookDetails.author;

    const modalDesc = modal.querySelector(".desc p")
    modalDesc.textContent = bookDetails.description

    const modalAuthorBio = modal.querySelector(".author-bio p")
    modalAuthorBio.textContent = bookDetails.authorBio;
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active")
})
