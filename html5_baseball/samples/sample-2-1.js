﻿//
//開始比賽前, 說明對話框的說明文字
//
helpText = "請找成語中少的那個字。";

//*************************************************************************
//題庫
//*************************************************************************
//	類型1：每一行中就有題幹、正確選項和多個錯誤的選項 (三個欄位的題庫)
//*************************************************************************
//	格式說明：
//	1.用「半形分號」分隔了題幹、正確選項和錯誤選項
//	  [例]
//		  "題幹;正確選項;錯誤選項"			<---第一行
//		, "題幹;正確選項;錯誤選項"			<---第二行以後的(前面多了逗號)
//
//	2.錯誤選項有多個，用「半形逗號」再隔開
//	  [例]
//		  "題幹;正確選項;錯誤1,錯誤2,錯誤3,錯誤4,"
//
//*************************************************************************
//	類型2：每一行只有題幹和正確選項而已 (二個欄位的題庫)
//		   錯誤選項的部份由程式自動產生
//*************************************************************************
//	格式說明：
//	1.用「半形分號」分隔了正確選項和題幹
//	  [例]
//		  "題幹;正確選項"			<---第一行
//		, "題幹;正確選項"			<---第二行以後的(前面多了逗號)
//
//  底下的範例
//		1.採用二欄式的題庫
//		2.有使用「國字加注音」的格式，可以在國字旁加上直式注音
//
question_lines = new Array(
//-------------------以下開始貼您的題庫--------------------------
  "ㄋㄨㄥˋ弄 ㄑㄧㄠˇ巧 ㄔㄥˊ成 ㄓㄨㄛˊ拙;ㄋㄨㄥˋ弄"
, "ㄌㄠˊ勞 ㄧㄢˋ燕 ㄈㄣ分 ㄈㄟ飛;ㄧㄢˋ燕"
, "ㄧㄥ鶯 ㄕㄥ聲 ㄧㄢˋ燕 ㄩˇ語;ㄧㄥ鶯"
, "ㄈㄤˊ防 ㄨㄟˊ微 ㄉㄨˋ杜 ㄐㄧㄢˋ漸;ㄉㄨˋ杜"
, "ㄐㄩㄢ涓 ㄉㄧ滴 ㄍㄨㄟ歸 ㄍㄨㄥ公;ㄐㄩㄢ涓"
, "ㄕ詩 ㄑㄧㄥˊ情 ㄏㄨㄚˋ畫 ㄧˋ意;ㄕ詩"
//-------------------題庫結束------------------------------------
);


//基本設定
optionsTotal = 9;		//共有幾個選項
optionWidth = 100;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項


/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines);
};

