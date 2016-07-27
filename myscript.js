// URLに飛ぶ
function moveUrl(url){
  chrome.tabs.executeScript(null,{
   "code" : "window.location.href = '" + url + "';"
  });
}

(function (loadedListener) {
　var doc, readyState;

　doc = document;
　readyState = doc.readyState;

　if (readyState === 'complete' || readyState === 'interactive') {
　　loadedListener();
　} else {
　　doc.addEventListener("DOMContentLoaded", loadedListener, false);
　}
})(function () {
  // popup.html.
  var dev_movedebug_btn = document.getElementById('pokevision');
  if(dev_movedebug_btn != null) {
    // 処理を入れておく
    dev_movedebug_btn.addEventListener('click', function() {
      moveUrl("https://pokevision.com/");
    });
  }
});


$(function () {
  // URLを判定
  var href_str = window.location.href;
  var res = href_str.match(/pokevision.com/);
  // 違ったらしない
  if(res == null) return;

  // アフィリエイト
  var amazon = "<div>포켓몬 고 공략 겟 - WiLLBee CLIPON (흑색) Pokemon Go 
	스마트 폰 > 핸드 밴드 홀더 링 - Xperia iPhone 6S 6 Plus<br /><a  href=\"http://www.amazon.co.jp/gp/product/B01IIGUB4M/ref=as_li_tf_il?ie=UTF8&camp=247&creative=1211&creativeASIN=B01IIGUB4M&linkCode=as2&tag=noctushinrsdi-22\"><img border=\"0\" src=\"http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01IIGUB4M&Format=_SL110_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=noctushinrsdi-22\" ></a><img src=\"http://ir-jp.amazon-adsystem.com/e/ir?t=noctushinrsdi-22&l=as2&o=9&a=B01IIGUB4M\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></div>";
  // 警告をそのまま書き換え
  $('.home-sidebar-warning').replaceWith(amazon);

  // ボタン生成
  $('<button/>', {
    text: 'ID選ぶぜ',
    id: 'user_btn',
    click: function () {
      var num = document.getElementById('mynum');
      changeUser(num.value);
    }
  }).appendTo(".center-align-text");

  var pokemon_arr = [
"아라리",
"마그마",
"포니타",
"붐볼",
"캥카",
"코뿌리",
"홍수몬",
"쥬쥬",
"뿔카노",
"탕구리",
"투구",
"꼬렛",
"쥬피썬더",
"깨비드릴조",
"니드퀸",
"왕콘치",
"뿔충이",
"리자몽",
"내루미",
"거북왕",
"독침붕",
"샤미드",
"쁘사이저",
"식스테일",
"찌리리공",
"괴력몬",
"독파리",
"아쿠스타",
"수륙챙이",
"나인테일",
"페르시온",
"날쌩마",
"아보크",
"니드리나",
"냄새꼬",
"메타몽",
"라프라스",
"텅구리",
"모래두지",
"강챙이",
"주뱃",
"고우스트",
"고지",
"골뱃",
"발챙이",
"야도란",
"또도가스",
"망나뇽",
"리자드",
"썬더",
"우츠보트",
"후딘",
"딱충이",
"잠만보",
"피죤",
"가디",
"윤겔라",
"나시",
"파오리",
"신뇽",
"라이츄",
"딱구리",
"파이어",
"피죤투",
"프리져",
"라플레시아",
"에레브",
"왕눈해",
"스라크",
"알통몬",
"투구푸스",
"성원숭",
"레트라",
"롱스톤",
"이상해풀",
"켄타로스",
"파이리",
"마임맨",
"크랩",
"코일",
"모다피",
"팬텀",
"셀러",
"니드런♀",
"데구리",
"킹크랩",
"니드킹",
"별가사리",
"두두",
"두트리오",
"콘팡",
"도나리",
"캐터피",
"뮤",
"암나이트",
"덩구리",
"꼬부기",
"미뇽",
"푸린",
"삐삐",
"파라섹트",
"고오스",
"윈디",
"깨비참",
"또가스",
"골덕",
"피카츄",
"프테라",
"근육몬",
"망키",
"질뻐기",
"콘치",
"암스타",
"푸크린",
"갸라도스",
"파르셀",
"이브이",
"단데기",
"나옹",
"고라파덕",
"야돈",
"픽시",
"구구",
"이상해꽃",
"루주라",
"시드라",
"부스터",
"쏘드라",
"레어코일",
"질퍽이",
"버터플",
"이상해씨",
"폴리곤",
"시라소몬",
"잉어킹",
"파라스",
"우츠동",
"닥트리오",
"어니부기",
"럭키",
"디그다",
"캐이시",
"꼬마돌",
"쥬레곤",
"슬리퍼",
"아보",
"뚜벅쵸",
"뮤츠",
"슬리프",
"니드리노",
"니드런♂",
  ];

  // 辞書
  var poke_dic= {};

  // プルダウン内
  var $el = $('.dropdown-menu.inner');

  // ツールのため
  //var names = "";
  $.each($el.children(), function(index, value) {
    // ツールのため
    // names += "\"" + $(value).find(".text").text() + "\",";
    var en_name = $(value).find(".text").text();
    var jp_name = pokemon_arr[index];
    // textクラスを書き換え
    $(value).find(".text").text(pokemon_arr[index]);
    // ついでに辞書作り
    poke_dic[en_name] = jp_name;
  });
  // console.log(names);

  var nm;
  var poke_en;
  var poke_jp;

  // マップの中
　var countup = function(){
    // tipの名前
    var tip = $('.home-map-tooltip');
    var tmp = tip.attr("data-original-title");

    // <strong>Pidgey</strong><small>Despawns in 09:40
    if (typeof tmp !== "undefined") {
      var match = tmp.match(/<strong>(.*)<\/strong>/);
      if (typeof match[1] != "undefined") {

        var tmp_jp = poke_dic[match[1]];
        if (typeof tmp_jp != "undefined") {
          // 日本名ポケモン名
          // console.log(poke_jp);
          // 英語名ポケモン名仮（日本語になってることも）
          poke_en = match[1];
          poke_jp = poke_dic[poke_en];
        }
      }
    }

    if (typeof poke_en !== "undefined" &&
        typeof poke_jp !== "undefined"
    ) {
      var nm = $('.home-map-tooltip').attr("data-original-title");
      var replace_str = nm.replace(poke_en, poke_jp);
      $('.home-map-tooltip').attr("data-original-title", replace_str);

      // tip
      var tip = $('.tooltip-inner');
      if (tip !== "undefined") {
        var re = function() {
          tip.html(replace_str);
        }
        re();
      　setTimeout(re, 100);
      }
    }

　　setTimeout(countup, 300);
　} 

  // 何度も呼ぶ
　countup();
});
