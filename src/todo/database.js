const database = localStorage;

export const store = (item) =>
  new Promise((resolve, reject) => {
    if (item.lenght === 0) {
      return reject("아무것도 입력되지않았습니다.");
    }
    let list = [];
    const data = database.getItem("list");
    if (data) {
      list = JSON.parse(data);
    }
    list.unshift(item);
    database.setItem("list", JSON.stringify(list));

    return resolve("성공");
  });

export const fetchList = () => {
  const data = database.getItem("list");
  if (!data) {
    return [];
  }
  const realData = JSON.parse(data);
  return realData ?? []; //??=앞에 값이없으면 뒤에꺼해줘
};

export const deleteItem = (item) => {
  new Promise((resolve, reject) => {
    let list = [];
    const data = database.getItem("list");
    if (!data) {
      return reject("목록이 존재하지 않습니다.");
    }
    list = JSON.parse(data);
    list = list.filter((i) => i !== item);
    database.setItem("list", JSON.stringify(list));
    return resolve("성공");
  });
};
