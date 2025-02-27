﻿//-------------------------------
//Bubble::量詞大挑戰::題庫設定檔
//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 兩個斜線開頭的為註解、說明用的
// 自訂參數可以依說明，改成自己想要的內容
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//


//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 以下為自訂參數，請依說明，自行修改
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//

title = "量詞找名詞生手級";


//抽幾題題目來作答(0:表示使用全部的題庫)
numberOfQuestionsPerGame = 0;

//
//題庫設定
//

//欄位分隔符號
//
//題幹、正確答案和錯的選項和解說對話框文字之間的欄位分隔符號(共分為四個欄位)
question_O_X_seperator = ";";

//多個答案選項之間的分隔符號(對、錯都用同樣的符號)
options_seperator = ",";

//題目類型
// 1:數字(question_number_string)會由程式加到題庫的題幹欄位(第 1 欄)中
// 2:數字(question_number_string)會由程式加到題庫的選項欄位(第 2,3 欄)中
question_type = 1;	


//可使用的數字列表, 以 options_seperator 當分隔符號
question_number_string = "一,兩,三,四"; 

//
//題庫內容
//
// 一行一題
//
// 每一行依分隔符號 ; (question_O_X_seperator) 分為四欄
//
//  三欄由左而右，分別是：題幹、正確答案、錯的選項、說明
//
//  正確答案和錯的選項可以有多個，用 options_seperator 分隔
//
question_lines = function(){/*--這一行請勿更改--

個;蛋,糖果,皮球,杯子,書包,玩具,禮物,西瓜,石頭,孩子,學生,人;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,鹿,鉛筆,粉筆,鋼筆;用於沒有專用量詞的時候。
隻;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,鹿,猴子,黑狗,老鼠,小船,螃蟹,蝦;玉米,香蕉,釣竿,筷子,頭髮,大海,西瓜,白雲,樹葉,土司,草地,糖果,蛋,毛筆;用於某些成雙成對的東西中的一個、某些動物、某些日用器具、船隻等。
片;西瓜,白雲,樹葉,土司,草地;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,小鹿,鉛筆,粉筆,鋼筆;用於成片的東西，或地上和水面或景象、聲音、語言、心意等。
位;老師,客人,先生,總統;學校,醫院,大學,童詩,兒歌,老牛,猴子,老鼠,青蛙;用於人（含尊敬的意思）。
朵;小花,雲,菊花;玉米,香蕉,釣竿,筷子,頭髮,大海,西瓜;用於花朵或雲彩。
枝;鉛筆,粉筆,鋼筆,毛筆;國旗,牆壁,鏡子,黑狗,馬路,土司;用於帶枝子和花朵或樹的細枝葉、成杆狀的東西。
打;鉛筆,襪子,毛巾;花生,鳥,人,雲,牛,狗;十二個為一打。
包;糖,茶葉,衣服;花,豬,鳥,蛋,牛;用於裝成包的東西。
盒;布丁,底片,面紙,糖果,蚊香,餅乾;國旗,大海,樹葉,香蕉,西瓜;用於可裝在盒子裡的東西。
杯;酒,汽水,牛奶,水,茶,咖啡,豆漿;糖果,葡萄,白菜,西瓜,蚊香;用於可裝在杯子裡的東西。
瓶;酒,汽水,牛奶,醬油,豆漿;糖果,葡萄,土司,蛋,豆腐;用於可裝在瓶子裡的東西。
件;事情,衣服,行李,禮物;手錶,手帕,鞋子,襪子,傘;計算事物的單位。
棵;大樹,小草,白菜,榕樹;牙齒,星星,子彈,新聞,故事,眼睛,鉛筆,鋼筆,人;大多用於植物。
名;學生,老師,軍人,警察;兄弟,姊妹,鴛鴦,頭髮;用於有某種身份的人。
匹;布,馬;牛,山羊,黑狗,猴子,鳥;計算布、馬的單位。
頭;牛,山羊;馬,黑狗,猴子,鳥;計算牛、羊的單位。
段;繩子,鐵路,木頭,時間,路,話,文章,歌詞;花,人,香蕉,皮球,玩具,學生,鹿;用於長條東西分成的若干部分，或表或表示時間、路程的一定距離，或東西的一部分。
列;火車,士兵,學生;花,土司,馬路,山羊;用於成行的東西。
間;廚房,臥室,教室,廁所,套房;樓房,圍牆,地圖,手錶,桌子;房屋的最小單位。
條;黑狗,馬路,土司,領帶,大蛇,小溪,大河,大街,鐵路,新聞,小魚,香蕉;釣竿,筷子,頭髮,西瓜,白雲,樹葉,草地;用於細長的東西或分項的事務。
根;香蕉,釣竿,頭髮,竹竿;西瓜,白雲,樹葉,土司,草地,國旗,牆璧,鏡子;用於細長的東西。
所;學校,醫院,大學;童詩,兒歌,鏡子,國旗,水庫,大橋,高樓;通常用於房屋、學校、醫院等。
張;白紙,相片,地圖,牛皮,桌子,小床,椅子;領帶,小路,大風,木頭,黃瓜,手錶;用於計算有扁平面的東西。
粒;米飯,種子,藥丸,子彈,魚丸;垃圾,水庫,高樓,鏡子,山泉,國旗;通常是用於計算圓形細小的東西。

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
