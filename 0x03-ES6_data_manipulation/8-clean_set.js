export default function cleanSet(set, startString) {
  let array = Array.from(set);
  if (startString === '') {
    return [].join('-');
  }
  array = array.filter((ele) => ele.startsWith(startString));
  array = array.map((ele) => ele.slice(startString.length));
  return array.join('-');
}
