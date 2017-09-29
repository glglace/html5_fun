title = '形近字';
question_lines = new Array(
  '柳 仰 抑,ㄌㄧㄡˇ柳 ㄕㄨˋ樹,ㄌㄧㄡˇ柳 ㄢˋ暗 ㄏㄨㄚ花 ㄇㄧㄥˊ明,ㄐㄧㄥˋ敬 ㄧㄤˇ仰,ㄖㄣˊ人 ㄧㄤˇ仰 ㄇㄚˇ馬 ㄈㄢ翻,ㄧㄚ壓 ㄧˋ抑,ㄧˋ抑 ㄓˋ制'
, '撲 樸,ㄆㄨ撲 ㄉㄚˇ打,ㄆㄨ撲 ㄇㄧㄝˋ滅,ㄆㄨˊ樸 ㄙㄨˋ素,ㄆㄨˊ樸 ㄕˊ實'
, '侵 浸,ㄑㄧㄣ侵 ㄕˊ蝕,ㄑㄧㄣ侵 ㄓㄢˋ佔,ㄐㄧㄣˋ浸 ㄆㄠˋ泡,ㄐㄧㄣˋ浸 ㄖㄢˇ染'
, '獨 燭 觸,ㄉㄢ單 ㄉㄨˊ獨,ㄍㄨ孤 ㄉㄨˊ獨,ㄓㄨˊ燭 ㄍㄨㄤ光,ㄉㄨㄥˋ洞 ㄓㄨˊ燭 ㄐㄧ機 ㄒㄧㄢ先,ㄐㄧㄝ接 ㄔㄨˋ觸,ㄔㄨˋ觸 ㄌㄟˋ類 ㄆㄤˊ旁 ㄊㄨㄥ通'
, '眺 挑,ㄊㄧㄠˋ眺 ㄨㄤˋ望,ㄉㄥ登 ㄍㄠ高 ㄩㄢˇ遠 ㄊㄧㄠˋ眺,ㄊㄧㄠ挑 ㄕㄨㄟˇ水,ㄊㄧㄠ挑 ㄒㄩㄢˇ選'
, '崖 涯,ㄉㄨㄢˋ斷 ㄧㄞˊ崖,ㄒㄩㄢˊ懸 ㄧㄞˊ崖 ㄌㄜˋ勒 ㄇㄚˇ馬,ㄕㄥ生 ㄧㄚˊ涯,ㄊㄧㄢ天 ㄧㄚˊ涯 ㄏㄞˇ海 ㄐㄧㄠˇ角'
, '捨 拾,ㄕㄜˇ捨 ㄑㄧˋ棄,ㄕㄜˇ捨 ㄅㄨˋ不 ˙ㄉㄜ得,ㄕㄡ收 ㄕˊ拾,ㄐㄧㄢˇ撿 ㄕˊ拾'
, '形 型,ㄒㄧㄥˊ形 ㄓㄨㄤˋ狀,ㄒㄧㄥˊ形 ㄖㄨㄥˊ容,ㄉㄧㄢˇ典 ㄒㄧㄥˊ型,ㄇㄛˊ模 ㄒㄧㄥˊ型'
, '準 准,ㄓㄨㄣˇ準 ㄅㄟˋ備,ㄓㄨㄣˇ準 ㄕˊ時,ㄆㄧ批 ㄓㄨㄣˇ准,ㄓㄨㄣˇ准 ㄒㄩˇ許'
, '菇 茹,ㄒㄧㄤ香 ㄍㄨ菇,ㄧㄤˊ洋 ㄍㄨ菇,ㄏㄢˊ含 ㄒㄧㄣ辛 ㄖㄨˊ茹 ㄎㄨˇ苦'
, '珠 株,ㄓㄣ珍 ㄓㄨ珠,ㄌㄟˋ淚 ㄓㄨ珠,ㄕㄡˇ守 ㄓㄨ株 ㄉㄞˋ待 ㄊㄨˋ兔'
);

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines,'語文高手');
};