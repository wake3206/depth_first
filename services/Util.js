export const dateFormatToThai = dateIn => {
  const RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;

  const matchObj = RE_DATE.exec(dateIn);

  //console.log('matchObj->', matchObj)

  return matchObj !== undefined && matchObj !== null
    ? `${matchObj.groups.d}/${matchObj.groups.m}/${parseInt(
        matchObj.groups.y,
        10
      ) + 543} ${matchObj.groups.time}`
    : "";
};

export const dateOnlyFormatToThai = dateIn => {
  const RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;
  const matchObj = RE_DATE.exec(dateIn);
  //console.log('matchObj->', matchObj)
  return matchObj !== undefined && matchObj !== null
    ? `${matchObj.groups.d}/${matchObj.groups.m}/${parseInt(
        matchObj.groups.y,
        10
      ) + 543}`
    : "";
};

export const getDateOnly = dateTime => {
  const RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;

  const matchObj = RE_DATE.exec(dateTime);

  //console.log('matchObj->', matchObj)

  return matchObj !== undefined && matchObj !== null
    ? `${matchObj.groups.y}-${matchObj.groups.m}-${matchObj.groups.d}`
    : dateTime;
};

export const mapStatus = val => {
  let txt = "";

  switch (val) {
    case 1:
      txt = "ขออนุมัติ";
      break;
    case 2:
      txt = "อนุมัติแล้ว";
      break;
    case 3:
      txt = "ไม่อนุมัติ";
      break;
    case 4:
      txt = "ยกเลิก";
      break;
    case 5:
      txt = "สําเร็จแล้ว";
      break;

    default:
      break;
  }

  return txt;
};

export const mapLevelName = status => {
  let txt = "";
  switch (status) {
    case 1:
      txt = "Junior";
      break;
    case 2:
      txt = "Senior";
      break;
    case 3:
      txt = "Manager";
      break;
    default:
      break;
  }

  return txt;
};
