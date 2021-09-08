// 목록 요소
var __LIST_ELEMENT = document.getElementById("list");
// 마지막 갱신 표기 요소 아이디
var __LAST_UPDATED_DATE_ELEMENT_ID = "lastUpdatedDate";
// 요청 여부
var __API_REQUESTED = false;

/**
 * @description 화면에 데이터를 그려주는 함수입니다.
 * @param {*} data api에서 돌려받은 데이터 입니다
 */
function render(data) {
  var createdListItem = document.createElement("li");
  createdListItem.innerText = "[" + data.id + "] " + data.title;
  __LIST_ELEMENT.appendChild(createdListItem);
}

/**
 * @description 데이터를 가져오는 함수입니다.
 */
function fetchData() {
  if (__API_REQUESTED) {
    alert("이미 요청중입니다.");
    return;
  }
  /// 리스트 요소
  var fetchDataId = __LIST_ELEMENT.children.length + 1;

  var url = "https://jsonplaceholder.typicode.com/posts/" + fetchDataId;

  __API_REQUESTED = true;
  axios.get(url).then(function (_response) {
    __API_REQUESTED = false;
    console.log("response time : " + new Date().toISOString());
    /// 마지막 갱신 표기 요소
    var lastUpdatedDateElem = document.getElementById(
      __LAST_UPDATED_DATE_ELEMENT_ID
    );

    lastUpdatedDateElem.innerText = new Date().toISOString();
    render(_response.data);
  });
  console.log("request time : " + new Date().toISOString());
}
