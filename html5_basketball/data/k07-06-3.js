title = '多音字';
question_lines = new Array(
  'ㄏㄨㄣˊ ㄏㄨㄣˋ,ㄏㄨㄣˊ渾 ㄕㄣ身,ㄏㄨㄣˊ渾 ㄖㄢˊ然 ㄨㄤˋ忘 ㄨㄛˇ我,ㄏㄨㄣˊ渾 ㄕㄨㄟˇ水,ㄏㄨㄣˊ渾 ㄏㄨㄣˊ渾 ㄜˋ噩 ㄜˋ噩,ㄏㄨㄣˋ渾 ㄊㄧㄢ天 ㄧˊ儀'
, 'ㄓㄚˋ ㄓㄚˊ,ㄅㄠˋ爆 ㄓㄚˋ炸,ㄑㄧˋ氣 ㄓㄚˋ炸,ㄓㄚˊ炸 ㄐㄧ雞,ㄧㄡˊ油 ㄓㄚˊ炸'
);

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines,'語文高手');
};