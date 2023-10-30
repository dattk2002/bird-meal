const birdFoodItems = [
    {
      id: 1,
      image: "item1.jpg",
      name: "Hoa cải",
      category: "hoa",
      expireDate: "7 ngày",
      detail: "Giàu vitamin C, A, sắt và kali. Được chim họ sẻ ưa thích."
    },
    {
      id: 2,
      image: "item2.jpg",
      name: "Hoa ngô",
      category: "hoa",
      expireDate: "5 ngày",
      detail: "Giàu vitamin B1, B2 và kẽm. Chim họ chim yến, chim cúng ưa thích."
    },
    {
      id: 3,
      image: "item3.jpg",
      name: "Quả dâu tây",
      category: "Quả",
      expireDate: "10 ngày",
      detail: "Giàu vitamin C, K, mangan và fiber. Chim họ cú và sẻ rất thích."
    },
    {
      id: 4,
      image: "item4.jpg",
      name: "Hạt lạc",
      category: "hạt",
      expireDate: "2 tuần",
      detail: "Giàu protein, sắt, kẽm và vitamin B1. Chim họ bồ câu, hạc thích ăn."
    },
    {
      id: 5,
      image: "item5.jpg",
      name: "Quả sồi",
      category: "Quả bụi",
      expireDate: "1 tháng",
      detail: "Giàu vitamin K, đồng, magie và chất béo lành mạnh. Chim bồ câu, hạc ưa thích."
    },
    {
      id: 6,
      image: "item6.jpg",
      name: "Quả mâm xôi",
      category: "Quả bụi",
      expireDate: "2 tuần",
      detail: "Giàu vitamin C, folate, kali và fiber. Chim cú, sẻ rất thích loại quả mọng này."
    },
    {
      id: 7,
      image: "item7.jpg",
      name: "Kiến làm tổ",
      category: "côn trùng",
      expireDate: "1 tuần",
      detail: "Giàu protein, canxi, magie và selen. Được các loài chim săn mồi ưa thích."
    },
    {
      id: 8,
      image: "item8.jpg",
      name: "Thuốc lá đỏ",
      category: "côn trùng",
      expireDate: "5 ngày",
      detail: "Giàu vitamin B1, B6, kẽm và mangan. Chim họ sẻ, cốc thích kiếm ăn ở lá Quả này."
    },
    {
      id: 9,
      image: "item9.jpg",
      name: "Bắp rang",
      category: "hạt",
      expireDate: "3 tháng sau khi mở",
      detail: "Giàu chất xơ, vitamin B, sắt và kali. Chim họ vẹt ưa thích loại hạt này."
    },
    {
      id: 10,
      image: "item10.jpg",
      name: "Hạt dẻ",
      category: "hạt",
      expireDate: "6 tháng sau khi mở",
      detail: "Giàu protein, kali, vitamin E và magie. Chim sẻ thường kiếm ăn hạt dẻ."
    },
    {
      id: 11,
      image: "item11.jpg",
      name: "Hạt hạnh nhân",
      category: "hạt",
      expireDate: "9 tháng sau khi mở",
      detail: "Giàu vitamin E, kali, magie và canxi. Chim họ sẻ rất thích loại hạt ngọt này."
    },
    {
      id: 12,
      image: "item12.jpg",
      name: "Hạt óc chó",
      category: "hạt",
      expireDate: "1 năm sau khi mở",
      detail: "Giàu vitamin B1, phốt pho, sắt và kẽm. Chim bồ câu thường tìm ăn hạt óc chó."
    },
    {
      id: 13,
      image: "item13.jpg",
      name: "Hạt lanh",
      category: "hạt",
      expireDate: "6 tháng sau khi mở",
      detail: "Giàu protein, chất xơ, magie và vitamin B1. Chim họ sẻ ưa thích loại hạt nhỏ này."
    },
    {
      id: 14,
      image: "item14.jpg",
      name: "Quả ngải cứu",
      category: "Quả",
      expireDate: "2 tuần",
      detail: "Giàu vitamin C, K, sắt, magie và canxi. Chim sẻ thường kiếm ăn trên lá Quả ngải cứu."
    },
    {
      id: 15,
      image: "item15.jpg",
      name: "Quả diếp cá",
      category: "Quả",
      expireDate: "10 ngày",
      detail: "Giàu vitamin A, C, K, folate và kali. Chim họ ngan thích ăn Quả diếp cá."
    },
    {
      id: 16,
      image: "item16.jpg",
      name: "Quả bạc hà",
      category: "Quả bụi",
      expireDate: "3 tuần",
      detail: "Giàu vitamin C, A, sắt, magie và canxi. Chim cú thường kiếm mật hoa trên Quả bạc hà."
    },
    {
      id: 17,
      image: "item17.jpg",
      name: "Quả cúc",
      category: "Quả",
      expireDate: "1 tuần",
      detail: "Giàu vitamin C, K, sắt và kali. Chim sẻ thích kiếm ăn trên hoa cúc."
    },
    {
      id: 18,
      image: "item18.jpg",
      name: "Chuối hoang dã",
      category: "Quả",
      expireDate: "2 tuần",
      detail: "Giàu kali, vitamin C và A. Chim họ vẹt thích ăn trái chuối nhỏ."
    },
    {
      id: 19,
      image: "item19.jpg",
      name: "Nhãn",
      category: "Quả",
      expireDate: "1 tháng",
      detail: "Giàu vitamin C, kali và chất xơ. Chim én thường tập trung kiếm ăn trái nhãn rụng."
    },
    {
      id: 20,
      image: "item20.jpg",
      name: "Ổi",
      category: "Quả",
      expireDate: "2 tuần",
      detail: "Giàu vitamin A, C và kali. Chim bồ câu và chim họ sẻ thích ăn trái ổi."
    },
    {
      id: 21,
      image: "item21.jpg",
      name: "Dâu tây hoang",
      category: "Quả",
      expireDate: "10 ngày",
      detail: "Giàu vitamin C, K và chất xơ. Chim ruồi thường tìm ăn quả dâu hoang."
    },
    {
      id: 22,
      image: "item22.jpg",
      name: "Ấu ngưu",
      category: "Quả",
      expireDate: "1 tuần",
      detail: "Giàu magie, kali và chất xơ. Chim yến ưa thích loại rau này."
    },
    {
      id: 23,
      image: "item23.jpg",
      name: "Cám gà",
      category: "thức ăn chăn nuôi",
      expireDate: "3 tháng",
      detail: "Giàu protein, vitamin và khoáng chất. Chim ruồi và chim sâu thích kiếm trong cám gà."
    },
    {
      id: 24,
      image: "item24.jpg",
      name: "Con sâu bướm",
      category: "côn trùng",
      expireDate: "2 ngày",
      detail: "Giàu protein, phốt pho và selen. Chim sâu là loài thích nhất loại thức ăn này."
    },
    {
      id: 25,
      image: "item25.jpg",
      name: "Bọ cánh cứng",
      category: "côn trùng",
      expireDate: "3 ngày",
      detail: "Giàu kẽm, vitamin B2 và canxi. Chim ruồi rất thích ăn bọ cánh cứng."
    },
    {
      id: 26,
      image: "item26.jpg",
      name: "Ruồi nhà",
      category: "côn trùng",
      expireDate: "1 ngày",
      detail: "Giàu protein, vitamin B3 và magie. Chim ruồi thích ăn ruồi xác chết nhất."
    },
    {
      id: 27,
      image: "item27.jpg",
      name: "Cà chua",
      category: "Quả",
      expireDate: "2 tuần",
      detail: "Giàu vitamin C, A và K. Chim vẹt thích ăn trái cà chua ngọt."
    },
    {
      id: 28,
      image: "item28.jpg",
      name: "Mít",
      category: "Quả",
      expireDate: "1 tháng",
      detail: "Giàu kali, vitamin C và chất xơ. Chim họ sẻ thích ăn trái mít chín."
    },
    {
      id: 29,
      image: "item29.jpg",
      name: "Lá ráy",
      category: "Quả",
      expireDate: "5 ngày",
      detail: "Giàu kali, sắt và vitamin A. Chim yến thích bay kiếm ăn lá ráy."
    },
    {
      id: 30,
      image: "item30.jpg",
      name: "Hạt mồng buông",
      category: "hạt",
      expireDate: "3 tháng",
      detail: "Giàu protein, chất béo và vitamin E. Chim yến, cu ưa thích loại hạt này."
    }
  ]

  module.exports = birdFoodItems;