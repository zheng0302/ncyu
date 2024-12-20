let i=0, imgArr=new Array();
imgArr[0] = "https://www.ncyu.edu.tw/ncyu/ServerFile/Get/e51e3829-13e6-4bae-8827-8c5e9676b1eb?nodeId=355&sId=74";
imgArr[1] = "https://megapx-assets.dcard.tw/images/7790a600-068d-4dea-8eee-e97aee26185e/orig.jpeg";
imgArr[2] = "https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/459f4bd3-ba75-4acd-a36b-ed775326fd8b?subjectId=74";

function showImg(){
  document.getElementById('ico').src=imgArr[i];
  i=(i+1) % 3;
}

function show() {
  setInterval(showImg,2000);
}