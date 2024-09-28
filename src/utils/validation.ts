export const isValidStringLength = (
  str: string,
  minLength: number,
  maxLength: number
) => {
  return str.length >= minLength && str.length <= maxLength;
};

export const isValidId = (id: string) => {
  const idRegex = /^[a-z0-9]{1,30}$/;
  return idRegex.test(id);
};

export const isValidBirth = (birth: string) => {
  const birthRegex = /^[0-9]{8}$/;
  return birthRegex.test(birth);
};

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&%^&*])[A-Za-z\d@$!%*#?&%^&*]{8,}$/;

export const timetoString = (time: string) => {
  // console.log(time);
  const now = new Date();
  const timeDifference = Math.floor(
    (now.getTime() - new Date(time).getTime()) / 1000
  );
  const minutes = Math.floor(timeDifference / 60);
  const hours = Math.floor(timeDifference / 3600);
  const days = Math.floor(timeDifference / 86400);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (timeDifference < 60) {
    return '방금 전';
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 7) {
    return `${days}일 전`;
  } else if (weeks < 4) {
    return '1주 전';
  } else if (weeks < 8) {
    return '2주 전';
  } else if (weeks < 12) {
    return '3주 전';
  } else if (months < 12) {
    return `${months}개월 전`;
  } else {
    return `${years}년 전`;
  }
};
